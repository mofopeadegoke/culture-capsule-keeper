
import React, { useRef, useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import CollectionCard from './CollectionCard';
import { cn } from '@/lib/utils';

const FeaturedCollections: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const collections = [
    {
      title: 'The 1974 Turkish Intervention: Personal Accounts',
      category: 'Historical Events',
      contributor: 'Prof. Mehmet Kaplan',
      date: 'Jun 23, 2023',
      imageSrc: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      href: '#history-1',
    },
    {
      title: 'Traditional Hellim Cheese: From Farm to Table',
      category: 'Local Recipes',
      contributor: 'Ayşe Yılmaz',
      date: 'May 15, 2023',
      imageSrc: 'https://images.unsplash.com/photo-1505253716291-6997be06f64b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      href: '#recipes-1',
    },
    {
      title: 'Leftkoniko Pottery: A Dying Artform',
      category: 'Arts & Crafts',
      contributor: 'Elena Christodoulou',
      date: 'Apr 3, 2023',
      imageSrc: 'https://images.unsplash.com/photo-1619065513237-828bf1956fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
      href: '#arts-1',
    },
    {
      title: 'The Legend of the Five Finger Mountain',
      category: 'Folklore & Stories',
      contributor: 'Mustafa Kaya',
      date: 'Mar 19, 2023',
      imageSrc: 'https://images.unsplash.com/photo-1657214059233-5626b35eb349?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80',
      href: '#folklore-1',
    },
    {
      title: 'Exploring Famagusta: A City of Rich History',
      category: 'Photo Archive',
      contributor: 'Sophia Andreou',
      date: 'Feb 8, 2023',
      imageSrc: 'https://images.unsplash.com/photo-1628944681210-2119613fe56a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      href: '#photos-1',
    },
    {
      title: 'Traditional Cypriot Wedding Customs',
      category: 'Music & Dance',
      contributor: 'Hasan Özgür',
      date: 'Jan 14, 2023',
      imageSrc: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      href: '#music-1',
    },
  ];
  
  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const scrollAmount = 400; // Adjust as needed
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  
  const checkScrollability = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 10);
  };
  
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    container.addEventListener('scroll', checkScrollability);
    checkScrollability();
    
    return () => container.removeEventListener('scroll', checkScrollability);
  }, []);

  return (
    <section id="explore" className="py-20 bg-white relative">
      <div className="absolute inset-0 opacity-[0.02] bg-noise-pattern mix-blend-multiply" />
      
      <div className="capsule-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div className="mb-6 md:mb-0">
            <div className="inline-block px-3 py-1 bg-capsule-sand rounded-full text-sm font-medium mb-4">
              Featured Archives
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold mb-3">
              Latest Cultural Capsules
            </h2>
            
            <p className="text-capsule-text/80 leading-relaxed max-w-2xl">
              Explore recently contributed cultural treasures from our community. Each capsule preserves a unique aspect of North Cyprus's heritage.
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={cn(
                "p-3 rounded-full border transition-all",
                canScrollLeft 
                  ? "border-capsule-text/20 hover:border-capsule-accent hover:text-capsule-accent" 
                  : "border-capsule-text/10 text-capsule-text/30 cursor-not-allowed"
              )}
              aria-label="Scroll left"
            >
              <ArrowLeft size={18} />
            </button>
            
            <button 
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={cn(
                "p-3 rounded-full border transition-all",
                canScrollRight 
                  ? "border-capsule-text/20 hover:border-capsule-accent hover:text-capsule-accent" 
                  : "border-capsule-text/10 text-capsule-text/30 cursor-not-allowed"
              )}
              aria-label="Scroll right"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto hide-scrollbar gap-5 pb-5 -mx-4 px-4"
          style={{ scrollbarWidth: 'none' }}
        >
          {collections.map((collection, index) => (
            <div 
              key={collection.title} 
              className="flex-shrink-0 w-full sm:w-[350px] animate-fade-in opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CollectionCard {...collection} />
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="#all-collections" 
            className="inline-flex items-center gap-2 text-capsule-accent hover:text-capsule-accent/80 font-medium transition-colors"
          >
            <span>View All Cultural Capsules</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
