'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import LeadForm from '@/components/lead-form';
import Link from 'next/link';
import { Phone } from 'lucide-react';

const heroImages = [
  {
    src: '/two people chatting while getting water out of a water cooler in the office.jpg',
    alt: 'Two people chatting while getting water from office cooler',
  },
  {
    src: '/water cool in office break room.jpg',
    alt: 'Water cooler in office break room',
  },
  {
    src: '/board room with water cooler in the back.jpg',
    alt: 'Board room with water cooler in the background',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(heroImages.length);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Create extended array with duplicates for infinite loop
  const extendedImages = [...heroImages, ...heroImages, ...heroImages];
  const startIndex = heroImages.length; // Start from the middle set

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentSlide(prev => prev + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Handle transition end to reset position for infinite loop
  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    
    // If we've reached the end of the extended array, jump back to the middle
    if (currentSlide >= startIndex + heroImages.length) {
      setCurrentSlide(startIndex);
    }
    // If we've gone before the start, jump to the end of the middle section
    else if (currentSlide < startIndex) {
      setCurrentSlide(startIndex + heroImages.length - 1);
    }
  };

  const goToSlide = (index: number) => {
    setIsTransitioning(true);
    setCurrentSlide(startIndex + index);
  };

  return (
    <section className="relative min-h-[600px] text-white overflow-hidden">
      {/* Carousel Background Images */}
      <div className="absolute inset-0">
        <div 
          className={`flex h-full ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
          style={{ transform: `translateX(-${currentSlide * (100 / extendedImages.length)}%)`, width: `${extendedImages.length * 100}%` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedImages.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: `url('${image.src}')`,
                width: `${100 / extendedImages.length}%`
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-blue-900/60"></div>
      
      <div className="container relative z-10">
        <div className="flex items-center justify-between min-h-[600px]">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-balance">
              Reliable Water & Ice for Your Home & Office
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 text-balance">
              Filtered cooler rentals and 5-gallon jug delivery, your one-stop for clean drinking water and commercial ice for Fairfield County, Westchester County, and NYC.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-8 text-sm font-medium">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-blue-300 rounded-full mr-2"></span>
                Flat monthly rate
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-blue-300 rounded-full mr-2"></span>
                Local service
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-blue-300 rounded-full mr-2"></span>
                Preventative care
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-400 text-white hover:bg-blue-500" asChild>
                <a href="tel:203-275-9009" className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Call Us</span>
                </a>
              </Button>
              <Button size="lg" className="bg-blue-400 text-white hover:bg-blue-500" asChild>
                <Link href="#contact">Request Quote</Link>
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block my-8">
            <LeadForm />
          </div>
        </div>

        {/* Mobile form */}
        <div className="lg:hidden my-12 flex justify-center">
          <LeadForm />
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              (currentSlide - startIndex) % heroImages.length === index ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
      
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block opacity-20">
        <div className="w-full h-full bg-gradient-to-l from-transparent to-primary/50"></div>
      </div>
    </section>
  );
}