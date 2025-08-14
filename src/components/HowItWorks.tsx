import { Building2, Search, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Building2,
      number: "01",
      title: "Empresa Cadastra Serviços",
      description: "Empresas registram seus serviços na plataforma Linga Tchoss com informações detalhadas e localização.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Search,
      number: "02", 
      title: "Usuário Encontra o que Precisa",
      description: "Clientes pesquisam e encontram serviços próximos usando nossa tecnologia de geolocalização avançada.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: CheckCircle,
      number: "03",
      title: "Solicitação Atendida",
      description: "Serviço é solicitado e atendido com entrega em casa ou agendamento, conforme a necessidade.",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como{" "}
            <span className="text-primary">Funciona</span> Nossa Plataforma
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Um processo simples e eficiente que conecta empresas e clientes em três passos.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary to-primary transform -translate-y-1/2 z-0"></div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="text-center group animate-scale-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Step Circle */}
                <div className="relative mx-auto mb-6">
                  <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="max-w-xs mx-auto">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Mobile Arrow */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-8 mb-4">
                    <div className="w-0.5 h-8 bg-primary"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-section-gradient p-8 rounded-2xl border max-w-3xl mx-auto">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
              Tecnologia que Conecta Angola
            </h3>
            <p className="font-body text-muted-foreground mb-6">
              Nossa plataforma utiliza geolocalização avançada, notificações em tempo real e sistema de pagamento integrado 
              para oferecer a melhor experiência aos usuários angolanos.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-card p-4 rounded-lg border">
                <div className="font-semibold text-primary text-lg">GPS</div>
                <div className="text-sm text-muted-foreground">Localização Precisa</div>
              </div>
              <div className="bg-card p-4 rounded-lg border">
                <div className="font-semibold text-primary text-lg">24/7</div>
                <div className="text-sm text-muted-foreground">Sempre Disponível</div>
              </div>
              <div className="bg-card p-4 rounded-lg border">
                <div className="font-semibold text-primary text-lg">Seguro</div>
                <div className="text-sm text-muted-foreground">Pagamentos Protegidos</div>
              </div>
              <div className="bg-card p-4 rounded-lg border">
                <div className="font-semibold text-primary text-lg">Rápido</div>
                <div className="text-sm text-muted-foreground">Resposta Instantânea</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;