import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { Sparkles } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres").max(100, "Nome muito longo"),
  email: z.string().email("Email inválido").max(255, "Email muito longo"),
  phone: z.string().min(10, "Telefone inválido").max(20, "Telefone muito longo"),
  company: z.string().min(2, "Nome da empresa muito curto").max(100, "Nome muito longo"),
  role: z.string().min(2, "Cargo muito curto").max(100, "Cargo muito longo"),
  companySize: z.string().min(1, "Selecione o tamanho da empresa"),
  challenge: z.string().min(10, "Descreva o desafio com pelo menos 10 caracteres").max(1000, "Descrição muito longa"),
});

type FormData = z.infer<typeof formSchema>;

export const LeadForm = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      role: "",
      companySize: "",
      challenge: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    toast.success("Formulário enviado com sucesso! Em breve entraremos em contato.");
    form.reset();
  };

  return (
    <section id="form" className="py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="bg-card rounded-2xl p-8 md:p-10 shadow-[0_10px_40px_hsl(var(--primary)_/_0.1)] border border-border card-hover">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Quero ser Data Hub!</span>
            </h2>
            <p className="text-muted-foreground">
              Solicite uma consultoria personalizada e transforme seus dados em resultados.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome completo</FormLabel>
                    <FormControl>
                      <Input placeholder="João Silva" {...field} className="input-focus" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail corporativo</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="joao@empresa.com" {...field} className="input-focus" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefone / WhatsApp</FormLabel>
                      <FormControl>
                        <Input placeholder="(11) 99999-9999" {...field} className="input-focus" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Empresa</FormLabel>
                      <FormControl>
                        <Input placeholder="Nome da empresa" {...field} className="input-focus" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cargo / Função</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: Diretor de TI" {...field} className="input-focus" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="companySize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tamanho da empresa</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="input-focus">
                          <SelectValue placeholder="Selecione o tamanho" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="pequena">Pequena (até 50 funcionários)</SelectItem>
                        <SelectItem value="media">Média (51-500 funcionários)</SelectItem>
                        <SelectItem value="grande">Grande (500+ funcionários)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="challenge"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descrição breve do desafio atual</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Conte-nos sobre os principais desafios que sua empresa enfrenta com dados..."
                        className="min-h-[120px] input-focus resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                variant="gradient" 
                size="lg" 
                className="w-full"
              >
                <Sparkles className="mr-2" />
                Quero ser Data Hub!
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};
