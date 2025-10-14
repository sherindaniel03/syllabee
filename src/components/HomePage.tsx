import { Button } from './ui/button';
import { BookOpen, Languages, BookMarked, Gamepad2 } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const menuItems = [
    { 
      id: 'english-phonetics', 
      label: 'English Phonetics', 
      icon: BookOpen,
      color: 'bg-red-400 hover:bg-red-500'
    },
    { 
      id: 'tamil-phonetics', 
      label: 'Tamil Phonetics', 
      icon: Languages,
      color: 'bg-blue-400 hover:bg-blue-500'
    },
    { 
      id: 'stories', 
      label: 'Stories', 
      icon: BookMarked,
      color: 'bg-green-400 hover:bg-green-500'
    },
    { 
      id: 'games', 
      label: 'Games', 
      icon: Gamepad2,
      color: 'bg-purple-400 hover:bg-purple-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50 flex flex-col items-center justify-center p-8">
      <div className="text-7xl mb-8">🐝</div>
      <h1 className="text-6xl text-orange-900 mb-12">Syllabee</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl w-full">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`${item.color} text-white p-8 rounded-3xl shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95`}
            >
              <Icon className="w-16 h-16 mx-auto mb-4" />
              <span className="text-3xl block">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
