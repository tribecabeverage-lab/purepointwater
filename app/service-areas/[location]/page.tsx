import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/footer';
import LeadForm from '@/components/lead-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowLeft, Phone, MapPin, Check } from 'lucide-react';

interface LocationPageProps {
  params: {
    location: string;
  };
}

const serviceAreas = [
  // Fairfield County, CT
  { name: 'Bethel', county: 'Fairfield County, CT', slug: 'bethel' },
  { name: 'Bridgeport', county: 'Fairfield County, CT', slug: 'bridgeport' },
  { name: 'Brookfield', county: 'Fairfield County, CT', slug: 'brookfield' },
  { name: 'Danbury', county: 'Fairfield County, CT', slug: 'danbury' },
  { name: 'Darien', county: 'Fairfield County, CT', slug: 'darien' },
  { name: 'Easton', county: 'Fairfield County, CT', slug: 'easton' },
  { name: 'Fairfield', county: 'Fairfield County, CT', slug: 'fairfield' },
  { name: 'Greenwich', county: 'Fairfield County, CT', slug: 'greenwich' },
  { name: 'Monroe', county: 'Fairfield County, CT', slug: 'monroe' },
  { name: 'New Canaan', county: 'Fairfield County, CT', slug: 'new-canaan' },
  { name: 'New Fairfield', county: 'Fairfield County, CT', slug: 'new-fairfield' },
  { name: 'Newtown', county: 'Fairfield County, CT', slug: 'newtown' },
  { name: 'Norwalk', county: 'Fairfield County, CT', slug: 'norwalk' },
  { name: 'Redding', county: 'Fairfield County, CT', slug: 'redding' },
  { name: 'Ridgefield', county: 'Fairfield County, CT', slug: 'ridgefield' },
  { name: 'Shelton', county: 'Fairfield County, CT', slug: 'shelton' },
  { name: 'Sherman', county: 'Fairfield County, CT', slug: 'sherman' },
  { name: 'Stamford', county: 'Fairfield County, CT', slug: 'stamford' },
  { name: 'Stratford', county: 'Fairfield County, CT', slug: 'stratford' },
  { name: 'Trumbull', county: 'Fairfield County, CT', slug: 'trumbull' },
  { name: 'Weston', county: 'Fairfield County, CT', slug: 'weston' },
  { name: 'Westport', county: 'Fairfield County, CT', slug: 'westport' },
  { name: 'Wilton', county: 'Fairfield County, CT', slug: 'wilton' },
  
  // Westchester County, NY
  { name: 'Mount Vernon', county: 'Westchester County, NY', slug: 'mount-vernon' },
  { name: 'New Rochelle', county: 'Westchester County, NY', slug: 'new-rochelle' },
  { name: 'Peekskill', county: 'Westchester County, NY', slug: 'peekskill' },
  { name: 'Rye (City)', county: 'Westchester County, NY', slug: 'rye-city' },
  { name: 'White Plains', county: 'Westchester County, NY', slug: 'white-plains' },
  { name: 'Yonkers', county: 'Westchester County, NY', slug: 'yonkers' },
  { name: 'Bedford', county: 'Westchester County, NY', slug: 'bedford' },
  { name: 'Cortlandt', county: 'Westchester County, NY', slug: 'cortlandt' },
  { name: 'Eastchester', county: 'Westchester County, NY', slug: 'eastchester' },
  { name: 'Greenburgh', county: 'Westchester County, NY', slug: 'greenburgh' },
  { name: 'Harrison', county: 'Westchester County, NY', slug: 'harrison' },
  { name: 'Lewisboro', county: 'Westchester County, NY', slug: 'lewisboro' },
  { name: 'Mamaroneck', county: 'Westchester County, NY', slug: 'mamaroneck' },
  { name: 'Mount Kisco', county: 'Westchester County, NY', slug: 'mount-kisco' },
  { name: 'Mount Pleasant', county: 'Westchester County, NY', slug: 'mount-pleasant' },
  { name: 'New Castle', county: 'Westchester County, NY', slug: 'new-castle' },
  { name: 'North Castle', county: 'Westchester County, NY', slug: 'north-castle' },
  { name: 'North Salem', county: 'Westchester County, NY', slug: 'north-salem' },
  { name: 'Ossining', county: 'Westchester County, NY', slug: 'ossining' },
  { name: 'Pelham', county: 'Westchester County, NY', slug: 'pelham' },
  { name: 'Pound Ridge', county: 'Westchester County, NY', slug: 'pound-ridge' },
  { name: 'Rye (Town)', county: 'Westchester County, NY', slug: 'rye-town' },
  { name: 'Scarsdale', county: 'Westchester County, NY', slug: 'scarsdale' },
  { name: 'Somers', county: 'Westchester County, NY', slug: 'somers' },
  { name: 'Yorktown', county: 'Westchester County, NY', slug: 'yorktown' },

  // NYC Boroughs
  { name: 'The Bronx', county: 'New York City, NY', slug: 'the-bronx' },
  { name: 'Brooklyn', county: 'New York City, NY', slug: 'brooklyn' },
  { name: 'Manhattan', county: 'New York City, NY', slug: 'manhattan' },
  { name: 'Queens', county: 'New York City, NY', slug: 'queens' },
  { name: 'Staten Island', county: 'New York City, NY', slug: 'staten-island' },
];

