export const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Data Hub. Transformando dados em resultados.
        </p>
      </div>
    </footer>
  );
};
