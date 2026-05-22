import type { Metadata } from 'next';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/footer';
import LeadForm from '@/components/lead-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { MapPin, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Service Areas | Pure Point Water Solutions',
  description: 'Pure Point Water Solutions serves Fairfield County CT, Westchester County NY, and all five NYC boroughs with bottle-less water coolers and 5-gallon jug delivery.',
};

const fairfieldCountyCities = [
  'Bethel', 'Bridgeport', 'Brookfield', 'Danbury', 'Darien', 'Easton', 'Fairfield', 
  'Greenwich', 'Monroe', 'New Canaan', 'New Fairfield', 'Newtown', 'Norwalk', 
  'Redding', 'Ridgefield', 'Shelton', 'Sherman', 'Stamford', 'Stratford', 
  'Trumbull', 'Weston', 'Westport', 'Wilton'
];

const westchesterCountyCities = [
  'Mount Vernon', 'New Rochelle', 'Peekskill', 'Rye (City)', 'White Plains', 'Yonkers',
  'Bedford', 'Cortlandt', 'Eastchester', 'Greenburgh', 'Harrison', 'Lewisboro',
  'Mamaroneck', 'Mount Kisco', 'Mount Pleasant', 'New Castle', 'North Castle',
  'North Salem', 'Ossining', 'Pelham', 'Pound Ridge', 'Rye (Town)', 'Scarsdale',
  'Somers', 'Yorktown'
];

const nycBoroughs = [
  'The Bronx',
  'Brooklyn',
  'Manhattan',
  'Queens',
  'Staten Island'
];

function createSlug(city: string): string {
  return city.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[()]/g, '')
    .replace(/--+/g, '-');
}

export default function ServiceAreasPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Service Areas</h1>
              <p className="text-xl text-blue-100 text-balance">
                Serving businesses across Fairfield County CT, Westchester County NY, and all five NYC boroughs with reliable water solutions and local service.
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

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Where We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
              Local water solutions with real people you can call, serving communities within 90 minutes of NYC.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Fairfield County */}
            <Card className="relative overflow-hidden border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-xl group">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-primary/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/5 to-blue-100/50 rounded-full translate-y-12 -translate-x-12 group-hover:scale-110 transition-transform duration-500"></div>
              
              <CardHeader>
                <CardTitle className="text-2xl flex items-center relative z-10">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  Fairfield County, CT
                </CardTitle>
                <CardDescription className="text-lg relative z-10">
                  Comprehensive water solutions throughout Fairfield County
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                  {fairfieldCountyCities.map((city) => (
                    <Link
                      key={city}
                      href={`/service-areas/${createSlug(city)}`}
                      className="bg-gray-50 hover:bg-primary/5 text-primary hover:text-primary/80 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-sm border border-transparent hover:border-primary/20"
                    >
                      {city}
                    </Link>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-primary/5 to-blue-50 p-6 rounded-xl border border-primary/10">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    <p className="text-sm text-primary font-semibold">Headquartered in Greenwich</p>
                  </div>
                  <p className="text-sm text-gray-600 ml-4">257 Sound Beach Ave, Old Greenwich, CT 06870</p>
                </div>
              </CardContent>
            </Card>

            {/* Westchester County */}
            <Card className="relative overflow-hidden border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-xl group">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-primary/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/5 to-blue-100/50 rounded-full translate-y-12 -translate-x-12 group-hover:scale-110 transition-transform duration-500"></div>
              
              <CardHeader>
                <CardTitle className="text-2xl flex items-center relative z-10">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  Westchester County, NY
                </CardTitle>
                <CardDescription className="text-lg relative z-10">
                  Reliable service across Westchester County communities
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                  {westchesterCountyCities.map((city) => (
                    <Link
                      key={city}
                      href={`/service-areas/${createSlug(city)}`}
                      className="bg-gray-50 hover:bg-primary/5 text-primary hover:text-primary/80 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-sm border border-transparent hover:border-primary/20"
                    >
                      {city}
                    </Link>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-primary/5 to-blue-50 p-6 rounded-xl border border-primary/10">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    <p className="text-sm text-primary font-semibold">Serving all of Westchester</p>
                  </div>
                  <p className="text-sm text-gray-600 ml-4">From Yonkers to North Salem</p>
                </div>
              </CardContent>
            </Card>

            {/* NYC Boroughs */}
            <Card className="relative overflow-hidden border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-xl group">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-primary/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/5 to-blue-100/50 rounded-full translate-y-12 -translate-x-12 group-hover:scale-110 transition-transform duration-500"></div>

              <CardHeader>
                <CardTitle className="text-2xl flex items-center relative z-10">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  NYC Boroughs
                </CardTitle>
                <CardDescription className="text-lg relative z-10">
                  Professional service across all five boroughs of New York City
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="grid grid-cols-1 gap-3 mb-8">
                  {nycBoroughs.map((borough) => (
                    <Link
                      key={borough}
                      href={`/service-areas/${createSlug(borough)}`}
                      className="bg-gray-50 hover:bg-primary/5 text-primary hover:text-primary/80 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-sm border border-transparent hover:border-primary/20"
                    >
                      {borough}
                    </Link>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-primary/5 to-blue-50 p-6 rounded-xl border border-primary/10">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    <p className="text-sm text-primary font-semibold">All Five Boroughs</p>
                  </div>
                  <p className="text-sm text-gray-600 ml-4">From The Bronx to Staten Island</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-gray-50 via-blue-50/30 to-primary/5 p-8 rounded-2xl max-w-2xl mx-auto border border-gray-200/50 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
              <p className="text-gray-600 mb-6">
                Contact our local team for a free quote on water solutions for your business.
              </p>
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

      <Footer />
    </main>
  );
}