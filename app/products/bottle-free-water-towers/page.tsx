import type { Metadata } from 'next';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/footer';
import LeadForm from '@/components/lead-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Link from 'next/link';
import { ArrowLeft, Check, Droplets, Shield, Wrench, Download, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Bottle-Free Water Towers | Pure Point Water Solutions',
  description: 'Freestanding bottle-free water towers for busy offices. Professional water filtration systems with flat monthly pricing and local service.',
};

export default function BottleFreeWaterTowersPage() {
  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-blue-600 text-white relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Bottle-Free Water Towers</h1>
              <p className="text-xl text-blue-100 text-balance">
                Freestanding units perfect for busy offices that need reliable, filtered water without the hassle of bottle deliveries.
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
            <div className="flex justify-center">
              <Carousel className="w-full max-w-md">
                <CarouselContent>
                  <CarouselItem>
                    <img
                      src="/WL3.png"
                      alt="WL3 bottle-free water tower"
                      className="w-full mx-auto"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src="/standing tower.png"
                      alt="Bottle-free water tower"
                      className="w-full mx-auto"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src="/WL T100.png"
                      alt="WL T100 bottle-free water tower"
                      className="w-full mx-auto"
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
            <div>
              <Badge className="mb-4">Most Popular</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Water Filtration</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our bottle-free water towers connect directly to your water line, providing unlimited filtered water 
                without the storage requirements or delivery schedules of traditional jug systems.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Multi-stage filtration system</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Hot and cold water options</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Professional installation included</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Ongoing maintenance and filter changes</span>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg mb-6">
                <p className="text-2xl font-bold text-primary mb-2">Starting at $50/month</p>
                <p className="text-gray-600">Everything included - no hidden fees</p>
                <p className="text-sm text-primary font-semibold mt-2">Two week free trial available</p>
              </div>

              <Button size="lg" asChild>
                <Link href="/#contact">Start Your Free Trial</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Technical Specifications</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-primary/5 to-blue-50/50 border-primary/20 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">WL3 Spec Sheet</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Detailed specifications for the WL3 In-tank UV water tower system
                    </p>
                  </div>
                  <Button asChild className="w-full">
                    <a href="/wl3_tower_spec_sheet.pdf" download className="flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      Download PDF
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/5 to-blue-50/50 border-primary/20 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">WL100 Tower Spec Sheet</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Complete technical details for the WL100 water dispensing unit
                    </p>
                  </div>
                  <Button asChild className="w-full">
                    <a href="/wl100_tower_spec_sheet.pdf" download className="flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      Download PDF
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/5 to-blue-50/50 border-primary/20 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">WS 11000 Spec Sheet</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Technical specifications for the WS 11000+ water cooler system
                    </p>
                  </div>
                  <Button asChild className="w-full">
                    <a href="/ws11000_tower_spec_sheet.pdf" download className="flex items-center gap-2">
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
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Bottle-Free?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Droplets className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Unlimited Water</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  No more running out of water or waiting for deliveries. Enjoy unlimited filtered water on demand.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Superior Filtration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Multi-stage filtration removes sediment, chlorine, and contaminants for the cleanest, best-tasting water.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Wrench className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Full Service Included</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Installation, maintenance, filter changes, and support - all included in your flat monthly rate.
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