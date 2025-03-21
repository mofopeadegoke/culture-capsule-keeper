
import React from 'react';
import { Book, Utensils, Palette, Music, Landmark, Camera } from 'lucide-react';
import CategoryCard from './CategoryCard';

const CategorySection: React.FC = () => {
  const categories = [
    {
      title: 'Historical Events',
      description: 'Discover pivotal moments that shaped North Cyprus through time.',
      imageSrc: 'https://images.unsplash.com/photo-1606988476330-57acee391295?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      icon: <Landmark className="text-capsule-accent" size={24} />,
      href: '#history',
    },
    {
      title: 'Local Recipes',
      description: 'Explore traditional cuisine and culinary traditions passed down through generations.',
      imageSrc: 'https://images.unsplash.com/photo-1469307670224-ee1e8d1ed97c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
      icon: <Utensils className="text-capsule-accent" size={24} />,
      href: '#recipes',
    },
    {
      title: 'Arts & Crafts',
      description: 'Discover traditional art forms and crafts that represent cultural identity.',
      imageSrc: 'https://images.unsplash.com/photo-1596455681373-931d0e1d1c92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      icon: <Palette className="text-capsule-accent" size={24} />,
      href: '#arts',
    },
    {
      title: 'Folklore & Stories',
      description: 'Immerse yourself in myths, legends, and stories passed down through generations.',
      imageSrc: 'https://images.unsplash.com/photo-1577083288073-40892c0860a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      icon: <Book className="text-capsule-accent" size={24} />,
      href: '#folklore',
    },
    {
      title: 'Music & Dance',
      description: 'Experience traditional music and dances that reflect cultural heritage.',
      imageSrc: 'https://images.unsplash.com/photo-1516307346494-3b281aaa3a1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      icon: <Music className="text-capsule-accent" size={24} />,
      href: '#music',
    },
    {
      title: 'Photo Archive',
      description: 'Browse historical photographs documenting life, places, and events.',
      imageSrc: 'https://images.unsplash.com/photo-1551225183-94acb7d595b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      icon: <Camera className="text-capsule-accent" size={24} />,
      href: '#photos',
    },
  ];

  return (
    <section id="categories" className="py-20 bg-capsule-paper relative">
      <div className="absolute inset-0 opacity-[0.04] bg-noise-pattern mix-blend-multiply" />
      
      <div className="capsule-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-capsule-sand rounded-full text-sm font-medium mb-4">
            Explore Categories
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold mb-4">
            Discover Cultural Heritage
          </h2>
          
          <p className="text-capsule-text/80 leading-relaxed">
            Dive into the rich cultural tapestry of North Cyprus through our categorized archives.
            Each category represents a unique facet of cultural heritage waiting to be explored and preserved.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              description={category.description}
              imageSrc={category.imageSrc}
              icon={category.icon}
              href={category.href}
              index={index}
              className="animate-fade-in opacity-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
