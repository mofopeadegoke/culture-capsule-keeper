import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import UserButton from './UserButton';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const { user } = useAuth();
  const { t } = useLanguage();

  return (
    <nav className="bg-capsule-paper dark:bg-gray-800 border-b border-capsule-paper/50 dark:border-gray-700/50 fixed top-0 left-0 w-full z-50">
      <div className="capsule-container py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-serif font-semibold text-capsule-text dark:text-white">
          Cultural Capsules
        </Link>
        
        <div className="flex items-center gap-1">
          <LanguageSwitcher />
          <ThemeToggle />
          <UserButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
