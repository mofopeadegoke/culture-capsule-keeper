
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import AnimatedImage from './AnimatedImage';
import { useLanguage } from '@/contexts/LanguageContext';

interface CollectionCardProps {
  title: string;
  category: string;
  contributor: string;
  date: string;
  imageSrc: string;
  href: string;
  className?: string;
}

const CollectionCard: React.FC<CollectionCardProps> = ({
  title,
  category,
  contributor,
  date,
  imageSrc,
  href,
  className,
}) => {
  const { t } = useLanguage();
  
  return (
    <Link 
      to={href}
      className={cn(
        "group flex flex-col bg-white rounded-xl overflow-hidden shadow-card hover:shadow-capsule transition-all duration-500 transform hover:-translate-y-1",
        className
      )}
    >
      <div className="relative overflow-hidden">
        <AnimatedImage 
          src={imageSrc} 
          alt={title} 
          aspectRatio="aspect-[3/2]" 
          className="w-full transition-transform duration-700 group-hover:scale-105"
        />
        
        <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-capsule-text">
          {category}
        </div>
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-xl font-serif font-semibold text-capsule-text mb-2 group-hover:text-capsule-accent transition-colors">
          {title}
        </h3>
        
        <div className="mt-auto pt-4 flex items-center justify-between text-xs text-capsule-text/70">
          <span>{t('by')} {contributor}</span>
          <span>{date}</span>
        </div>
      </div>
    </Link>
  );
};

export default CollectionCard;
