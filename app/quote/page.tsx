import type { Metadata } from 'next';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/footer';
import ContactForm from '@/components/contact-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Phone, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Request a Quote | Pure Point Water Solutions',
  description: 'Get a free quote for bottle-less water coolers, 5-gallon jug delivery, and ice machines. Local service in NY & CT.',
};

export default function QuotePage() {
  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-blue-600 text-white relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
        ></div>
        
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-primary/20"></div>
        
        <div className="container">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Request Your Free Quote</h1>
            <p className="text-xl text-blue-100 text-balance mb-8">
              Get personalized pricing for your water solution needs. Our local team will provide a custom quote within 24 hours.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Quick Response</h3>
                <p className="text-blue-100 text-sm">Get your quote within 24 hours</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Local Service</h3>
                <p className="text-blue-100 text-sm">Serving NY & CT with real people</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">No Obligation</h3>
                <p className="text-blue-100 text-sm">Free quotes with no pressure</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
              No hidden fees, no surprises. Everything is included in your flat monthly rate.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl">Countertop Systems</CardTitle>
                <CardDescription>Perfect for small offices</CardDescription>
                <div className="text-3xl font-bold text-primary mt-4">$45<span className="text-lg text-gray-600">/month</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Compact design</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Hot & cold water</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Installation included</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Filter changes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-primary shadow-lg">
              <CardHeader>
                <div className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-2">
                  MOST POPULAR
                </div>
                <CardTitle className="text-2xl">Water Towers</CardTitle>
                <CardDescription>Ideal for busy offices</CardDescription>
                <div className="text-3xl font-bold text-primary mt-4">$50<span className="text-lg text-gray-600">/month</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Freestanding unit</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Unlimited water</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Multi-stage filtration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Full service support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl">Ice Machines</CardTitle>
                <CardDescription>Water + ice production</CardDescription>
                <div className="text-3xl font-bold text-primary mt-4">$75<span className="text-lg text-gray-600">/month</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Commercial ice production</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Integrated water system</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Professional maintenance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Everything included</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="bg-gray-50 p-6 rounded-lg max-w-2xl mx-auto">
              <h3 className="font-semibold text-gray-900 mb-2">5-Gallon Jug Delivery</h3>
              <p className="text-gray-600 mb-2">$10 per jug — no hidden fees, no contracts</p>
              <p className="text-sm text-gray-500">Free delivery within 30 miles of Old Greenwich</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      <Footer />
    </main>
  );
}