import { Lightbulb, TrendingUp, MessageSquare, Sparkles, Shield } from 'lucide-react';

const benefits = [
  { icon: Lightbulb, title: 'Modern, Functional Layouts', description: 'Smart design that maximizes space and improves how your family lives', color: 'from-yellow-500 to-orange-500' },
  { icon: Sparkles, title: 'High-Quality Materials', description: 'Locally sourced, durable materials that stand the test of time', color: 'from-purple-500 to-pink-500' },
  { icon: MessageSquare, title: 'Clear Communication', description: 'Regular updates, transparent timelines, no surprises from start to finish', color: 'from-blue-500 to-cyan-500' },
  { icon: Shield, title: 'Clean Project Execution', description: 'Organized work sites, daily cleanup, and respect for your home', color: 'from-green-500 to-emerald-500' },
  { icon: TrendingUp, title: 'Boost Home Value', description: 'Strategic renovations that increase your property\'s market worth', color: 'from-cyan-500 to-blue-500' }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Our Renovation Work <span className="text-[#00aeef]">Stands Out</span>
          </h2>
          <p className="text-xl text-gray-600">What makes GCAD the trusted choice for home renovations</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div key={idx} className="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-3xl border-2 border-gray-200 hover:border-[#00aeef] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className={`inline-flex p-4 bg-gradient-to-br ${benefit.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
