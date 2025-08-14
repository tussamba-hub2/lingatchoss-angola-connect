import { Heart, GraduationCap, Car, Package, ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Saúde",
      description: "Marque consultas médicas, agende exames e tenha acesso a farmácias próximas a você.",
      color: "text-red-500",
      bgColor: "bg-red-50"
    },
    {
      icon: GraduationCap,
      title: "Educação",
      description: "Encontre escolas, cursos e instituições de ensino adequadas às suas necessidades.",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Car,
      title: "Transporte",
      description: "Chame táxis e outros meios de transporte com localização em tempo real.",
      color: "text-green-500",
      bgColor: "bg-green-50"
    },
    {
      icon: Package,
      title: "Entregas",
      description: "Receba produtos e serviços diretamente em sua casa com nossa rede de entregadores.",
      color: "text-orange-500",
      bgColor: "bg-orange-50"
    },
    {
      icon: ShoppingCart,
      title: "Compras",
      description: "Compre produtos de estabelecimentos locais e receba com comodidade e segurança.",
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <section id="services" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Serviços que{" "}
            <span className="text-primary">Transformam</span> Seu Dia a Dia
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Conectamos você aos principais setores da economia angolana através de nossa plataforma integrada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0 shadow-md animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${service.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-card p-8 rounded-2xl shadow-card border max-w-3xl mx-auto">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
              Todos os Serviços em Um Só Lugar
            </h3>
            <p className="font-body text-muted-foreground mb-6">
              Com geolocalização avançada, encontre os serviços mais próximos e receba tudo onde estiver.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">Geolocalização</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">Entrega Rápida</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">Pagamento Seguro</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">Suporte 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;