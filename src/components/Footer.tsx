import { Instagram, Phone, Mail } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer id="contato" className="bg-secondary/30 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo and description */}
          <div className="space-y-4">
            <Logo />
            <p className="font-serif text-lg text-foreground/70 italic max-w-sm">
              Cuidando de mulheres para que possam viver todas as suas fases e ciclos 
              de forma plena e consciente.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display text-xl text-primary">Serviços</h3>
            <ul className="space-y-2 font-serif text-foreground/70">
              <li><a href="#doulagem" className="hover:text-primary transition-colors">Acompanhamento de Doulagem</a></li>
              <li><a href="#educacao" className="hover:text-primary transition-colors">Educação Perinatal</a></li>
              <li><a href="#amamentacao" className="hover:text-primary transition-colors">Consultoria de Amamentação</a></li>
              <li><a href="#massagem-gestacional" className="hover:text-primary transition-colors">Massagem Gestacional</a></li>
              <li><a href="#cursos" className="hover:text-primary transition-colors">Cursos e Palestras</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-display text-xl text-primary">Contato</h3>
            <div className="space-y-3 font-serif text-foreground/70">
              <a 
                href="#" 
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                <Instagram size={20} />
                <span>@sementesdoventre</span>
              </a>
              <a 
                href="tel:+5500000000000" 
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                <Phone size={20} />
                <span>(75) 99120-4826</span>
              </a>
              <a 
                href="mailto:contato@sementesdoventre.com" 
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                <Mail size={20} />
                <span>joana.araujo.freitas@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="font-serif text-foreground/50">
            © {new Date().getFullYear()} Sementes do Ventre. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
