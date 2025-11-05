import heroImage from "@/assets/hero-tech.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Data visualization network" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-text">Potencialize seu negócio</span>
          <br />
          com dados inteligentes
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Deixe seus dados trabalharem por você. Preencha o formulário e descubra como a Data Hub pode transformar a performance da sua empresa.
        </p>
        <div className="flex gap-4 justify-center items-center flex-wrap">
          <a href="#form" className="inline-block">
            <span className="text-sm text-primary font-medium">↓ Solicite uma demonstração gratuita</span>
          </a>
        </div>
      </div>

      {/* Decorative glow effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};
