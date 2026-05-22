import type { Metadata } from 'next';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/footer';
import LeadForm from '@/components/lead-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowLeft, Check, Snowflake, Droplets, Settings, Download, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Ice & Water Combo | Pure Point Water Solutions',
  description: 'Commercial ice machines with integrated water filtration. Perfect for offices, restaurants, and businesses that need fresh ice and clean water.',
};

export default function IceMachinesPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Ice Machines</h1>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Ice & Water Combo</h1>
              <p className="text-xl text-blue-100 text-balance">
                Commercial ice production with integrated water filtration. Get both fresh ice and clean drinking water from one system.
              </p>
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

      {/* Product Details */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/with ice maker.png" 
                alt="Ice machine with water cooler"
                className="w-full max-w-md mx-auto"
              />
            </div>
            <div>
              <Badge className="mb-4">Two-in-One Solution</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ice & Water Combined</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our ice machines combine commercial-grade ice production with our advanced water filtration technology, 
                giving you both fresh ice and clean drinking water from a single system.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Commercial ice production capacity</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Integrated water filtration system</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Hot and cold water dispensing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Professional installation and maintenance</span>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg mb-6">
                <p className="text-2xl font-bold text-primary mb-2">Starting at $75/month</p>
                <p className="text-gray-600">Ice production + water filtration</p>
              </div>

              <Button size="lg" asChild>
                <Link href="/#contact">Get Your Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Technical Specifications</h2>

          <div className="flex justify-center">
            <Card className="bg-gradient-to-br from-primary/5 to-blue-50/50 border-primary/20 shadow-md hover:shadow-lg transition-shadow max-w-md w-full">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Ice Combo Spec Sheet</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Complete technical details for the WL900 ice and water combo unit
                    </p>
                  </div>
                  <Button asChild className="w-full">
                    <a href="/wl900_ice_combo_spec_sheet.pdf" download className="flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      Download PDF
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Perfect for High-Demand Environments</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Snowflake className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Fresh Ice Production</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Commercial-grade ice production ensures you always have fresh, clean ice available for your business needs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Droplets className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Filtered Water</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Advanced filtration system provides clean drinking water alongside ice production in one integrated unit.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Settings className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Full Service Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Complete maintenance, cleaning, and filter replacement services keep your system running at peak performance.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}