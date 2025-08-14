import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">LT</span>
              </div>
              <span className="font-heading font-bold text-xl">Linga Tchoss</span>
            </div>
            <p className="font-body text-primary-foreground/80 mb-6 leading-relaxed">
              A plataforma SaaS mais inovadora de Angola que conecta empresas e clientes através da tecnologia.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-primary-foreground mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="font-body text-primary-foreground/80 hover:text-primary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#services" className="font-body text-primary-foreground/80 hover:text-primary transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="font-body text-primary-foreground/80 hover:text-primary transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#testimonials" className="font-body text-primary-foreground/80 hover:text-primary transition-colors">
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-primary-foreground mb-4">Serviços</h3>
            <ul className="space-y-3">
              <li>
                <span className="font-body text-primary-foreground/80">Saúde</span>
              </li>
              <li>
                <span className="font-body text-primary-foreground/80">Educação</span>
              </li>
              <li>
                <span className="font-body text-primary-foreground/80">Transporte</span>
              </li>
              <li>
                <span className="font-body text-primary-foreground/80">Entregas</span>
              </li>
              <li>
                <span className="font-body text-primary-foreground/80">Compras</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-primary-foreground mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-body text-primary-foreground/80 text-sm">
                  Luanda, Angola
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-body text-primary-foreground/80 text-sm">
                  +244 923 852 407
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-body text-primary-foreground/80 text-sm">
                  lingatchoss.dev@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="font-body text-primary-foreground/80 text-sm">
              © 2024 Linga Tchoss. Todos os direitos reservados.
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <a href="#" className="font-body text-primary-foreground/80 hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="font-body text-primary-foreground/80 hover:text-primary transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="font-body text-primary-foreground/80 hover:text-primary transition-colors">
                Suporte
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;