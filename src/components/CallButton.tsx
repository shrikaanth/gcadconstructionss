import { Phone } from 'lucide-react';

const PHONE_NUMBER = '+14372698805';

export default function CallButton() {
  const phoneUrl = `tel:${PHONE_NUMBER}`;

  return (
    <a
      href={phoneUrl}
      className="fixed bottom-24 right-6 z-50 group"
      aria-label="Call GCAD"
    >
      <div className="h-14 w-14 rounded-full bg-gradient-to-br from-[#00aeef] to-[#0088cc] shadow-xl shadow-[#00aeef]/30 hover:shadow-2xl hover:shadow-[#00aeef]/50 transition-all duration-300 group-hover:scale-105 flex items-center justify-center animate-shake">
        <Phone className="h-7 w-7 text-white" />
      </div>
    </a>
  );
}

