import { Home, ChevronLeft, ChevronRight } from 'lucide-react';
import { PhoneticCard } from './PhoneticCard';

interface EnglishPhoneticsPageProps {
  onNavigate: (page: string) => void;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export function EnglishPhoneticsPage({ onNavigate, currentPage, onPageChange }: EnglishPhoneticsPageProps) {
  const pages = [
    {
      title: 'SHORT VOWELS',
      color: 'text-red-600',
      items: [
        { letter: 'a', word: 'apple', color: 'bg-red-600', image: 'https://images.unsplash.com/photo-1670808439268-79d2cb00a46e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'e', word: 'elephant', color: 'bg-red-600', image: 'https://images.unsplash.com/photo-1661222721866-8144328aa1c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'i', word: 'igloo', color: 'bg-red-600', image: 'https://images.unsplash.com/photo-1610711353407-e69bdfb79d49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'o', word: 'octopus', color: 'bg-red-600', image: 'https://images.unsplash.com/photo-1604350005543-11e377f642ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'u', word: 'umbrella', color: 'bg-red-600', image: 'https://images.unsplash.com/photo-1523772721666-22ad3c3b6f90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
      ]
    },
    {
      title: 'CONSONANTS - 1',
      color: 'text-blue-600',
      items: [
        { letter: 'b', word: 'ball', color: 'bg-blue-600', image: 'https://images.unsplash.com/photo-1535332371349-a5d229f49cb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'c', word: 'car', color: 'bg-blue-600', image: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'd', word: 'doll', color: 'bg-blue-600', image: 'https://images.unsplash.com/photo-1580981564523-fb5c00891e23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'f', word: 'fish', color: 'bg-blue-600', image: 'https://images.unsplash.com/photo-1603031532585-34192bc4489f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'g', word: 'gift', color: 'bg-blue-600', image: 'https://images.unsplash.com/photo-1720160644902-d447e3313b95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
      ]
    },
    {
      title: 'CONSONANTS - 2',
      color: 'text-blue-600',
      items: [
        { letter: 'h', word: 'hat', color: 'bg-blue-600', image: 'https://images.unsplash.com/photo-1535332371349-a5d229f49cb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'j', word: 'jug', color: 'bg-blue-600', image: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'k', word: 'kite', color: 'bg-blue-600', image: 'https://images.unsplash.com/photo-1580981564523-fb5c00891e23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'l', word: 'ladder', color: 'bg-blue-600', image: 'https://images.unsplash.com/photo-1603031532585-34192bc4489f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'm', word: 'moon', color: 'bg-blue-600', image: 'https://images.unsplash.com/photo-1720160644902-d447e3313b95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
      ]
    },
    {
      title: 'CONSONANTS - 3',
      color: 'text-blue-600',
      items: [
        { letter: 'n', word: 'net', color: 'bg-blue-600', image: 'https://images.unsplash.com/photo-1535332371349-a5d229f49cb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'p', word: 'pig', color: 'bg-blue-600', image: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'qu', word: 'queen', color: 'bg-blue-600', image: 'https://images.unsplash.com/photo-1580981564523-fb5c00891e23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'r', word: 'ring', color: 'bg-blue-600', image: 'https://images.unsplash.com/photo-1603031532585-34192bc4489f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 's', word: 'sun', color: 'bg-blue-600', image: 'https://images.unsplash.com/photo-1720160644902-d447e3313b95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
      ]
    },
    {
      title: 'CONSONANTS - 4',
      color: 'text-blue-600',
      items: [
        { letter: 't', word: 'tree', color: 'bg-blue-600', image: 'https://images.unsplash.com/photo-1535332371349-a5d229f49cb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'v', word: 'van', color: 'bg-blue-600', image: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'w', word: 'watermelon', color: 'bg-blue-600', image: 'https://images.unsplash.com/photo-1580981564523-fb5c00891e23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'x', word: 'xylophone', color: 'bg-blue-600', image: 'https://images.unsplash.com/photo-1603031532585-34192bc4489f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'y', word: 'yo-yo', color: 'bg-blue-600', image: 'https://images.unsplash.com/photo-1720160644902-d447e3313b95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'z', word: 'zip', color: 'bg-blue-600', image: 'https://images.unsplash.com/photo-1720160644902-d447e3313b95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
      ]
    },
     {
      title: 'CONSONANT TEAMS - 1',
      color: 'text-green-600',
      items: [
        { letter: 'tch', word: 'watch', color: 'bg-green-600', image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'dge', word: 'bridge', color: 'bg-green-600', image: 'https://images.unsplash.com/photo-1585870339273-8f3188e45407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'kn', word: 'knife', color: 'bg-green-600', image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'nk', word: 'ink', color: 'bg-green-600', image: 'https://images.unsplash.com/photo-1583459982852-e285e00b2a8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'ck', word: 'duck', color: 'bg-green-600', image: 'https://images.unsplash.com/photo-1515594644269-80d5b1e4d9c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'gn', word: 'gnome', color: 'bg-green-600', image: 'https://images.unsplash.com/photo-1586251695404-e7fa93248d5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'ng', word: 'ring', color: 'bg-green-600', image: 'https://images.unsplash.com/photo-1515594644269-80d5b1e4d9c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'wr', word: 'wrong', color: 'bg-green-600', image: 'https://images.unsplash.com/photo-1586251695404-e7fa93248d5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
      ]
    },
    {
      title: 'r - BLEND WORDS',
      color: 'text-green-600',
      items: [
        { letter: 'cr', word: 'crab', color: 'bg-green-600', image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'fr', word: 'frog', color: 'bg-green-600', image: 'https://images.unsplash.com/photo-1585870339273-8f3188e45407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'gr', word: 'grass', color: 'bg-green-600', image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'scr', word: 'screw', color: 'bg-green-600', image: 'https://images.unsplash.com/photo-1583459982852-e285e00b2a8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'tr', word: 'train', color: 'bg-green-600', image: 'https://images.unsplash.com/photo-1515594644269-80d5b1e4d9c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'pr', word: 'prize', color: 'bg-green-600', image: 'https://images.unsplash.com/photo-1586251695404-e7fa93248d5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'br', word: 'bread', color: 'bg-green-600', image: 'https://images.unsplash.com/photo-1515594644269-80d5b1e4d9c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
      ]
    },
    {
      title: 'l - BLEND WORDS',
      color: 'text-green-600',
      items: [
        { letter: 'fl', word: 'flag', color: 'bg-green-600', image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'gl', word: 'glasses', color: 'bg-green-600', image: 'https://images.unsplash.com/photo-1585870339273-8f3188e45407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'pl', word: 'plate', color: 'bg-green-600', image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'bl', word: 'blocks', color: 'bg-green-600', image: 'https://images.unsplash.com/photo-1583459982852-e285e00b2a8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'cl', word: 'clock', color: 'bg-green-600', image: 'https://images.unsplash.com/photo-1515594644269-80d5b1e4d9c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
      ]
    },
    {
      title: 'h - BLEND WORDS',
      color: 'text-green-600',
      items: [
        { letter: 'ch', word: 'chain', color: 'bg-green-600', image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'sh', word: 'ship', color: 'bg-green-600', image: 'https://images.unsplash.com/photo-1585870339273-8f3188e45407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'th', word: 'thumb', color: 'bg-green-600', image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'wh', word: 'whale', color: 'bg-green-600', image: 'https://images.unsplash.com/photo-1583459982852-e285e00b2a8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'ph', word: 'phone', color: 'bg-green-600', image: 'https://images.unsplash.com/photo-1515594644269-80d5b1e4d9c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
      ]
    },
    {
      title: 'R-CONTROLLED WORDS',
      color: 'text-purple-600',
      items: [
        { letter: 'ar', word: 'star', color: 'bg-purple-600', image: 'https://images.unsplash.com/photo-1604949210966-9440c324823f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'er', word: 'flower', color: 'bg-purple-600', image: 'https://images.unsplash.com/photo-1694802608187-000f909d051a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'ir', word: 'bird', color: 'bg-purple-600', image: 'https://images.unsplash.com/photo-1665412019489-1928d5afa5cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'or', word: 'corn', color: 'bg-purple-600', image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'ur', word: 'purse', color: 'bg-purple-600', image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'ear', word: 'bear', color: 'bg-purple-600', image: 'https://images.unsplash.com/photo-1622178121688-1c3831feb040?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'our', word: 'pour', color: 'bg-purple-600', image: 'https://images.unsplash.com/photo-1622178121688-1c3831feb040?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
      ]
    },
    {
      title: 'LONG VOWELS - 1',
      color: 'text-red-600',
      items: [
        { letter: 'ai', word: 'snail', color: 'bg-red-600', image: 'https://images.unsplash.com/photo-1628618584114-1e78c63e3026?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'ay', word: 'clay', color: 'bg-red-600', image: 'https://images.unsplash.com/photo-1615671524827-c1fe3973b648?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'a_e', word: 'face', color: 'bg-red-600', image: 'https://images.unsplash.com/photo-1623249288685-835abe0123b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
     ]
  },
    {
      title: 'LONG VOWELS - 2',
      color: 'text-red-600',
      items: [
         { letter: 'ee', word: 'sheep', color: 'bg-red-600', image: 'https://images.unsplash.com/photo-1667897129436-106061e53fb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'ea', word: 'eagle', color: 'bg-red-600', image: 'https://images.unsplash.com/photo-1654110513700-594e15dd6b6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'ey', word: 'key', color: 'bg-red-600', image: 'https://images.unsplash.com/photo-1582139329536-e7ff9c586560?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'ei', word: 'weigh', color: 'bg-red-600', image: 'https://images.unsplash.com/photo-1581578949510-fa7315c4c350?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'e_e', word: 'athlete', color: 'bg-red-600', image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
      ]
    },
     {
      title: 'LONG VOWELS - 3',
      color: 'text-red-600',
      items: [ 
        { letter: 'y', word: 'cry', color: 'bg-red-600', image: 'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'igh', word: 'light', color: 'bg-red-600', image: 'https://images.unsplash.com/photo-1666626238358-24d592bd5e18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'ie', word: 'tie', color: 'bg-red-600', image: 'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'i_e', word: 'kite', color: 'bg-red-600', image: 'https://images.unsplash.com/photo-1666626238358-24d592bd5e18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
      ]
    },
    
     {
      title: 'LONG VOWELS - 4',
      color: 'text-red-600',
      items: [ 
        { letter: 'oa', word: 'boat', color: 'bg-red-600', image: 'https://images.unsplash.com/photo-1600788907416-45f0f5c5a8e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'oe', word: 'toe', color: 'bg-red-600', image: 'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'oo', word: 'moon', color: 'bg-red-600', image: 'https://images.unsplash.com/photo-1666626238358-24d592bd5e18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'o_e', word: 'home', color: 'bg-red-600', image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
      ]
    },
    {
     title: 'LONG VOWELS - 5',
      color: 'text-red-600',
      items: [ 
        { letter: 'ew', word: 'screw', color: 'bg-red-600', image: 'https://images.unsplash.com/photo-1600788907416-45f0f5c5a8e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'ui', word: 'fruit', color: 'bg-red-600', image: 'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'ue', word: 'queue', color: 'bg-red-600', image: 'https://images.unsplash.com/photo-1666626238358-24d592bd5e18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'u_e', word: 'flute', color: 'bg-red-600', image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
      ]
    },
     {
     title: 'LONG VOWELS - 6',
      color: 'text-red-600',
      items: [ 
        { letter: 'oi', word: 'boil', color: 'bg-red-600', image: 'https://images.unsplash.com/photo-1600788907416-45f0f5c5a8e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'oy', word: 'boy', color: 'bg-red-600', image: 'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'au', word: 'sauce', color: 'bg-red-600', image: 'https://images.unsplash.com/photo-1666626238358-24d592bd5e18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'aw', word: 'paw', color: 'bg-red-600', image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
      ]
    },
     {
     title: 'LONG VOWELS - 4',
      color: 'text-red-600',
      items: [ 
        { letter: 'ou', word: 'soup', color: 'bg-red-600', image: 'https://images.unsplash.com/photo-1600788907416-45f0f5c5a8e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'ow', word: 'cow', color: 'bg-red-600', image: 'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
        { letter: 'ough', word: 'thought', color: 'bg-red-600', image: 'https://images.unsplash.com/photo-1666626238358-24d592bd5e18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
      ]
    },
  ];

  const current = pages[currentPage];

  // Split items into two columns
  const leftColumn = current.items.filter((_, index) => index % 2 === 0);
  const rightColumn = current.items.filter((_, index) => index % 2 === 1);

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

        {/* Content Area - Two Column Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-5 min-h-0 mb-2 sm:mb-3">
          {/* Left Column */}
          <div className="space-y-2 sm:space-y-2.5 md:space-y-3 lg:space-y-4 flex flex-col justify-center">
            {leftColumn.map((item, index) => (
              <PhoneticCard
                key={`left-${index}`}
                letter={item.letter}
                word={item.word}
                color={item.color}
                imageSrc={item.image}
                isEnglish={true}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-2 sm:space-y-2.5 md:space-y-3 lg:space-y-4 hidden sm:flex sm:flex-col sm:justify-center">
            {rightColumn.map((item, index) => (
              <PhoneticCard
                key={`right-${index}`}
                letter={item.letter}
                word={item.word}
                color={item.color}
                imageSrc={item.image}
                isEnglish={true}
              />
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-3 sm:gap-4">
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
