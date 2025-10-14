import { useState } from 'react';
import { Toaster } from './components/ui/sonner';
import { SplashScreen } from './components/SplashScreen';
import { HomePage } from './components/HomePage';
import { StoriesPage } from './components/StoriesPage';
import { StoryReader } from './components/StoryReader';
import { GamesPage } from './components/GamesPage';
import { EnglishPhoneticsPage } from './components/EnglishPhoneticsPage';
import { TamilPhoneticsPage } from './components/TamilPhoneticsPage';

type Page = 'splash' | 'home' | 'english-phonetics' | 'tamil-phonetics' | 'stories' | 'story-reader' | 'games';

const storyData = [
  {
    id: 1,
    title: "The Hare and the Tortoise",
    pages: [
      {
        text: "Once, there was a hare who was best friends with a tortoise.",
        image: "https://images.unsplash.com/photo-1612434290112-13b9c868208d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
      },
       {
        text: "The hare was very proud of how fast he could run, so one day, he challenged the tortoise to a race.",
        image: "https://images.unsplash.com/photo-1612434290112-13b9c868208d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
      },
      {
        text: "The tortoise agreed, even though everyone thought he was way too slow to win. ",
        image: "https://images.unsplash.com/photo-1681172638955-b3d30482aaa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
      },
       {
        text: " The race began, and the hare raced so fast that he was far ahead of the tortoise.",
        image: "https://images.unsplash.com/photo-1681172638955-b3d30482aaa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
      },
      {
        text: "Feeling confident, the hare decided to take a nap under a tree while the tortoise kept going, step by step.",
        image: "https://images.unsplash.com/photo-1603590725832-41d764b2a6a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
      },
       {
        text: "When the hare woke up, he was shocked to see the tortoise crossing the finish line.",
        image: "https://images.unsplash.com/photo-1603590725832-41d764b2a6a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
      },
      {
        text: "The tortoise had won the race! Moral of the story: It doesn't matter how fast or strong you are—what matters is being steady and never giving up. And don't be too proud, it can cause trouble!",
      }
      
    ]
  },
  {
    id: 2,
    title: "The Dog and the Bone",
    pages: [
      {
        text: "One day, a dog found a big, tasty bone. He was so excited that he grabbed it and ran to find a quiet spot to chew it in peace.",
        image: "https://images.unsplash.com/photo-1674816795411-899170a81626?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
      },
      {
        text: " While crossing a river, he looked down and saw his reflection in the water. But the silly dog thought it was another dog with another bone!",
        image: "https://images.unsplash.com/photo-1673640525972-3c0dd5e6a933?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
      },
      {
        text: "Greedy for more, the dog barked to snatch that “other” bone.",
        image: "https://images.unsplash.com/photo-1586251695404-e7fa93248d5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
      },
      {
        text: "But as soon as he opened his mouth, his own bone dropped into the water and sank. The poor dog lost it all and had to go home with nothing.",
        image: "https://images.unsplash.com/photo-1586251695404-e7fa93248d5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
      },
      {
        text: "Moral of the story: If you’re too greedy and always want more, you might lose what you already have."
        
      }
    ]
  },
  {
    id: 3,
    title: "The Thirsty Crow",
    pages: [
      {
        text: "A thirsty crow was flying through a forest, looking everywhere for water. Finally, he saw a pot with some water at the bottom, but his beak couldn’t reach it.",
        image: "https://images.unsplash.com/photo-1657703685466-8c60b84a222d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
      },
      {
        text: "The crow didn’t give up. He looked around and noticed some pebbles on the ground.",
        image: "https://images.unsplash.com/photo-1661222721866-8144328aa1c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
      },
      {
        text: "The clever crow started dropping the pebbles into the pot one by one.",
        image: "https://images.unsplash.com/photo-1515467699666-4adf84b2fd42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
      },
       {
        text: "Slowly, the water rose higher and higher until it was close enough for him to drink. The crow finally quenched his thirst and flew away happily.",
        image: "https://images.unsplash.com/photo-1515467699666-4adf84b2fd42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
      },
      {
        text: "Moral of the story: You can solve any problem if you think smart and don’t give up!"
      }
    ]
  },
  {
    id: 4,
    title: "The Fox and the Grapes",
    pages: [
      {
        text: "A hungry fox was walking past a vineyard when he saw some ripe, juicy grapes hanging from a vine.",
        image: "https://images.unsplash.com/photo-1603031532585-34192bc4489f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
      },
      {
        text: "The fox jumped high to grab them but couldn’t reach them, no matter how hard he tried.",
        image: "https://images.unsplash.com/photo-1535332371349-a5d229f49cb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
      },
      {
        text: "Tired and frustrated, the fox walked away, grumbling, “Those grapes are probably sour anyway!” But deep down, he knew he had just given up too quickly.",
        image: "https://images.unsplash.com/photo-1604949210966-9440c324823f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
      },
      {
        text: "Moral of the story: Don’t make excuses when something is hard—keep trying!"
      }
    ]
  }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('splash');
  const [englishPhoneticPage, setEnglishPhoneticPage] = useState(0);
  const [tamilPhoneticPage, setTamilPhoneticPage] = useState(0);
  const [selectedStoryId, setSelectedStoryId] = useState<number>(1);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    // Reset sub-pages when navigating to phonetics
    if (page === 'english-phonetics') {
      setEnglishPhoneticPage(0);
    } else if (page === 'tamil-phonetics') {
      setTamilPhoneticPage(0);
    }
  };

  const handleSelectStory = (storyId: number) => {
    setSelectedStoryId(storyId);
    setCurrentPage('story-reader');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'splash':
        return <SplashScreen onComplete={() => setCurrentPage('home')} />;
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'english-phonetics':
        return (
          <EnglishPhoneticsPage
            onNavigate={handleNavigate}
            currentPage={englishPhoneticPage}
            onPageChange={setEnglishPhoneticPage}
          />
        );
      case 'tamil-phonetics':
        return (
          <TamilPhoneticsPage
            onNavigate={handleNavigate}
            currentPage={tamilPhoneticPage}
            onPageChange={setTamilPhoneticPage}
          />
        );
      case 'stories':
        return <StoriesPage onNavigate={handleNavigate} onSelectStory={handleSelectStory} />;
      case 'story-reader':
        const story = storyData.find(s => s.id === selectedStoryId);
        return story ? <StoryReader story={story} onNavigate={handleNavigate} /> : null;
      case 'games':
        return <GamesPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="size-full">
      {renderPage()}
      <Toaster position="top-center" />
    </div>
  );
}
