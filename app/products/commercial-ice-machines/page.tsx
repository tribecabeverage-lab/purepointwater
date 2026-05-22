import type { Metadata } from 'next';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/footer';
import LeadForm from '@/components/lead-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowLeft, Check, Snowflake, Building, Zap, Phone, MapPin, Wrench } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Commercial Ice Machines | Pure Point Water Solutions',
  description: 'Professional commercial ice machine rentals, installation, and maintenance. Modular, undercounter, nugget, cube, and flaker units serving NY & CT.',
};

export default function CommercialIceMachinesPage() {
  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-blue-600 text-white relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
        ></div>
        
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-primary/20"></div>
        
        <div className="container">
          <div className="flex items-center justify-between min-h-[400px] relative z-10">
            <div className="max-w-2xl">
              <Button variant="ghost" asChild className="mb-4 text-white hover:bg-white/10">
                <Link href="/#products">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Products
                </Link>
              </Button>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Commercial Ice, Done By Pros</h1>
              <p className="text-xl text-blue-100 text-balance mb-6">
                NY & CT's partner for machine rentals, installation, and upkeep.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-400 text-white hover:bg-blue-500" asChild>
                  <a href="tel:203-275-9009" className="flex items-center space-x-2">
                    <Phone className="h-5 w-5" />
                    <span>203-275-9009</span>
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <LeadForm />
            </div>
          </div>
          
          {/* Mobile form */}
          <div className="lg:hidden mt-8 flex justify-center relative z-10">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/Untitled design (13).png" 
                alt="Commercial ice machine"
                className="w-full max-w-md mx-auto"
              />
            </div>
            <div>
              <Badge className="mb-4">Professional Service</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Help</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Health & Taste Advantage</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-600 mt-0.5" />
                      <span className="text-sm">Rental modular, undercounter, nugget, cube, and flaker units (≈100–1,800 lb/day)</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-600 mt-0.5" />
                      <span className="text-sm">Professional installation with water, drain, and filtration handled end-to-end</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-600 mt-0.5" />
                      <span className="text-sm">Scheduled cleanings & filter changes; rapid response service</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-600 mt-0.5" />
                      <span className="text-sm">We only work with leading manufacturers</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Complete Service</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We do it all: equipment, professional install, water filtration, scheduled cleanings 
                    & filter changes, priority repair, parts & labor.
                  </p>
                </div>
              </div>

              <Button size="lg" asChild>
                <Link href="/#contact">Get Your Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">01</span>
                </div>
                <CardTitle className="text-lg">Site Survey</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We confirm water, drain, power, and placement.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">02</span>
                </div>
                <CardTitle className="text-lg">Choose Best Machine</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Clear monthly pricing for capacity and ice type.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">03</span>
                </div>
                <CardTitle className="text-lg">Install in Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We handle the water, drain, filtration, and startup.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">04</span>
                </div>
                <CardTitle className="text-lg">Upkeep</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Cleanings on a set schedule; call us if anything breaks.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sizing Machines */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Sizing Machines</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-primary/5">
                    <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-900">
                      Daily ice need (lb/day)
                    </th>
                    <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-900">
                      Typical sites
                    </th>
                    <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-900">
                      Suggested bin size
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-6 py-4 font-medium text-primary">50–300</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Coffee bars, small restaurants</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">150–350 lb</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-6 py-4 font-medium text-primary">400–700</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Busy bars, mid-size kitchens</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">350–700 lb</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-6 py-4 font-medium text-primary">800–1,800</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Venues, hotels, multi-bar ops</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">700–1,400+ lb</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-br from-gray-50 via-blue-50/30 to-primary/5 p-8 rounded-2xl max-w-2xl mx-auto border border-gray-200/50 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
              <div className="flex items-center justify-center space-x-2 mb-4">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-gray-600">257 Sound Beach Ave, Old Greenwich, CT 06870</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="shadow-lg hover:shadow-xl transition-shadow duration-300" asChild>
                  <a href="tel:203-275-9009" className="flex items-center space-x-2">
                    <Phone className="h-5 w-5" />
                    <span>Call 203-275-9009</span>
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-2 hover:border-primary/50 shadow-md hover:shadow-lg transition-all duration-300" asChild>
                  <Link href="/#contact">Request Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ice Machine Service Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Professional Maintenance</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ice Machine Service, Cleaning & Descaling</h2>
              <p className="text-xl text-gray-600 text-balance">
                Keep production up and ice tasting clean with routine service for Follett, Manitowoc, Hoshizaki, Scotsman—and more.
                Our techs handle food-safe cleaning, descaling, and preventive checks to protect your warranty and stop scale before it shuts you down.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2 hover:border-primary/30 transition-colors duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Wrench className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>What We Do</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Disassemble, deep-clean, and sanitize food-zone parts</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Descale evaporators and water paths; flush and verify harvest cycle</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Clean/sanitize bins & dispensers; replace gaskets as needed</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Inspect pumps, sensors, inlet valves, drain lines, and float assemblies</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Replace filters (as scheduled) and document water quality</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/30 transition-colors duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Snowflake className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>When We Do It</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-primary mb-4">
                    Monthly, quarterly, annually - whenever you need it!
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We work with your schedule to provide the right level of service for your operation.
                    Whether you need frequent attention for high-volume locations or periodic maintenance for
                    seasonal operations, we'll keep your ice machine running at peak performance.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-primary/5 via-blue-50/50 to-primary/10 p-8 rounded-2xl border border-primary/10 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Schedule Your Service</h3>
                <p className="text-gray-600 mb-6">
                  Don't wait for problems. Regular maintenance prevents costly downtime and keeps your ice tasting fresh.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="shadow-lg hover:shadow-xl transition-shadow duration-300" asChild>
                    <a href="tel:203-275-9009" className="flex items-center space-x-2">
                      <Phone className="h-5 w-5" />
                      <span>Call 203-275-9009</span>
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 hover:border-primary/50 shadow-md hover:shadow-lg transition-all duration-300" asChild>
                    <Link href="/#contact">Request Service Quote</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}