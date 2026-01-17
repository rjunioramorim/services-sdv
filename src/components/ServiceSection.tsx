import { motion } from "framer-motion";

interface ServiceSectionProps {
  title: string;
  description: string;
  imagePosition?: "right" | "left";
  index: number;
}

const ServiceSection = ({ 
  title, 
  description, 
  imagePosition = "right",
  index 
}: ServiceSectionProps) => {
  const isImageRight = imagePosition === "right";
  
  // Calcula qual imagem exibir baseado no index da seção
  // Seção 0: imagem 1 (index + 1 = 1)
  // Seção 1: imagem 2 (index + 1 = 2)
  // E assim por diante...
  const imageIndex = index + 1;
  const imageSrc = `/img${imageIndex}.webp`;
  
  return (
    <section className="min-h-screen flex items-center py-16 md:py-24 px-6 md:px-12 lg:px-20">
      <div className={`w-full max-w-7xl mx-auto flex flex-col ${isImageRight ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16`}>
        {/* Text Content */}
        <motion.div 
          className="flex-1 space-y-8"
          initial={{ opacity: 0, x: isImageRight ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Title with underline */}
          <div className="space-y-3">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-primary uppercase tracking-wider">
              {title}
            </h2>
            <div className="w-full max-w-md h-0.5 bg-line-accent"></div>
          </div>
          
          {/* Description */}
          <p className="section-text max-w-lg">
            {description}
          </p>
        </motion.div>

        {/* Image - 1 imagem por seção */}
        <motion.div 
          className="flex-1 flex items-center justify-center"
          initial={{ opacity: 0, x: isImageRight ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.5, 
              ease: "easeOut"
            }}
            viewport={{ once: true }}
            className="relative w-48 h-72 md:w-56 md:h-80 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            style={{ 
              borderRadius: '50% / 45%',
              transform: 'rotate(15deg)'
            }}
          >
            <img
              src={imageSrc}
              alt={`Imagem ${imageIndex} - ${title}`}
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSection;
