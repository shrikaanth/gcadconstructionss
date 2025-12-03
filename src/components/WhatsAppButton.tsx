const WHATSAPP_NUMBER = '14372698805';
const WHATSAPP_MESSAGE = encodeURIComponent('Hi GCAD team! I’d like to discuss a renovation project.');
const whatsappIcon = new URL('../../WhatsApp.svg.webp', import.meta.url).href;

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat with GCAD on WhatsApp"
    >
      <div className="h-14 w-14 rounded-full bg-gradient-to-br from-[#25d366] to-[#128c7e] shadow-xl shadow-[#128c7e]/30 hover:shadow-2xl hover:shadow-[#128c7e]/50 transition-all duration-300 group-hover:scale-105 flex items-center justify-center overflow-hidden animate-shake">
        <img src={whatsappIcon} alt="" className="h-9 w-9 object-contain" />
      </div>
    </a>
  );
}

