import { useState } from 'react';
import { Loader2, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  project_type: string;
}

interface HeroQuickFormProps {
  className?: string;
}

const projectOptions = [
  { label: 'Basement Renovation', value: 'Basement Renovation' },
  { label: 'Home Renovation', value: 'Home Renovation' },
  { label: 'Kitchen Upgrade', value: 'Kitchen Renovation' },
  { label: 'Bathroom Refresh', value: 'Bathroom Renovation' },
  { label: 'Full Home Makeover', value: 'Full Home Makeover' },
  { label: 'Other', value: 'Other' }
];

export default function HeroQuickForm(props: HeroQuickFormProps = {}) {
  const { className } = props;
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    city: '',
    project_type: ''
  });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');
    await new Promise((resolve) => setTimeout(resolve, 600));
    setStatus('success');
    setFormData({
      name: '',
      email: '',
      phone: '',
      city: '',
      project_type: ''
    });
    setIsSubmitting(false);
  };

  return (
    <div
      className={`relative bg-slate-950/80 backdrop-blur-xl border border-white/5 rounded-3xl p-6 sm:p-8 text-left shadow-2xl shadow-black/40 ${className ?? ''}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/40 via-slate-900/30 to-transparent rounded-3xl pointer-events-none"></div>
      <div className="relative z-10 space-y-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 text-white/90 text-xs uppercase tracking-wide">
            Start Your Project
          </div>
          <h3 className="mt-3 text-2xl font-bold text-white">Request Your Free Estimate</h3>
          <p className="mt-2 text-sm text-gray-200">
            Share a few details and we’ll reach out within 24 hours with next steps.
          </p>
        </div>

        {status === 'success' && (
          <div className="flex items-start gap-3 rounded-2xl border border-emerald-300/70 bg-emerald-400/10 px-4 py-3 text-emerald-100">
            <CheckCircle className="w-5 h-5 flex-shrink-0 text-emerald-300" />
            <div>
              <p className="font-semibold text-emerald-100">Message received!</p>
              <p className="text-sm text-emerald-200">
                Our team will follow up shortly to schedule your consultation.
              </p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-300 mb-2 block">
                Full Name *
              </span>
              <div className="relative flex items-center">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Jane Doe"
                  className="w-full rounded-xl border border-white/10 bg-slate-800/70 px-4 py-3 text-white placeholder:text-gray-400/80 focus:border-[#00aeef] focus:ring-2 focus:ring-[#00aeef]/30 outline-none transition-all"
                />
              </div>
            </label>

            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-300 mb-2 block">
                Phone Number *
              </span>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                  <Phone className="w-4 h-4" />
                </span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+1 (437) 255-8805"
                  className="w-full rounded-xl border border-white/10 bg-slate-800/70 pl-10 pr-4 py-3 text-white placeholder:text-gray-400/80 focus:border-[#00aeef] focus:ring-2 focus:ring-[#00aeef]/30 outline-none transition-all"
                />
              </div>
            </label>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-300 mb-2 block">
                Email *
              </span>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                  <Mail className="w-4 h-4" />
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-slate-800/70 pl-10 pr-4 py-3 text-white placeholder:text-gray-400/80 focus:border-[#00aeef] focus:ring-2 focus:ring-[#00aeef]/30 outline-none transition-all"
                />
              </div>
            </label>

            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-300 mb-2 block">
                City
              </span>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                  <MapPin className="w-4 h-4" />
                </span>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Toronto"
                  className="w-full rounded-xl border border-white/10 bg-slate-800/70 pl-10 pr-4 py-3 text-white placeholder:text-gray-400/80 focus:border-[#00aeef] focus:ring-2 focus:ring-[#00aeef]/30 outline-none transition-all"
                />
              </div>
            </label>
          </div>

          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-wide text-gray-300 mb-2 block">
              Project Type
            </span>
            <select
              name="project_type"
              value={formData.project_type}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-slate-800/70 px-4 py-3 text-white focus:border-[#00aeef] focus:ring-2 focus:ring-[#00aeef]/30 outline-none transition-all"
            >
              <option value="" className="text-gray-700">
                Select an option
              </option>
              {projectOptions.map((option) => (
                <option key={option.value} value={option.value} className="text-gray-900">
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-xl bg-[#00aeef] py-3.5 text-white font-semibold shadow-lg shadow-[#00aeef]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#00aeef]/40 hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending…
              </>
            ) : (
              <>Claim Free Estimate</>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

