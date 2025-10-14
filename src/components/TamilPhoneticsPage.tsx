import { Home, ChevronLeft, ChevronRight } from 'lucide-react';
import { PhoneticCard } from './PhoneticCard';

interface TamilPhoneticsPageProps {
  onNavigate: (page: string) => void;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export function TamilPhoneticsPage({ onNavigate, currentPage, onPageChange }: TamilPhoneticsPageProps) {
  const pages = [
    {
      title: 'உயிர் எழுத்துக்கள் - 1',
      color: 'text-red-600',
      items: [
        { letter: 'அ', word: 'அம்மா', color: 'bg-red-600', image: 'https://images.unsplash.com/photo-1623249288685-835abe0123b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'ஆ', word: 'ஆடு', color: 'bg-red-600', image: 'https://images.unsplash.com/photo-1667897129436-106061e53fb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'இ', word: 'இலை', color: 'bg-red-600', image: 'https://images.unsplash.com/photo-1694802608187-000f909d051a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'ஈ', word: 'ஈ', color: 'bg-red-600', image: 'https://images.unsplash.com/photo-1718556258226-5fbcf6d7d6ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'உ', word: 'உடல்', color: 'bg-red-600', image: 'https://images.unsplash.com/photo-1531520563951-4c0e3d3fcacc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
      ]
    },
    {
      title: 'உயிர் எழுத்துக்கள் - 2',
      color: 'text-red-600',
      items: [
        { letter: 'ஊ', word: 'ஊசி', color: 'bg-red-600', image: 'https://images.unsplash.com/photo-1698766902696-e3c98378d400?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'எ', word: 'எலி', color: 'bg-red-600', image: 'https://images.unsplash.com/photo-1648331607020-aa51a96ff38d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'ஏ', word: 'ஏணி', color: 'bg-red-600', image: 'https://images.unsplash.com/photo-1619691245661-a97b7fddfb73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'ஐ', word: 'ஐந்து', color: 'bg-red-600', image: 'https://images.unsplash.com/photo-1588687768829-0c95d909a4b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'ஒ', word: 'ஒட்டகம்', color: 'bg-red-600', image: 'https://images.unsplash.com/photo-1495833066942-79abe24b0c1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
      ]
    },
    {
      title: 'உயிர் எழுத்துக்கள் - 3',
      color: 'text-red-600',
      items: [
        { letter: 'ஓ', word: 'ஓடம்', color: 'bg-red-600', image: 'https://images.unsplash.com/photo-1600788907416-45f0f5c5a8e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'ஔ', word: 'ஔவை', color: 'bg-red-600', image: 'https://images.unsplash.com/photo-1623249288685-835abe0123b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { type: 'header', text: 'ஆயுத எழுத்து', color: 'text-red-600' },
        { letter: 'ஃ', word: 'எஃகு', color: 'bg-red-600', image: 'https://images.unsplash.com/photo-1623249288685-835abe0123b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
      ]
    },
    {
      title: 'மெய் எழுத்துக்கள் - 1',
      color: 'text-blue-600',
      items: [
        { letter: 'க்', word: 'கொக்கு', color: 'bg-blue-600', image: 'https://images.unsplash.com/photo-1670808439268-79d2cb00a46e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'ங்', word: 'சிங்கம்', color: 'bg-blue-600', image: 'https://images.unsplash.com/photo-1531520563951-4c0e3d3fcacc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'ச்', word: 'தச்சர்', color: 'bg-blue-600', image: 'https://images.unsplash.com/photo-1663888672547-360e763e4ac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'ஞ்', word: 'இஞ்சி', color: 'bg-blue-600', image: 'https://images.unsplash.com/photo-1604949210966-9440c324823f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'ட்', word: 'பெட்டி', color: 'bg-blue-600', image: 'https://images.unsplash.com/photo-1515467699666-4adf84b2fd42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'ண்', word: 'நண்டு', color: 'bg-blue-600', image: 'https://images.unsplash.com/photo-1670808439268-79d2cb00a46e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
      ]
    },
    {
      title: 'மெய் எழுத்துக்கள் - 2',
      color: 'text-blue-600',
      items: [
        { letter: 'த்', word: 'நத்தை', color: 'bg-blue-600', image: 'https://images.unsplash.com/photo-1588687768829-0c95d909a4b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'ந்', word: 'பந்து', color: 'bg-blue-600', image: 'https://images.unsplash.com/photo-1616109259043-fd30a7663a5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'ப்', word: 'பாப்பா', color: 'bg-blue-600', image: 'https://images.unsplash.com/photo-1606529015526-db6c13024ea7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'ம்', word: 'பம்பரம்', color: 'bg-blue-600', image: 'https://images.unsplash.com/photo-1694802608187-000f909d051a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'ய்', word: 'நாய்', color: 'bg-blue-600', image: 'https://images.unsplash.com/photo-1661222721866-8144328aa1c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'ர்', word: 'தேர்', color: 'bg-blue-600', image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
      ]
    },
    {
      title: 'மெய் எழுத்துக்கள் - 3',
      color: 'text-blue-600',
      items: [
        { letter: 'ல்', word: 'சேவல்', color: 'bg-blue-600', image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'வ்', word: 'செவ்வந்தி', color: 'bg-blue-600', image: 'https://images.unsplash.com/photo-1666626238358-24d592bd5e18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'ழ்', word: 'தாழ்பாள்', color: 'bg-blue-600', image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'ள்', word: 'தேள்', color: 'bg-blue-600', image: 'https://images.unsplash.com/photo-1604594849809-dfedbc827105?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'ற்', word: 'நாற்காலி', color: 'bg-blue-600', image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'ன்', word: 'மான்', color: 'bg-blue-600', image: 'https://images.unsplash.com/photo-1623249288685-835abe0123b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
      ]
    },
  ];

  const current = pages[currentPage];

  // Process items to handle headers that span full width
  const processedItems: Array<{ type: 'row' | 'header', content: any }> = [];
  let tempRow: any[] = [];
  
  current.items.forEach((item: any, index: number) => {
    if (item.type === 'header') {
      // If we have items in tempRow, add them as a row first
      if (tempRow.length > 0) {
        processedItems.push({ type: 'row', content: tempRow });
        tempRow = [];
      }
      // Add header
      processedItems.push({ type: 'header', content: item });
    } else {
      tempRow.push(item);
      // If we have 2 items or it's the last item, create a row
      if (tempRow.length === 2 || index === current.items.length - 1) {
        processedItems.push({ type: 'row', content: tempRow });
        tempRow = [];
      }
    }
  });

  return (
    <div className="h-screen bg-white p-2 sm:p-3 md:p-4 lg:p-6 flex flex-col overflow-hidden">
      <div className="max-w-[1800px] mx-auto w-full h-full flex flex-col">
        {/* Home Button */}
        <button
          onClick={() => onNavigate('home')}
          className="mb-2 sm:mb-3 p-1 sm:p-2 w-fit"
        >
          <Home className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-black" />
        </button>

        {/* Title */}
        <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl ${current.color} mb-2 sm:mb-3 md:mb-4 text-center`}>
          {current.title}
        </h1>

        {/* Content Area */}
        <div className="flex-1 flex flex-col justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 min-h-0 mb-2 sm:mb-3">
          {processedItems.map((processedItem, idx) => {
            if (processedItem.type === 'header') {
              return (
                <div key={`header-${idx}`} className="flex items-center justify-center py-2 sm:py-3">
                  <div className="h-0.5 flex-1 bg-red-600"></div>
                  <h2 className={`px-3 sm:px-4 md:px-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl ${processedItem.content.color}`}>
                    {processedItem.content.text}
                  </h2>
                  <div className="h-0.5 flex-1 bg-red-600"></div>
                </div>
              );
            } else {
              // Render row with 1 or 2 items
              return (
                <div key={`row-${idx}`} className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-5">
                  {processedItem.content.map((item: any, itemIdx: number) => (
                    <PhoneticCard
                      key={`item-${idx}-${itemIdx}`}
                      letter={item.letter}
                      word={item.word}
                      color={item.color}
                      imageSrc={item.image}
                      isEnglish={false}
                    />
                  ))}
                </div>
              );
            }
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-3 sm:gap-4 mt-3 sm:mt-4">
          <button
            onClick={() => onPageChange(Math.max(0, currentPage - 1))}
            disabled={currentPage === 0}
            className={`p-1 sm:p-2 rounded-full border-2 border-black transition-opacity ${
              currentPage === 0 
                ? 'opacity-30 cursor-not-allowed' 
                : 'hover:bg-gray-100'
            }`}
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
          </button>
          <button
            onClick={() => onPageChange(Math.min(pages.length - 1, currentPage + 1))}
            disabled={currentPage === pages.length - 1}
            className={`p-1 sm:p-2 rounded-full border-2 border-black transition-opacity ${
              currentPage === pages.length - 1 
                ? 'opacity-30 cursor-not-allowed' 
                : 'hover:bg-gray-100'
            }`}
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
          </button>
        </div>
      </div>
    </div>
  );
}
