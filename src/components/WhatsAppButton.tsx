import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '919112220244';
  const message = encodeURIComponent(
    'Hello DreamGlobe Team,\n\nI would like to inquire about your immigration services. Please assist me with the details.\n\nThank you.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-fade-in"
    >
      <MessageCircle className="h-7 w-7 fill-white" />
    </a>
  );
};

export default WhatsAppButton;
