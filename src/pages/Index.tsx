import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceSection from "@/components/ServiceSection";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import { motion } from "framer-motion";

const services = [
  {
    id: "doulagem",
    title: "Acompanhamento de Doulagem",
    description: "Apoio, cuidado e suporte informacional, emocional e físico + acompanhamento no parto e pós-parto para que a pessoa grávida possa viver uma gestação, parto e pós-parto de forma segura, consciente e respeitosa.",
  },
  {
    id: "educacao",
    title: "Educação Perinatal",
    description: "Apoio e suporte informacional emocional e físico para que a pessoa grávida possa se preparar para viver uma gestação, parto e pós-parto de forma segura, consciente e respeitosa.",
  },
  {
    id: "amamentacao",
    title: "Consultoria de Amamentação",
    description: "Apoio, cuidado e suporte informacional, emocional e físico para que a puérpera possa se sentir segura para amamentar de forma consciente e respeitosa.",
  },
  {
    id: "recem-nascido",
    title: "Consultoria de Cuidados com o Recém-Nascido",
    description: "Apoio, cuidado e suporte informacional, emocional e físico para que a puérpera possa se sentir segura para cuidar do seu bebê de forma consciente e respeitosa.",
  },
  {
    id: "massagem-gestacional",
    title: "Massagem Gestacional",
    description: "Um cuidado físico e emocional especializado para que a pessoa gestante possa viver essa fase de forma plena, segura e respeitosa.",
  },
  {
    id: "massagem-restauradora",
    title: "Massagem Restauradora",
    description: "Oferecendo como forma de cuidado vários recursos terapêuticos para que mulheres resgate o seu feminino e possam viver todas as suas fases e ciclos de forma plena e consciente.",
  },
  {
    id: "massagem-relaxante",
    title: "Massagem Relaxante",
    description: "Cuidando de mulheres para que elas possam viver todas as suas fases e ciclos de forma plena e consciente.",
  },
  {
    id: "cursos",
    title: "Cursos, Oficinas e Palestras",
    description: "Para você que deseja se informar ou espalhar informação sobre temas específicos referentes a gestação, parto e pós-parto e levar HUMANIZAÇÃO para todos os lugares.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <Hero />

      {/* Services Sections */}
      {services.map((service, index) => (
        <div key={service.id} id={service.id}>
          <ServiceSection
            title={service.title}
            description={service.description}
            imagePosition={index % 2 === 0 ? "right" : "left"}
            index={index}
          />
          
          {/* Logo between sections */}
          <motion.div 
            className="flex justify-center py-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Logo className="opacity-60" />
          </motion.div>
        </div>
      ))}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
