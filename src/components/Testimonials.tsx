import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Empresária",
      company: "Farmácia Central",
      content: "O Linga Tchoss revolucionou nosso negócio! Agora recebemos pedidos online e conseguimos entregar medicamentos diretamente na casa dos clientes. Nossa receita aumentou 40% em apenas 3 meses.",
      rating: 5,
      avatar: "MS"
    },
    {
      name: "João Santos",
      role: "Cliente",
      company: "Luanda",
      content: "Incrível como é fácil marcar consultas médicas através da plataforma. Não preciso mais perder tempo em filas, marco tudo pelo celular e ainda recebo lembretes. Muito prático!",
      rating: 5,
      avatar: "JS"
    },
    {
      name: "Ana Costa",
      role: "Diretora",
      company: "Colégio Futuro",
      content: "Cadastramos nossa escola na plataforma e os pais agora conseguem acompanhar melhor a vida escolar dos filhos. O sistema é intuitivo e o suporte é excelente. Recomendo totalmente!",
      rating: 5,
      avatar: "AC"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que Nossos{" "}
            <span className="text-primary">Clientes</span> Dizem
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Empresas e usuários em toda Angola confiam no Linga Tchoss para conectar seus serviços.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-0 shadow-md animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <Quote className="h-8 w-8 text-primary/30" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Content */}
                <blockquote className="font-body text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="font-body text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-card p-8 rounded-2xl shadow-card border max-w-4xl mx-auto">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
              Confiança que Empresas e Clientes Merecem
            </h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="font-heading text-3xl font-bold text-primary mb-2">98%</div>
                <div className="font-body text-sm text-muted-foreground">Satisfação do Cliente</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-3xl font-bold text-primary mb-2">50+</div>
                <div className="font-body text-sm text-muted-foreground">Empresas Parceiras</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-3xl font-bold text-primary mb-2">1000+</div>
                <div className="font-body text-sm text-muted-foreground">Usuários Ativos</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-3xl font-bold text-primary mb-2">24h</div>
                <div className="font-body text-sm text-muted-foreground">Tempo de Resposta</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;