
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from '@/contexts/LanguageContext';
import CollectionCard from '@/components/CollectionCard';
import { collections } from '@/data/collections';

const Featured: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const categories = ["all", "history", "recipes", "arts", "folklore", "photos", "music"];
  
  const filteredCollections = activeCategory === "all" 
    ? collections 
    : collections.filter(collection => 
        collection.category.toLowerCase().includes(activeCategory)
      );

  return (
    <div className="min-h-screen bg-capsule-bg">
      <Navbar />
      
      <main className="pt-28 pb-20">
        <section className="capsule-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 bg-capsule-sand rounded-full text-sm font-medium mb-4">
              {t('featured_capsules')}
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-serif font-semibold mb-6">
              {t('cultural_capsules')}
            </h1>
            
            <p className="text-capsule-text/80 leading-relaxed">
              {t('featured_description')}
            </p>
          </div>
          
          <Tabs defaultValue="all" className="w-full mb-10">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-capsule-paper">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    onClick={() => setActiveCategory(category)}
                    className="capitalize"
                  >
                    {t(category === "all" ? "all" : category)}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {categories.map((category) => (
              <TabsContent key={category} value={category} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredCollections.map((collection, index) => (
                    <div
                      key={`${category}-${index}`}
                      className="animate-fade-in opacity-0"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CollectionCard {...collection} />
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
          
          {filteredCollections.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-serif mb-4">{t('no_results')}</h3>
              <p className="text-capsule-text/70 mb-6">{t('try_different_category')}</p>
              <Button onClick={() => setActiveCategory("all")}>
                {t('view_all')}
              </Button>
            </div>
          )}
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Featured;
