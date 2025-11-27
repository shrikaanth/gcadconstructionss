import { Calendar, Phone, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomeRenovationCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden shadow-2xl p-12 md:p-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#00aeef] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Ready to Transform<br /><span className="text-[#00aeef]">Your Home?</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4">Start your home upgrade with a free consultation</p>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">We'll visit your home, discuss your vision, and provide a clear, honest quote with no obligations.</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Link to="/contact" className="group px-12 py-6 bg-[#00aeef] text-white font-bold text-2xl rounded-xl hover:shadow-2xl hover:shadow-[#00aeef]/50 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3">
                  Start Your Home Upgrade
                  <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
                <a href="tel:4165554223" className="group px-12 py-6 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold text-2xl rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3">
                  <Phone className="w-8 h-8" />
                  Call Us Today
                </a>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                { icon: Phone, title: 'Call Us', value: '(416) 555-GCAD', subtitle: 'Mon-Fri: 8AM - 6PM' },
                { icon: Mail, title: 'Email Us', value: 'info@gcad.com', subtitle: '24hr response time' },
                { icon: Calendar, title: 'Free Consultation', value: 'No Obligation', subtitle: 'Clear, honest quote' }
              ].map((contact, idx) => {
                const Icon = contact.icon;
                return (
                  <div key={idx} className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-[#00aeef]/50 transition-all duration-300 text-center">
                    <div className="inline-flex p-4 bg-[#00aeef]/20 rounded-xl mb-4 group-hover:bg-[#00aeef] transition-colors duration-300">
                      <Icon className="w-8 h-8 text-[#00aeef] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <p className="text-white/70 text-sm mb-2">{contact.title}</p>
                    <p className="text-white font-bold text-xl">{contact.value}</p>
                    <p className="text-white/60 text-sm mt-2">{contact.subtitle}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
