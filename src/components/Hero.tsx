import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-16 min-h-screen flex items-center bg-section-gradient">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Conectando você aos{" "}
              <span className="bg-hero-gradient bg-clip-text text-transparent">
                serviços que precisa
              </span>
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              A plataforma SaaS mais inovadora de Angola que conecta empresas e clientes. 
              Marque consultas, chame táxis, compre produtos e receba tudo em casa com nossa tecnologia de geolocalização.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection('about')}
                className="group"
              >
                Saiba Mais
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('how-it-works')}
              >
                Como Funciona
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative overflow-hidden rounded-2xl shadow-hero">
              <img 
                src={heroImage} 
                alt="Profissional africana usando tecnologia Linga Tchoss para conectar serviços digitais"
                className="w-full h-auto object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>
            </div>
            {/* Floating cards */}
            <div className="absolute -top-4 -right-4 bg-card p-4 rounded-lg shadow-card border animate-fade-in hidden sm:block">
              <div className="text-primary font-semibold text-sm">+50 Empresas</div>
              <div className="text-muted-foreground text-xs">Conectadas</div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-lg shadow-card border animate-fade-in hidden sm:block">
              <div className="text-primary font-semibold text-sm">24/7</div>
              <div className="text-muted-foreground text-xs">Disponível</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;