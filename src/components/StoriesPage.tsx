import { Home } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface StoriesPageProps {
  onNavigate: (page: string) => void;
  onSelectStory: (storyId: number) => void;
}

export function StoriesPage({ onNavigate, onSelectStory }: StoriesPageProps) {
  const stories = [
    {
      id: 1,
      title: "The Hare and the Tortoise",
      image: "https://images.unsplash.com/photo-1612434290112-13b9c868208d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
      id: 2,
      title: "The Dog and the Bone",
      image: "https://images.unsplash.com/photo-1674816795411-899170a81626?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWlyeSUyMHRhbGUlMjBjYXN0bGV8ZW58MXx8fHwxNzU5NjU2MDkwfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 3,
      title: "The Thirsty Crow",
      image: "https://images.unsplash.com/photo-1657703685466-8c60b84a222d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqdW5nbGUlMjBhbmltYWxzfGVufDF8fHx8MTc1OTY2NzM5NHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 4,
      title: "The Fox and the Grapes",
      image: "https://images.unsplash.com/photo-1603031532585-34192bc4489f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMGFzdHJvbmF1dCUyMGtpZHN8ZW58MXx8fHwxNzU5NjY3Mzk0fDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <div className="h-screen bg-gradient-to-b from-pink-100 to-pink-200 p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col overflow-hidden">
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col">
        <button
          onClick={() => onNavigate('home')}
          className="mb-3 sm:mb-4 md:mb-6 bg-white p-2 sm:p-3 md:p-4 rounded-full shadow-lg hover:bg-gray-100 transition-colors w-fit"
        >
          <Home className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-pink-600" />
        </button>

        <h1 className="text-3xl sm:text-4xl md:text-5xl text-pink-800 mb-4 sm:mb-6 text-center">Stories</h1>

        <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 min-h-0 items-stretch content-start">
          {stories.map((story) => (
            <div 
              key={story.id}
              className="bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200 cursor-pointer flex flex-col max-h-full"
              onClick={() => onSelectStory(story.id)}
            >
              <div className="relative h-[50%] min-h-0">
                <ImageWithFallback
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-2 sm:p-3 md:p-4 flex flex-col gap-2 sm:gap-3 h-[50%] justify-center">
                <h3 className="text-lg sm:text-xl md:text-2xl text-pink-900 text-center line-clamp-2">{story.title}</h3>
                <button
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 rounded-lg md:rounded-xl transition-colors text-base sm:text-lg md:text-xl"
                >
                  Read Story
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
