import { Ear, PenTool, FileText, Hammer, CheckCircle } from 'lucide-react';

const steps = [
  { number: '01', icon: Ear, title: 'Initial Consultation', description: 'We visit your home, discuss your vision, needs, and budget', color: 'from-blue-500 to-cyan-500' },
  { number: '02', icon: PenTool, title: 'Design & Planning', description: 'Create detailed plans, material selections, and project timeline', color: 'from-purple-500 to-pink-500' },
  { number: '03', icon: FileText, title: 'Transparent Quote', description: 'Receive clear pricing breakdown with no hidden fees', color: 'from-green-500 to-emerald-500' },
  { number: '04', icon: Hammer, title: 'Expert Construction', description: 'Licensed trades execute your renovation with precision', color: 'from-orange-500 to-red-500' },
  { number: '05', icon: CheckCircle, title: 'Final Walkthrough', description: 'Ensure every detail meets your expectations', color: 'from-cyan-500 to-blue-500' }
];

export default function RenovationProcess() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-[#00aeef]">Process</span>
          </h2>
          <p className="text-xl text-gray-600">A clear, straightforward path from vision to completion</p>
        </div>
        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="group h-full bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-[#00aeef] hover:shadow-xl transition-all duration-500 hover:-translate-y-2 text-center">
                <div className={`inline-flex w-16 h-16 bg-gradient-to-br ${step.color} rounded-full items-center justify-center mb-4 text-white font-bold text-xl`}>
                  {step.number}
                </div>
                <div className={`inline-flex p-3 bg-gradient-to-br ${step.color} rounded-xl mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
