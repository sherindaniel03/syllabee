import { useState } from 'react';
import { Home } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface GamesPageProps {
  onNavigate: (page: string) => void;
}

interface Card {
  id: number;
  content: string;
  image?: string;
  pairId: number;
  isFlipped: boolean;
  isMatched: boolean;
  isImage: boolean;
}

export function GamesPage({ onNavigate }: GamesPageProps) {
  // All words from English Phonetics page
  const allCardPairs = [
    { letter: 'a', word: 'apple', image: 'https://images.unsplash.com/photo-1670808439268-79d2cb00a46e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'e', word: 'elephant', image: 'https://images.unsplash.com/photo-1661222721866-8144328aa1c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'i', word: 'igloo', image: 'https://images.unsplash.com/photo-1610711353407-e69bdfb79d49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'o', word: 'octopus', image: 'https://images.unsplash.com/photo-1604350005543-11e377f642ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'u', word: 'umbrella', image: 'https://images.unsplash.com/photo-1523772721666-22ad3c3b6f90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'b', word: 'ball', image: 'https://images.unsplash.com/photo-1535332371349-a5d229f49cb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'c', word: 'car', image: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'd', word: 'doll', image: 'https://images.unsplash.com/photo-1580981564523-fb5c00891e23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'f', word: 'fish', image: 'https://images.unsplash.com/photo-1603031532585-34192bc4489f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'g', word: 'gift', image: 'https://images.unsplash.com/photo-1720160644902-d447e3313b95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'h', word: 'hat', image: 'https://images.unsplash.com/photo-1535332371349-a5d229f49cb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'j', word: 'jug', image: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'k', word: 'kite', image: 'https://images.unsplash.com/photo-1580981564523-fb5c00891e23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'l', word: 'ladder', image: 'https://images.unsplash.com/photo-1603031532585-34192bc4489f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'm', word: 'moon', image: 'https://images.unsplash.com/photo-1720160644902-d447e3313b95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'n', word: 'net', image: 'https://images.unsplash.com/photo-1535332371349-a5d229f49cb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'p', word: 'pig', image: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'qu', word: 'queen', image: 'https://images.unsplash.com/photo-1580981564523-fb5c00891e23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'r', word: 'ring', image: 'https://images.unsplash.com/photo-1603031532585-34192bc4489f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 's', word: 'sun', image: 'https://images.unsplash.com/photo-1720160644902-d447e3313b95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 't', word: 'tree', image: 'https://images.unsplash.com/photo-1535332371349-a5d229f49cb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'v', word: 'van', image: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'w', word: 'watermelon', image: 'https://images.unsplash.com/photo-1580981564523-fb5c00891e23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'x', word: 'xylophone', image: 'https://images.unsplash.com/photo-1603031532585-34192bc4489f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'y', word: 'yo-yo', image: 'https://images.unsplash.com/photo-1720160644902-d447e3313b95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'z', word: 'zip', image: 'https://images.unsplash.com/photo-1720160644902-d447e3313b95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'tch', word: 'watch', image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'dge', word: 'bridge', image: 'https://images.unsplash.com/photo-1585870339273-8f3188e45407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'kn', word: 'knife', image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'nk', word: 'ink', image: 'https://images.unsplash.com/photo-1583459982852-e285e00b2a8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'ck', word: 'duck', image: 'https://images.unsplash.com/photo-1515594644269-80d5b1e4d9c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'gn', word: 'gnome', image: 'https://images.unsplash.com/photo-1586251695404-e7fa93248d5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'ng', word: 'ring', image: 'https://images.unsplash.com/photo-1515594644269-80d5b1e4d9c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'wr', word: 'wrong', image: 'https://images.unsplash.com/photo-1586251695404-e7fa93248d5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'cr', word: 'crab', image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'fr', word: 'frog', image: 'https://images.unsplash.com/photo-1585870339273-8f3188e45407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'gr', word: 'grass', image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'scr', word: 'screw', image: 'https://images.unsplash.com/photo-1583459982852-e285e00b2a8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'tr', word: 'train', image: 'https://images.unsplash.com/photo-1515594644269-80d5b1e4d9c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'pr', word: 'prize', image: 'https://images.unsplash.com/photo-1586251695404-e7fa93248d5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'br', word: 'bread', image: 'https://images.unsplash.com/photo-1515594644269-80d5b1e4d9c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'fl', word: 'flag', image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'gl', word: 'glasses', image: 'https://images.unsplash.com/photo-1585870339273-8f3188e45407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'pl', word: 'plate', image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'bl', word: 'blocks', image: 'https://images.unsplash.com/photo-1583459982852-e285e00b2a8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'cl', word: 'clock', image: 'https://images.unsplash.com/photo-1515594644269-80d5b1e4d9c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'ch', word: 'chain', image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'sh', word: 'ship', image: 'https://images.unsplash.com/photo-1585870339273-8f3188e45407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'th', word: 'thumb', image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'wh', word: 'whale', image: 'https://images.unsplash.com/photo-1583459982852-e285e00b2a8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'ph', word: 'phone', image: 'https://images.unsplash.com/photo-1515594644269-80d5b1e4d9c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'ar', word: 'star', image: 'https://images.unsplash.com/photo-1604949210966-9440c324823f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'er', word: 'flower', image: 'https://images.unsplash.com/photo-1694802608187-000f909d051a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'ir', word: 'bird', image: 'https://images.unsplash.com/photo-1665412019489-1928d5afa5cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'or', word: 'corn', image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'ur', word: 'purse', image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'ear', word: 'bear', image: 'https://images.unsplash.com/photo-1622178121688-1c3831feb040?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'our', word: 'pour', image: 'https://images.unsplash.com/photo-1622178121688-1c3831feb040?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'ai', word: 'snail', image: 'https://images.unsplash.com/photo-1628618584114-1e78c63e3026?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'ay', word: 'clay', image: 'https://images.unsplash.com/photo-1615671524827-c1fe3973b648?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'a_e', word: 'face', image: 'https://images.unsplash.com/photo-1623249288685-835abe0123b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'ee', word: 'sheep', image: 'https://images.unsplash.com/photo-1667897129436-106061e53fb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'ea', word: 'eagle', image: 'https://images.unsplash.com/photo-1654110513700-594e15dd6b6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'ey', word: 'key', image: 'https://images.unsplash.com/photo-1582139329536-e7ff9c586560?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'ei', word: 'weigh', image: 'https://images.unsplash.com/photo-1581578949510-fa7315c4c350?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { letter: 'e_e', word: 'athlete', image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
  ];

  // Function to randomly select 10 pairs from all available pairs
  const selectRandomPairs = () => {
    const shuffled = [...allCardPairs].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 10).map((pair, index) => ({
      ...pair,
      pairId: index + 1
    }));
  };

  const [cardPairs] = useState(() => selectRandomPairs());

  const initializeCards = (): Card[] => {
    const cards: Card[] = [];
    cardPairs.forEach((pair) => {
      // Add letter card
      cards.push({
        id: pair.pairId * 2 - 1,
        content: pair.letter,
        pairId: pair.pairId,
        isFlipped: false,
        isMatched: false,
        isImage: false,
      });
      // Add image card
      cards.push({
        id: pair.pairId * 2,
        content: pair.word,
        image: pair.image,
        pairId: pair.pairId,
        isFlipped: false,
        isMatched: false,
        isImage: true,
      });
    });
    // Shuffle the cards
    return cards.sort(() => Math.random() - 0.5);
  };

  const [cards, setCards] = useState<Card[]>(initializeCards());
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [canFlip, setCanFlip] = useState(true);

  const handleCardClick = (index: number) => {
    if (!canFlip || cards[index].isFlipped || cards[index].isMatched) return;
    if (flippedIndices.includes(index)) return;

    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);

    const newFlipped = [...flippedIndices, index];
    setFlippedIndices(newFlipped);

    if (newFlipped.length === 2) {
      setCanFlip(false);
      const [firstIndex, secondIndex] = newFlipped;
      const firstCard = newCards[firstIndex];
      const secondCard = newCards[secondIndex];
      
      // Check if they match by pairId
      const isMatch = firstCard.pairId === secondCard.pairId;
      
      setTimeout(() => {
        const updatedCards = [...newCards];
        
        if (isMatch) {
          updatedCards[firstIndex].isMatched = true;
          updatedCards[secondIndex].isMatched = true;
          toast.success('Match found! 🎉');
        } else {
          updatedCards[firstIndex].isFlipped = false;
          updatedCards[secondIndex].isFlipped = false;
          toast.error('Try again!');
        }
        
        setCards(updatedCards);
        setFlippedIndices([]);
        setCanFlip(true);
      }, 1000);
    }
  };

  const resetGame = () => {
    // Get new random pairs and reinitialize
    const newPairs = selectRandomPairs();
    const newInitializedCards = (): Card[] => {
      const cards: Card[] = [];
      newPairs.forEach((pair) => {
        cards.push({
          id: pair.pairId * 2 - 1,
          content: pair.letter,
          pairId: pair.pairId,
          isFlipped: false,
          isMatched: false,
          isImage: false,
        });
        cards.push({
          id: pair.pairId * 2,
          content: pair.word,
          image: pair.image,
          pairId: pair.pairId,
          isFlipped: false,
          isMatched: false,
          isImage: true,
        });
      });
      return cards.sort(() => Math.random() - 0.5);
    };
    setCards(newInitializedCards());
    setFlippedIndices([]);
    setCanFlip(true);
    toast.info('New game started!');
  };

  const matchedCount = cards.filter(c => c.isMatched).length / 2;
  const totalPairs = cardPairs.length;
  return (
    <div className="h-screen bg-gradient-to-b from-purple-100 to-purple-200 p-2 flex flex-col overflow-hidden">
      <div className="max-w-4xl mx-auto w-full h-full flex flex-col min-h-0">
        <div className="flex justify-between items-center mb-1">
          <button
            onClick={() => onNavigate('home')}
            className="bg-white p-1.5 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          >
            <Home className="w-5 h-5 text-purple-600" />
          </button>

          <button
            onClick={resetGame}
            className="bg-purple-500 hover:bg-purple-600 text-white py-1.5 px-3 rounded-lg transition-colors text-xs"
          >
            New Game
          </button>
        </div>

        <h1 className="text-lg text-purple-800 mb-1 text-center">Memory Game</h1>
        <p className="text-xs text-purple-700 mb-1 text-center">
          Match Letters with Pictures - {matchedCount} / {totalPairs} pairs found
        </p>

        <div className="flex-1 min-h-0 overflow-y-auto px-1">
          <div className="w-full max-w-3xl mx-auto py-1">
            <div className="grid grid-cols-5 gap-1 w-full">
              {cards.map((card, index) => (
                <button
                  key={card.id}
                  onClick={() => handleCardClick(index)}
                  className={`aspect-square rounded shadow flex items-center justify-center transition-all duration-300 overflow-hidden ${
                    card.isFlipped || card.isMatched
                      ? 'bg-white'
                      : 'bg-purple-400 hover:bg-purple-500'
                  } ${card.isMatched ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
                  disabled={!canFlip && !card.isFlipped}
                >
                  {(card.isFlipped || card.isMatched) ? (
                    card.isImage ? (
                      <ImageWithFallback
                        src={card.image!}
                        alt={card.content}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-purple-800 px-0.5 text-center break-words leading-tight">
                        {card.content}
                      </span>
                    )
                  ) : (
                    <span className="text-2xl sm:text-3xl md:text-4xl text-white">?</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {matchedCount === totalPairs && (
          <div className="text-center mt-1 pb-2">
            <p className="text-sm text-purple-800 mb-1">🎉 Congratulations! 🎉</p>
            <button
              onClick={resetGame}
              className="bg-purple-500 hover:bg-purple-600 text-white py-1.5 px-4 rounded-lg transition-colors text-xs"
            >
              Play Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
