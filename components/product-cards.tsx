'use client';

'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Droplets, Package, Coffee, Snowflake } from 'lucide-react';
import Link from 'next/link';

const products = [
  {
    title: 'Bottle-free Water Towers',
    description: 'Freestanding units for busy offices',
    icon: Droplets,
    image: '/untitled_design_(48).png',
  },
  {
    title: '5-Gallon Jug Delivery',
    description: 'Within ~15 miles of Old Greenwich; $10 per jug, 5-jug minimum',
    icon: Package,
    image: '/Untitled design (25).png',
  },
  {
    title: 'Countertop Water Coolers',
    description: 'Compact, filtered countertop systems',
    icon: Coffee,
    image: '/Tabletop Cooler.png',
  },
  {
    title: 'Ice & Water Combo',
    description: 'Ice production with integrated water & filtration',
    icon: Snowflake,
    image: '/with ice maker.png',
  },
  {
    title: 'Commercial Ice Machines',
    description: 'High-capacity ice production for restaurants & large offices',
    icon: Snowflake,
    image: '/Untitled design (13).png',
  },
];

export default function ProductCards() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden" id="products">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
      ></div>
      
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-white/40"></div>
      
      <div className="container">
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Water, Ice & 5-Gallon Jugs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Local team providing plumb-in bottleless systems or 5-gallon jugs with straightforward pricing, quick installs, and real people to call.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
          {products.map((product, index) => (
            <Link key={index} href={getProductLink(product.title)} className="block">
              <Card className="text-center hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary/30 shadow-sm hover:shadow-2xl flex flex-col h-full cursor-pointer group bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-6 pt-8">
                  {product.image ? (
                    <div className="mx-auto w-48 h-48 mb-6 flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50/50 rounded-xl p-4 group-hover:scale-105 transition-transform duration-300">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-full object-contain drop-shadow-sm"
                      />
                    </div>
                  ) : (
                    <div className="mx-auto w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                      <product.icon className="h-10 w-10 text-primary" />
                    </div>
                  )}
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">{product.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between px-6 pb-8">
                  <CardDescription className="mb-6 text-base text-gray-600 text-balance flex-1 leading-relaxed">
                    {product.description}
                  </CardDescription>
                  <Button 
                    size="default" 
                    className="bg-primary hover:bg-primary/90 text-white pointer-events-none group-hover:shadow-lg transition-all duration-300 font-semibold"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function getProductLink(title: string): string {
  switch (title) {
    case 'Bottle-free Water Towers':
      return '/products/bottle-free-water-towers';
    case 'Countertop Water Coolers':
      return '/products/countertop-water-coolers';
    case '5-Gallon Jug Delivery':
      return '/products/5-gallon-jug-delivery';
    case 'Ice & Water Combo':
      return '/products/ice-machines';
    case 'Commercial Ice Machines':
      return '/products/commercial-ice-machines';
    default:
      return '#contact';
  }
}