import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Globe } from "lucide-react";

const CTA = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="cta" className="py-20 bg-hero-gradient text-primary-foreground relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-12 h-12 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          {/* Main CTA */}
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Transforme Sua Experiência com{" "}
            <span className="text-white">Serviços Digitais</span>
          </h2>
          
          <p className="font-body text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            Junte-se à revolução digital em Angola. Conecte-se aos melhores serviços da sua região em poucos cliques.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => scrollToSection('about')}
              className="group font-semibold"
            >
              Começar Agora
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('services')}
              className="border-white/30 text-white hover:bg-white/10"
            >
              Explorar Serviços
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="flex items-center space-x-4 text-left">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-white mb-1">App Mobile</h3>
                <p className="font-body text-sm text-primary-foreground/80">
                  Acesse todos os serviços direto do seu celular
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-left">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-white mb-1">Cobertura Nacional</h3>
                <p className="font-body text-sm text-primary-foreground/80">
                  Serviços disponíveis em todo território angolano
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/20 text-center animate-fade-in">
          <p className="font-body text-primary-foreground/80 mb-4">
            Mais de <span className="font-bold text-white">50 empresas</span> e{" "}
            <span className="font-bold text-white">1000 usuários</span> já confiam no Linga Tchoss
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-white/20 px-4 py-2 rounded-full">Gratuito para começar</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Sem compromisso</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Suporte incluído</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;