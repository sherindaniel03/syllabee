import { toast } from 'sonner@2.0.3';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PhoneticCardProps {
  letter: string;
  word: string;
  color: string;
  imageSrc?: string;
  isEnglish?: boolean;
}

export function PhoneticCard({ letter, word, color, imageSrc, isEnglish = true }: PhoneticCardProps) {
  const playSound = (type: 'letter' | 'word') => {
    if (type === 'letter') {
      toast.success(`Playing sound: "${letter}"`, {
        description: 'Letter phonetic sound would play here'
      });
    } else {
      toast.success(`Playing word: "${word}"`, {
        description: 'Word pronunciation would play here'
      });
    }
  };

  // Get the text color from the background color
  const getTextColor = (bgColor: string) => {
    return bgColor.replace('bg-', 'text-');
  };

  const textColor = getTextColor(color);

  // Determine font size based on word length
  const getWordFontSize = () => {
    const length = word.length;
    if (length <= 5) {
      return 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl';
    } else if (length <= 8) {
      return 'text-xl sm:text-2xl md:text-3xl lg:text-4xl';
    } else if (length <= 10) {
      return 'text-lg sm:text-xl md:text-2xl lg:text-3xl';
    } else {
      return 'text-base sm:text-lg md:text-xl lg:text-2xl';
    }
  };

  // Function to find and highlight the phonetic pattern in the word
  const highlightPhonemeInWord = () => {
    const lowerWord = word.toLowerCase();
    const lowerLetter = letter.toLowerCase();
    
    // Handle magic 'e' patterns like 'a_e', 'i_e', etc.
    if (lowerLetter.includes('_')) {
      const parts = lowerLetter.split('_');
      if (parts.length === 2) {
        const [firstVowel, lastLetter] = parts;
        // Find pattern like 'a[consonant]e' in the word
        const regex = new RegExp(`(${firstVowel})([^aeiou])(${lastLetter})`, 'i');
        const match = lowerWord.match(regex);
        
        if (match && match.index !== undefined) {
          const beforeMatch = word.slice(0, match.index);
          const matchedPart = word.slice(match.index, match.index + match[0].length);
          const afterMatch = word.slice(match.index + match[0].length);
          
          return (
            <>
              <span className="text-black">{beforeMatch}</span>
              <span className={textColor}>{matchedPart}</span>
              <span className="text-black">{afterMatch}</span>
            </>
          );
        }
      }
    }
    
    // For regular phonemes, find the exact match
    const index = lowerWord.indexOf(lowerLetter);
    
    if (index !== -1) {
      const beforeMatch = word.slice(0, index);
      const matchedPart = word.slice(index, index + lowerLetter.length);
      const afterMatch = word.slice(index + lowerLetter.length);
      
      return (
        <>
          <span className="text-black">{beforeMatch}</span>
          <span className={textColor}>{matchedPart}</span>
          <span className="text-black">{afterMatch}</span>
        </>
      );
    }
    
    // Fallback: if phoneme not found, just show the word
    return <span className="text-black">{word}</span>;
  };

  return (
    <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
      <button
        onClick={() => playSound('letter')}
        className={`${color} text-white rounded-lg md:rounded-xl flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer shadow-lg flex-shrink-0 aspect-square w-[60px] sm:w-[70px] md:w-[85px] lg:w-[100px]`}
      >
        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">{letter}</span>
      </button>
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-1 min-w-0">
        <button
          onClick={() => playSound('word')}
          className="cursor-pointer hover:opacity-70 transition-opacity text-left flex-1 min-w-0"
        >
          <span className={`${getWordFontSize()} break-words leading-tight block`}>
            {highlightPhonemeInWord()}
          </span>
        </button>
        {imageSrc && (
          <button
            onClick={() => playSound('word')}
            className="rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform flex-shrink-0 cursor-pointer aspect-square w-[60px] sm:w-[70px] md:w-[85px] lg:w-[100px]"
          >
            <ImageWithFallback
              src={imageSrc}
              alt={word}
              className="w-full h-full object-cover"
            />
          </button>
        )}
      </div>
    </div>
  );
}