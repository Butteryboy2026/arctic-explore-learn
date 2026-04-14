const ArcticFooter = () => {
  return (
    <footer className="py-12 bg-card/50 border-t border-border/50">
      <div className="container mx-auto px-6 text-center">
        <h4 className="text-lg font-bold text-secondary mb-4">Arctic Compass</h4>
        <p className="text-muted-foreground mb-8">
          Your portal to understanding the Arctic's critical state.
        </p>
        <div className="flex justify-center space-x-8 text-muted-foreground mb-8">
          <a href="#" className="hover:text-primary transition-colors">About Us</a>
          <a href="#" className="hover:text-primary transition-colors">Contact</a>
          <a href="#" className="hover:text-primary transition-colors">Data Sources</a>
        </div>
        <p className="text-muted-foreground/60 text-sm">
          © 2026 Arctic Compass. Data sourced from NOAA, NASA, and NSIDC.
        </p>
      </div>
    </footer>
  );
};

export default ArcticFooter;
