import type { Metadata } from 'next';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/footer';
import LeadForm from '@/components/lead-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Link from 'next/link';
import { ArrowLeft, Check, Package, Truck, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: '5-Gallon Jug Delivery | Pure Point Water Solutions',
  description: 'Pure water delivered to your door. 5-gallon jug delivery with BPA Free Bottles within 30 miles of Old Greenwich, CT. $10 per jug, no hidden fees, no contracts.',
};

export default function FiveGallonJugDeliveryPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Pure Water, Right to Your Door</h1>
              <p className="text-xl text-blue-100 text-balance">
                Whether you're hydrating a household or keeping an office stocked, we make it simple. Schedule your delivery, we handle the rest — fresh 5-gallon BPA Free Bottles dropped off, empties picked up, no hassle.
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
                      src="/Untitled design (24).png"
                      alt="5-gallon water jug dispenser"
                      className="w-full mx-auto"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src="/Untitled design (25).png"
                      alt="5-gallon water cooler"
                      className="w-full mx-auto"
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
            <div>
              <Badge className="mb-4">Flexible Solution</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Pure Water, Right to Your Door</h2>
              <p className="text-lg text-gray-600 mb-6">
                Whether you're hydrating a household or keeping an office stocked, we make it simple. Schedule your delivery, we handle the rest — fresh 5-gallon BPA Free Bottles dropped off, empties picked up, no hassle.
              </p>

              <div className="bg-primary/5 p-6 rounded-lg mb-6">
                <p className="text-2xl font-bold text-primary mb-2">$10 per jug — no hidden fees, no contracts</p>
                <p className="text-sm text-gray-500 mt-2">(For jugs only)</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Free delivery within 30 miles of Old Greenwich</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Flexible scheduling — weekly, bi-weekly, or monthly</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>BPA Free Bottles — better taste, zero plastic waste</span>
                </div>
              </div>

              <div className="flex gap-4">
                <Button size="lg" asChild>
                  <Link href="/quote">Start Delivery Service</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/products/water-information">Learn More About Our Water</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What We Offer</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle>Spring Water</CardTitle>
                  <CardDescription>Natural hydration from the Shawangunk Ridge</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Sourced from a protected aquifer beneath the Shawangunk Ridge in New York's Hudson Valley, our spring water is naturally filtered through layers of ancient rock and mineral deposits.
                  </p>
                  <p className="text-gray-700">
                    It emerges cold, crisp, and balanced — with trace minerals like calcium and magnesium that give it a clean, refreshing taste you can actually notice.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Alkaline Mineral Enhanced Water</CardTitle>
                  <CardDescription>pH-balanced hydration for wellness-minded customers</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    For customers seeking a more alkaline profile, we offer mineral-enhanced water with a pH between 9.0–9.5.
                  </p>
                  <p className="text-gray-700">
                    This option is formulated to support hydration and complement health-conscious lifestyles — clean, smooth, and intentionally balanced.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefits of Water Delivery</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Better Than Tap</p>
                    <p className="text-gray-700 text-sm">No chlorine, no questionable treatment chemicals, no aging pipes — just water the way it should taste.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Smarter Than Bottled</p>
                    <p className="text-gray-700 text-sm">BPA Free Bottles you reuse through delivery, not endless single-use plastic. Better for the planet, better for your routine.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">No Commitment, No Hassle</p>
                    <p className="text-gray-700 text-sm">Pause, adjust, or cancel anytime. Delivery on your schedule, not ours.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">One Simple Price</p>
                    <p className="text-gray-700 text-sm">$10 per jug, free delivery within 30 miles of Old Greenwich. That's it.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Deliver For */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Who We Deliver For</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Residential</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Tap water may be treated, but it's not the same as water you'd choose. Homeowners switch to delivery for the taste, the peace of mind, and the simple pleasure of knowing exactly what's going into every pour — for themselves and their families. Our 5-gallon BPA Free Bottles keep your kitchen stocked without the clutter of single-use plastic.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Small and Medium Businesses</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Keep your team hydrated with fresh, great-tasting water — delivered weekly or monthly on a schedule that fits your office. Whether you have 5 employees or 500, we tailor delivery frequency and volume to your needs, so you never run out and never have to think about it. A small upgrade that signals a lot of care.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Health and Wellness Enthusiasts</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  For those who are intentional about what goes into their bodies, water quality is non-negotiable. Whether you're drawn to the natural mineral balance of our Shawangunk Ridge spring water or the pH-enhanced benefits of our alkaline option, we're the delivery service for people who take hydration seriously — free from microplastics, chemicals, and compromise.
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