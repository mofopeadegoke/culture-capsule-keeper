
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';
import { Button } from '@/components/ui/button';
import { Home, Book, Utensils, Palette, Music, Plus } from 'lucide-react';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <nav className="bg-capsule-paper border-b border-capsule-paper/50 fixed top-0 left-0 w-full z-50">
      <div className="capsule-container py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-serif font-semibold text-capsule-text mr-8">
            Cultural Capsules
          </Link>
          
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="px-3 py-2 rounded text-capsule-text hover:bg-capsule-sand/30 flex items-center gap-1.5">
              <Home size={18} />
              <span>{t('home')}</span>
            </Link>
            <Link to="/history" className="px-3 py-2 rounded text-capsule-text hover:bg-capsule-sand/30 flex items-center gap-1.5">
              <Book size={18} />
              <span>{t('history')}</span>
            </Link>
            <Link to="/recipes" className="px-3 py-2 rounded text-capsule-text hover:bg-capsule-sand/30 flex items-center gap-1.5">
              <Utensils size={18} />
              <span>{t('recipes')}</span>
            </Link>
            <Link to="/arts" className="px-3 py-2 rounded text-capsule-text hover:bg-capsule-sand/30 flex items-center gap-1.5">
              <Palette size={18} />
              <span>{t('arts')}</span>
            </Link>
            <Link to="/folklore" className="px-3 py-2 rounded text-capsule-text hover:bg-capsule-sand/30 flex items-center gap-1.5">
              <Music size={18} />
              <span>{t('folklore')}</span>
            </Link>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          {user ? (
            <div className="flex items-center gap-2">
              <Button 
                onClick={() => navigate('/contribute')}
                variant="ghost"
                className="text-capsule-text hover:bg-capsule-paper flex items-center gap-1.5"
              >
                <Plus size={18} />
                <span className="hidden sm:inline">{t('contribute')}</span>
              </Button>
              <Button 
                onClick={logout}
                variant="ghost"
                className="text-capsule-text hover:bg-capsule-paper"
              >
                {t('logout')}
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Button 
                onClick={() => navigate('/contribute')}
                variant="ghost"
                className="text-capsule-text hover:bg-capsule-paper hidden sm:flex items-center gap-1.5"
              >
                <Plus size={18} />
                <span>{t('contribute')}</span>
              </Button>
              <Button 
                onClick={() => navigate('/login')}
                variant="ghost"
                className="text-capsule-text hover:bg-capsule-paper"
              >
                {t('login')}
              </Button>
              <Button 
                onClick={() => navigate('/signup')}
                variant="outline"
                className="bg-capsule-accent text-white hover:bg-capsule-accent/90 border-none"
              >
                {t('signup')}
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
