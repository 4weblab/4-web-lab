import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const whatsappNumber = '393514656042';
const whatsappMessage = encodeURIComponent('Ciao! Vorrei informazioni sui vostri servizi.');

const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float md:hidden"
      aria-label="Contattaci su WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="w-7 h-7 text-white" aria-hidden="true" />
    </motion.a>
  );
};

export default WhatsAppButton;