export async function generateStaticParams() {
  return serviceAreas.map((area) => ({
    location: area.slug,
  }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const area = serviceAreas.find((a) => a.slug === params.location);
  
  if (!area) {
    return {
      title: 'Location Not Found | Pure Point Water Solutions',
    };
  }

  return {
    title: `Water Solutions in ${area.name} | Pure Point Water Solutions`,
    description: `Bottle-less water coolers and 5-gallon jug delivery in ${area.name}, ${area.county}. Local service with flat monthly pricing.`,
  };
}

export default function LocationPage({ params }: LocationPageProps) {
  const area = serviceAreas.find((a) => a.slug === params.location);

  if (!area) {
    notFound();
  }

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
                <Link href="/service-areas">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Service Areas
                </Link>
              </Button>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Water Solutions in {area.name}
              </h1>
              <p className="text-xl text-blue-100 text-balance">
                Professional water cooler rentals and 5-gallon jug delivery serving businesses in {area.name}, {area.county}.
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

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Local Water Solutions for {area.name}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Pure Point Water Solutions proudly serves businesses in {area.name} with reliable, 
                professional water solutions. Our local team provides bottle-less cooler rentals 
                and 5-gallon jug delivery with transparent pricing and exceptional service.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Bottle-less water cooler rentals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>5-gallon jug delivery service</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Professional installation & maintenance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Local service with real people to call</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <a href="tel:973-913-4568" className="flex items-center space-x-2">
                    <Phone className="h-5 w-5" />
                    <span>Call 973-913-4568</span>
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/#contact">Request Quote</Link>
                </Button>
              </div>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 text-primary mr-2" />
                    Service Area: {area.county}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Bottle-less Systems</h4>
                      <p className="text-gray-600 text-sm">Starting at $45/month with everything included</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">5-Gallon Delivery</h4>
                      <p className="text-gray-600 text-sm">$10 per jug (5-jug minimum) + $10/month dispenser rentals • $50 minimum order</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Our Location</h4>
                      <p className="text-gray-600 text-sm">
                        257 Sound Beach Ave<br />
                        Old Greenwich, CT 06870
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Water Solutions for {area.name} Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
              Choose from our range of professional water systems designed for workplace needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Water Towers</CardTitle>
                <CardDescription>Freestanding bottle-less systems</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary mb-2">$50/month</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/products/bottle-free-water-towers">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle>Countertop Systems</CardTitle>
                <CardDescription>Compact filtered water coolers</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary mb-2">$45/month</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/products/countertop-water-coolers">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle>Ice Machines</CardTitle>
                <CardDescription>Water + ice production</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary mb-2">$75/month</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/products/ice-machines">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle>5-Gallon Jugs</CardTitle>
                <CardDescription>Delivery within ~15 miles</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary mb-2">$10/jug</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/products/5-gallon-jug-delivery">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}