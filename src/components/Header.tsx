import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const categories = [
  'Tous',
  'Organisation',
  'Finances', 
  'Éducation',
  'Santé',
  'Équilibre',
  'Développement',
  'Loisirs',
  'Outils Pratiques'
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo et titre */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
              <Home className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg">Harmonik</span>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
              À propos
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Menu mobile */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Menu mobile déroulant */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="px-2 py-4 space-y-2">
              <Link 
                to="/about" 
                className="block px-3 py-2 text-sm font-medium hover:bg-accent rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-2 text-sm font-medium hover:bg-accent rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}