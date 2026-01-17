import { motion } from "framer-motion";
import Logo from "./Logo";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="space-y-8"
      >
        {/* Large Logo */}
        <div className="flex justify-center">
          <Logo className="h-24 md:h-32 lg:h-40" />
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="section-text max-w-2xl mx-auto"
        >
          Apoio, cuidado e suporte para mulheres, gestantes e puérperas viverem cada fase e ciclos  
          de forma segura, consciente e respeitosa.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <a
            href="#doulagem"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground font-serif text-lg rounded-full hover:bg-primary/90 transition-colors duration-300 shadow-lg"
          >
            Conheça meus serviços
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-primary/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
