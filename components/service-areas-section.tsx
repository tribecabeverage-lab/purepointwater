import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';

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

export default function ServiceAreasSection() {
  return (
    <section className="py-16 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/office building.jpg')" }}
      ></div>
      
      {/* Light Blue Overlay */}
      <div className="absolute inset-0 bg-blue-200/70"></div>
      
      <div className="container">
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See Our Service Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Serving businesses across Fairfield County CT, Westchester County NY, and all five NYC boroughs with local water solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12 relative z-10">
          {/* Fairfield County */}
          <Card className="relative overflow-hidden border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-xl group">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50 to-primary/10 rounded-full -translate-y-12 translate-x-12 group-hover:scale-110 transition-transform duration-500"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-primary/5 to-blue-100/50 rounded-full translate-y-10 -translate-x-10 group-hover:scale-110 transition-transform duration-500"></div>
            
            <CardHeader>
              <CardTitle className="text-2xl flex items-center relative z-10">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-colors duration-300">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                Fairfield County, CT
              </CardTitle>
              <CardDescription className="relative z-10">
                Professional water solutions throughout Fairfield County
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6 text-sm">
                {fairfieldCountyCities.slice(0, 12).map((city) => (
                  <Link
                    key={city}
                    href={`/service-areas/${createSlug(city)}`}
                    className="bg-gray-50 hover:bg-primary/5 text-primary hover:text-primary/80 px-2 py-1 rounded text-xs font-medium transition-all duration-200 hover:shadow-sm border border-transparent hover:border-primary/20"
                  >
                    {city}
                  </Link>
                ))}
              </div>
              <div className="text-center">
                <Button variant="outline" className="border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300" asChild>
                  <Link href="/service-areas" className="flex items-center space-x-2">
                    <span>View All CT Locations</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Westchester County */}
          <Card className="relative overflow-hidden border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-xl group">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50 to-primary/10 rounded-full -translate-y-12 translate-x-12 group-hover:scale-110 transition-transform duration-500"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-primary/5 to-blue-100/50 rounded-full translate-y-10 -translate-x-10 group-hover:scale-110 transition-transform duration-500"></div>
            
            <CardHeader>
              <CardTitle className="text-2xl flex items-center relative z-10">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-colors duration-300">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                Westchester County, NY
              </CardTitle>
              <CardDescription className="relative z-10">
                Reliable service across Westchester County communities
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6 text-sm">
                {westchesterCountyCities.slice(0, 12).map((city) => (
                  <Link
                    key={city}
                    href={`/service-areas/${createSlug(city)}`}
                    className="bg-gray-50 hover:bg-primary/5 text-primary hover:text-primary/80 px-2 py-1 rounded text-xs font-medium transition-all duration-200 hover:shadow-sm border border-transparent hover:border-primary/20"
                  >
                    {city}
                  </Link>
                ))}
              </div>
              <div className="text-center">
                <Button variant="outline" className="border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300" asChild>
                  <Link href="/service-areas" className="flex items-center space-x-2">
                    <span>View All NY Locations</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* NYC Boroughs */}
          <Card className="relative overflow-hidden border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-xl group">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50 to-primary/10 rounded-full -translate-y-12 translate-x-12 group-hover:scale-110 transition-transform duration-500"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-primary/5 to-blue-100/50 rounded-full translate-y-10 -translate-x-10 group-hover:scale-110 transition-transform duration-500"></div>

            <CardHeader>
              <CardTitle className="text-2xl flex items-center relative z-10">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-colors duration-300">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                NYC Boroughs
              </CardTitle>
              <CardDescription className="relative z-10">
                Professional service across all five boroughs
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="grid grid-cols-1 gap-2 mb-6 text-sm">
                {nycBoroughs.map((borough) => (
                  <Link
                    key={borough}
                    href={`/service-areas/${createSlug(borough)}`}
                    className="bg-gray-50 hover:bg-primary/5 text-primary hover:text-primary/80 px-2 py-1 rounded text-xs font-medium transition-all duration-200 hover:shadow-sm border border-transparent hover:border-primary/20"
                  >
                    {borough}
                  </Link>
                ))}
              </div>
              <div className="text-center">
                <Button variant="outline" className="border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300" asChild>
                  <Link href="/service-areas" className="flex items-center space-x-2">
                    <span>View All NYC Boroughs</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center relative z-10">
          <div className="bg-gradient-to-br from-primary/5 via-blue-50/50 to-primary/10 p-8 rounded-2xl max-w-2xl mx-auto border border-primary/10 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Serving Your Area</h3>
            <p className="text-gray-600 mb-6">
              Local water solutions with real people you can call, serving communities within 90 minutes of NYC.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="shadow-lg hover:shadow-xl transition-shadow duration-300" asChild>
                <Link href="/service-areas">View All Service Areas</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 hover:border-primary/50 shadow-md hover:shadow-lg transition-all duration-300" asChild>
                <Link href="#contact">Request Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}