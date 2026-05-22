import { Shield, Users, Settings } from 'lucide-react';

const features = [
  {
    title: 'One Flat, Monthly Rate',
    description: 'Equipment, filters, service & support included',
    icon: Shield,
  },
  {
    title: 'Locally Owned & Operated',
    description: 'Real service, not a national call center',
    icon: Users,
  },
  {
    title: 'Preventative Care',
    description: 'Routine checks keep systems reliable',
    icon: Settings,
  },
];

export default function FeatureList() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-200/20 rounded-full blur-lg"></div>
      
      <div className="container">
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What You Should Know</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Why businesses choose Pure Point for their water solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 shadow-lg">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
              <p className="text-gray-600 text-balance group-hover:text-gray-700 transition-colors duration-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}