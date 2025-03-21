
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-capsule-bg p-4">
      <div className="max-w-md w-full p-8 bg-white rounded-xl shadow-capsule text-center">
        <div className="w-20 h-20 rounded-full bg-capsule-paper mx-auto flex items-center justify-center mb-6">
          <span className="text-4xl font-serif font-bold text-capsule-accent">404</span>
        </div>
        
        <h1 className="text-2xl font-serif font-semibold mb-3 text-capsule-text">
          Page Not Found
        </h1>
        
        <p className="text-capsule-text/70 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <a
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-capsule-accent text-white rounded-md hover:bg-capsule-accent/90 transition-colors"
        >
          <ArrowLeft size={18} />
          <span>Return to Home</span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
