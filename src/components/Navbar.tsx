
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <nav className="bg-capsule-paper border-b border-capsule-paper/50 fixed top-0 left-0 w-full z-50">
      <div className="capsule-container py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-serif font-semibold text-capsule-text">
          Cultural Capsules
        </Link>
        
        <div className="flex items-center gap-1">
          <LanguageSwitcher />
          {user ? (
            <div className="flex items-center gap-2">
              <Button 
                onClick={() => navigate('/contribute')}
                variant="ghost"
                className="text-capsule-text hover:bg-capsule-paper"
              >
                {t('contribute')}
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
