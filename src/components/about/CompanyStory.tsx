import { CheckCircle, Sparkles, Clock, Users2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const achievements = [
  { icon: CheckCircle, text: 'Easy to work with', color: 'from-blue-500 to-cyan-500' },
  { icon: Sparkles, text: 'Transparent with pricing', color: 'from-purple-500 to-pink-500' },
  { icon: Users2, text: 'Professional in execution', color: 'from-green-500 to-emerald-500' },
  { icon: Clock, text: 'Reliable with timelines', color: 'from-orange-500 to-red-500' },
  { icon: CheckCircle, text: 'Clean and detail-oriented', color: 'from-cyan-500 to-blue-500' }
];

const PROJECT_TARGET = 250;
const PROJECT_INCREMENT = 5;

export default function CompanyStory() {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && count < PROJECT_TARGET) {
      const timer = setTimeout(() => {
        setCount(prev => Math.min(prev + PROJECT_INCREMENT, PROJECT_TARGET));
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [isVisible, count]);

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00aeef] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#00aeef]/10 rounded-3xl transform rotate-12"></div>
              <div className="relative bg-gradient-to-br from-gray-50 to-white p-12 rounded-3xl border border-gray-200 shadow-xl">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00aeef]/10 rounded-full mb-4">
                    <span className="text-[#00aeef] font-bold">250+</span>
                    <span className="text-gray-700">Renovations Completed</span>
                  </div>
                </div>

                <h3 className="text-4xl font-bold text-gray-900 mb-6">
                  Our <span className="text-[#00aeef]">Reputation</span>
                </h3>

                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  After completing 250+ renovations across the GTA, we've earned a reputation for being:
                </p>

                <div className="space-y-4">
                  {achievements.map((achievement, idx) => {
                    const Icon = achievement.icon;
                    return (
                      <div
                        key={idx}
                        className="group flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 hover:border-[#00aeef]/30 transition-all duration-300 hover:scale-105"
                        style={{ transitionDelay: `${idx * 100}ms` }}
                      >
                        <div className={`p-2 bg-gradient-to-br ${achievement.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-gray-900 font-medium">{achievement.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Building More Than Homes—
              <br />
              <span className="text-[#00aeef]">Building Trust</span>
            </h2>

            <div className="space-y-6">
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00aeef] to-cyan-500 rounded-full"></div>
                <div className="pl-8">
                  <p className="text-xl text-gray-700 leading-relaxed mb-4">
                    We don't believe in shortcuts—only solid workmanship that stands strong for years.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Every project reflects our commitment to quality, integrity, and the trust our clients place in us. We're not just contractors—we're partners in creating spaces where families thrive.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="group p-6 bg-gradient-to-br from-[#00aeef] to-cyan-500 rounded-2xl text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#00aeef]/30">
                  <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                    {count}+
                  </div>
                  <div className="text-white/90 font-medium">Projects Completed</div>
                </div>

                <div className="group p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                  <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                    100%
                  </div>
                  <div className="text-white/90 font-medium">Regulation Compliant</div>
                </div>

                <div className="group p-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/30">
                  <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                    5★
                  </div>
                  <div className="text-white/90 font-medium">Client Rating</div>
                </div>

                <div className="group p-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-green-500/30">
                  <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                    GTA
                  </div>
                  <div className="text-white/90 font-medium">Service Area</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
