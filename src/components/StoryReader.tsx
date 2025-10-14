import { useState } from 'react';
import { Home, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { toast } from 'sonner@2.0.3';

interface StoryReaderProps {
  story: {
    id: number;
    title: string;
    pages: {
      text: string;
      image?: string;
    }[];
  };
  onNavigate: (page: string) => void;
}

export function StoryReader({ story, onNavigate }: StoryReaderProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayAudio = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      toast.success('Playing audio narration', {
        description: `Reading: "${story.pages[currentPage].text}"`
      });
      // Simulate audio ending after 3 seconds
      setTimeout(() => setIsPlaying(false), 3000);
    } else {
      toast.info('Paused audio');
    }
  };

  return (
    <div className="h-screen bg-gradient-to-b from-pink-100 to-pink-200 p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col overflow-hidden">
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col">
        <button
          onClick={() => onNavigate('stories')}
          className="mb-3 sm:mb-4 md:mb-6 bg-white p-2 sm:p-3 md:p-4 rounded-full shadow-lg hover:bg-gray-100 transition-colors w-fit"
        >
          <Home className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-pink-600" />
        </button>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-pink-800 mb-3 sm:mb-4 md:mb-6 text-center">{story.title}</h1>

        <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl p-3 sm:p-4 md:p-6 lg:p-8 mb-3 sm:mb-4 md:mb-6 flex-1 flex flex-col min-h-0 overflow-hidden">
          {story.pages[currentPage].image ? (
            <div className="flex-1 flex flex-col lg:flex-row gap-3 sm:gap-4 md:gap-6 items-stretch min-h-0">
              <div className="lg:w-1/2 flex-shrink-0 h-[35vh] sm:h-[40vh] lg:h-full">
                <ImageWithFallback
                  src={story.pages[currentPage].image}
                  alt={`Page ${currentPage + 1}`}
                  className="w-full h-full object-cover rounded-lg md:rounded-xl shadow-lg"
                />
              </div>
              <div className="lg:w-1/2 flex flex-col justify-center gap-2 sm:gap-3 md:gap-4 min-h-0">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-800 overflow-y-auto flex-1">
                  {story.pages[currentPage].text}
                </p>
                <button
                  onClick={handlePlayAudio}
                  className="bg-pink-500 hover:bg-pink-600 text-white py-2 sm:py-2.5 md:py-3 px-4 sm:px-5 md:px-6 rounded-lg md:rounded-xl flex items-center justify-center gap-2 transition-colors text-sm sm:text-base md:text-lg flex-shrink-0"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                      Pause
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                      Read Aloud
                    </>
                  )}
                </button>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-6 px-4 sm:px-6 md:px-8 lg:px-12 min-h-0">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-800 text-center overflow-y-auto">
                {story.pages[currentPage].text}
              </p>
              <button
                onClick={handlePlayAudio}
                className="bg-pink-500 hover:bg-pink-600 text-white py-2 sm:py-2.5 md:py-3 px-4 sm:px-5 md:px-6 rounded-lg md:rounded-xl flex items-center justify-center gap-2 transition-colors text-sm sm:text-base md:text-lg flex-shrink-0"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    Pause
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    Read Aloud
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        <div className="flex justify-between items-center">
          <span className="text-lg sm:text-xl md:text-2xl text-pink-800">
            Page {currentPage + 1} of {story.pages.length}
          </span>
          <div className="flex gap-2 sm:gap-3 md:gap-4">
            <button
              onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
              disabled={currentPage === 0}
              className={`bg-white p-2 sm:p-3 md:p-4 rounded-full shadow-lg transition-colors ${
                currentPage === 0 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:bg-gray-100'
              }`}
            >
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-pink-600" />
            </button>
            <button
              onClick={() => setCurrentPage(Math.min(story.pages.length - 1, currentPage + 1))}
              disabled={currentPage === story.pages.length - 1}
              className={`bg-white p-2 sm:p-3 md:p-4 rounded-full shadow-lg transition-colors ${
                currentPage === story.pages.length - 1 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:bg-gray-100'
              }`}
            >
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-pink-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
