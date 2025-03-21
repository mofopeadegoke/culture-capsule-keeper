
import React, { useEffect, useState } from 'react';
import { ArrowDownCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  const scrollToCategories = () => {
    const categoriesSection = document.getElementById('categories');
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
      <div className="absolute inset-0 bg-gradient-to-b from-capsule-bg to-white/50 -z-10" />
      
      <div className="absolute inset-0 opacity-[0.03] bg-noise-pattern mix-blend-multiply -z-10" />
      
      <div className="capsule-container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center">
        <div className="max-w-xl">
          <div className={cn(
            "opacity-0 transform translate-y-4 transition-all duration-700 ease-out",
            isVisible && "opacity-100 translate-y-0"
          )}>
            <div className="inline-block px-3 py-1 bg-capsule-sand rounded-full text-sm font-medium mb-6">
              Preserving North Cyprus Heritage
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold leading-tight mb-6 text-balance">
              Capturing Culture, Preserving Memories
            </h1>
            
            <p className="text-lg text-capsule-text/80 mb-8 leading-relaxed">
              Discover, document, and safeguard the rich cultural heritage of North Cyprus through stories, recipes, art, and traditions for generations to come.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contribute" 
                className="px-6 py-3 bg-capsule-accent hover:bg-capsule-accent/90 text-white rounded-md font-medium transition-all transform hover:translate-y-[-2px] hover:shadow-md"
              >
                Start Contributing
              </a>
              
              <a 
                href="#explore" 
                className="px-6 py-3 bg-transparent border border-capsule-accent text-capsule-accent rounded-md font-medium hover:bg-capsule-accent/5 transition-all"
              >
                Explore Archives
              </a>
            </div>
          </div>
        </div>
        
        <div className={cn(
          "relative opacity-0 transform translate-y-4 transition-all duration-700 delay-300 ease-out",
          isVisible && "opacity-100 translate-y-0"
        )}>
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-capsule-paper relative z-10 transform transition-transform duration-500 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-noise-pattern opacity-[0.04] mix-blend-multiply" />
              <img 
                src="https://images.unsplash.com/photo-1580932691853-a824e995e57a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="North Cyprus Heritage" 
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-40 h-40 rounded-xl overflow-hidden shadow-capsule transform transition-transform duration-500 hover:scale-[1.05] z-20">
              <img 
                src="https://images.unsplash.com/photo-1599661046279-5ba9c2499391?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" 
                alt="Traditional Crafts" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -top-4 -right-4 w-32 h-32 rounded-xl overflow-hidden shadow-capsule transform transition-transform duration-500 hover:scale-[1.05] z-0">
              <img 
                src="https://images.unsplash.com/photo-1613531441137-54c2c8207184?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                alt="Cultural Traditions" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToCategories}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float text-capsule-accent hover:text-capsule-text transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDownCircle size={36} />
      </button>
    </section>
  );
};

export default Hero;
