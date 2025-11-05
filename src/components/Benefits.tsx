import { BarChart3, Brain, Zap, Shield } from "lucide-react";

const benefits = [
  {
    icon: BarChart3,
    title: "Insights Acionáveis",
    description: "Transforme dados brutos em decisões estratégicas com análises avançadas.",
  },
  {
    icon: Brain,
    title: "IA & Machine Learning",
    description: "Previsões inteligentes e automação para otimizar seus processos.",
  },
  {
    icon: Zap,
    title: "Performance Escalável",
    description: "Infraestrutura preparada para crescer junto com seu negócio.",
  },
  {
    icon: Shield,
    title: "Segurança Garantida",
    description: "Proteção de ponta a ponta para seus dados mais valiosos.",
  },
];

export const Benefits = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que escolher a <span className="gradient-text">Data Hub</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tecnologia de ponta para transformar dados em vantagem competitiva
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="bg-card p-6 rounded-xl border border-border card-hover group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
