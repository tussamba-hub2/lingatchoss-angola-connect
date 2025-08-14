import { Target, Eye, Star, Users } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1 animate-fade-in">
            <div className="relative overflow-hidden rounded-2xl shadow-card">
              <img 
                src={aboutImage} 
                alt="Profissionais africanos utilizando tecnologia em ambiente corporativo moderno"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary opacity-5"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 animate-fade-in">
            <div className="text-center lg:text-left">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Inovação e Praticidade em{" "}
                <span className="text-primary">Cada Conexão</span>
              </h2>
              <p className="font-body text-lg text-muted-foreground mb-8">
                O Linga Tchoss revoluciona a forma como angolanos acessam serviços essenciais. 
                Nossa plataforma conecta você diretamente a farmácias, hospitais, escolas, 
                transporte e muito mais, tudo em um só lugar.
              </p>

              {/* Values */}
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">Nossa Missão</h3>
                    <p className="font-body text-sm text-muted-foreground">
                      Simplificar o acesso a serviços essenciais através da tecnologia.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Eye className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">Nossa Visão</h3>
                    <p className="font-body text-sm text-muted-foreground">
                      Ser a principal plataforma de conexão de serviços em Angola.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">Qualidade</h3>
                    <p className="font-body text-sm text-muted-foreground">
                      Garantimos padrões elevados em todos os nossos serviços.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">Comunidade</h3>
                    <p className="font-body text-sm text-muted-foreground">
                      Fortalecemos a economia local conectando pessoas e negócios.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                <div className="text-center">
                  <div className="font-heading text-2xl font-bold text-primary">50+</div>
                  <div className="font-body text-sm text-muted-foreground">Empresas</div>
                </div>
                <div className="text-center">
                  <div className="font-heading text-2xl font-bold text-primary">1000+</div>
                  <div className="font-body text-sm text-muted-foreground">Usuários</div>
                </div>
                <div className="text-center">
                  <div className="font-heading text-2xl font-bold text-primary">24/7</div>
                  <div className="font-body text-sm text-muted-foreground">Suporte</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;