import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const whatsappNumber = '393516826560';
const whatsappMessage = encodeURIComponent('Ciao! Vorrei informazioni sui vostri servizi.');

const MobileCTABar = () => {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div
        className="flex border-t border-border/20"
        style={{
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        <a
          href="tel:+393516826560"
          className="flex-1 flex items-center justify-center gap-2 font-semibold text-sm transition-all duration-200 active:scale-95"
          style={{
            background: 'hsl(210 73% 15%)',
            color: 'white',
            height: 'var(--mobile-cta-height)',
          }}
          aria-label="Chiamaci"
        >
          <Phone className="w-4 h-4" aria-hidden="true" />
          Chiama ora
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 font-semibold text-sm text-white transition-all duration-200 active:scale-95"
          style={{
            background: '#25D366',
            height: 'var(--mobile-cta-height)',
          }}
          aria-label="Contattaci su WhatsApp"
        >
          <MessageCircle className="w-4 h-4" aria-hidden="true" />
          WhatsApp
        </a>
      </div>
    </motion.div>
  );
};

export default MobileCTABar;
