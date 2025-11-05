import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { LeadForm } from "@/components/LeadForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <LeadForm />
      <Footer />
    </div>
  );
};

export default Index;
