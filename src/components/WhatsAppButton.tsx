import { MessageCircle } from 'lucide-react';

const whatsappNumber = '393516826560';
const whatsappMessage = encodeURIComponent('Ciao! Vorrei informazioni sui vostri servizi.');

const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float md:hidden"
      aria-label="Contattaci su WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" aria-hidden="true" />
    </a>
  );
};

export default WhatsAppButton;
