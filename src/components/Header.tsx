import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-hero-gradient rounded-md flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">LT</span>
          </div>
          <span className="font-heading font-bold text-xl text-foreground">Linga Tchoss</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('about')}
            className="font-body text-foreground hover:text-primary transition-colors"
          >
            Sobre Nós
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="font-body text-foreground hover:text-primary transition-colors"
          >
            Serviços
          </button>
          <button 
            onClick={() => scrollToSection('how-it-works')}
            className="font-body text-foreground hover:text-primary transition-colors"
          >
            Como Funciona
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')}
            className="font-body text-foreground hover:text-primary transition-colors"
          >
            Depoimentos
          </button>
          <Button 
            variant="cta" 
            size="sm"
            onClick={() => scrollToSection('cta')}
          >
            Começar Agora
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left font-body text-foreground hover:text-primary transition-colors"
              >
                Sobre Nós
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left font-body text-foreground hover:text-primary transition-colors"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="block w-full text-left font-body text-foreground hover:text-primary transition-colors"
              >
                Como Funciona
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left font-body text-foreground hover:text-primary transition-colors"
              >
                Depoimentos
              </button>
              <Button 
                variant="cta" 
                className="w-full"
                onClick={() => scrollToSection('cta')}
              >
                Começar Agora
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;