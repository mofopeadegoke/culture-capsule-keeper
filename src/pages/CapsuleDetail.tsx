
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { collections } from '@/data/collections';
import { useLanguage } from '@/contexts/LanguageContext';

const CapsuleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  const capsule = collections.find((c, index) => index.toString() === id);
  
  if (!capsule) {
    return (
      <div className="min-h-screen bg-capsule-bg dark:bg-gray-900">
        <Navbar />
        <div className="pt-28 pb-20 text-center">
          <h1 className="text-3xl font-serif mb-4 text-capsule-text dark:text-white">Capsule not found</h1>
          <Button onClick={() => navigate('/featured')}>
            Return to Featured Capsules
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-capsule-bg dark:bg-gray-900">
      <Navbar />
      
      <main className="pt-28 pb-20">
        <div className="capsule-container">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="mb-6 flex items-center gap-2 text-capsule-text dark:text-white"
          >
            <ArrowLeft size={18} />
            <span>Back</span>
          </Button>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-card overflow-hidden">
            <div className="relative h-[50vh] overflow-hidden">
              <img 
                src={capsule.imageSrc} 
                alt={capsule.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              
              <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="inline-block px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full text-sm font-medium text-capsule-text dark:text-white mb-4">
                  {capsule.category}
                </div>
                <h1 className="text-4xl sm:text-5xl font-serif font-semibold mb-4 text-white">
                  {capsule.title}
                </h1>
                <div className="flex items-center gap-6 text-white/80">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{t('by')} {capsule.contributor}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{capsule.date}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 sm:p-12">
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed mb-6 text-capsule-text dark:text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae lacinia nisl, nec tempor felis. Vivamus sollicitudin, orci eget convallis vestibulum, mi dui tempor nulla, non fringilla ipsum sem quis velit. Phasellus ornare magna vel magna sodales, id tristique eros vulputate.
                </p>
                
                <p className="mb-6 text-capsule-text dark:text-gray-300">
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus.
                </p>
                
                <p className="mb-6 text-capsule-text dark:text-gray-300">
                  Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
                </p>
                
                <h2 className="text-2xl font-serif font-semibold mb-4 mt-8 text-capsule-text dark:text-white">
                  Historical Context
                </h2>
                
                <p className="mb-6 text-capsule-text dark:text-gray-300">
                  Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec sollicitudin molestie malesuada.
                </p>
                
                <p className="mb-6 text-capsule-text dark:text-gray-300">
                  Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CapsuleDetail;
