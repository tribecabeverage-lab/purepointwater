'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/7oPtq3ZyP2SHtopMlTOknDwsHiyT1s5rwJbThAJArbkogFmha5x81767nbjdsYsH-1.png"
              alt="Pure Point Water Solutions"
              width={200}
              height={60}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-primary transition-colors">
                Products
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/products/5-gallon-jug-delivery">
                    5-Gallon Jug Delivery
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products/bottle-free-water-towers">
                    Bottle-Free Water Towers
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products/countertop-water-coolers">
                    Countertop Water Coolers
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products/ice-machines">
                    Ice & Water Combo
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products/commercial-ice-machines">
                    Commercial Ice Machines
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/service-areas" className="text-gray-700 hover:text-primary transition-colors">
              Service Areas
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-primary transition-colors">
              Blog
            </Link>
            <Button asChild>
              <a href="tel:203-275-9009" className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>203-275-9009</span>
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="px-3 py-2">
                <div className="font-medium text-gray-900 mb-2">Products</div>
                <div className="pl-4 space-y-1">
                  <Link
                    href="/products/5-gallon-jug-delivery"
                    onClick={closeMenu}
                    className="block px-3 py-2 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                  >
                    5-Gallon Jug Delivery
                  </Link>
                  <Link
                    href="/products/bottle-free-water-towers"
                    onClick={closeMenu}
                    className="block px-3 py-2 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                  >
                    Bottle-Free Water Towers
                  </Link>
                  <Link
                    href="/products/countertop-water-coolers"
                    onClick={closeMenu}
                    className="block px-3 py-2 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                  >
                    Countertop Water Coolers
                  </Link>
                  <Link
                    href="/products/ice-machines"
                    onClick={closeMenu}
                    className="block px-3 py-2 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                  >
                    Ice & Water Combo
                  </Link>
                  <Link
                    href="/products/commercial-ice-machines"
                    onClick={closeMenu}
                    className="block px-3 py-2 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                  >
                    Commercial Ice Machines
                  </Link>
                </div>
              </div>
              <Link
                href="/service-areas"
                onClick={closeMenu}
                className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
              >
                Service Areas
              </Link>
              <Link
                href="/blog"
                onClick={closeMenu}
                className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
              >
                Blog
              </Link>
              <div className="px-3 py-2">
                <Button className="w-full" asChild>
                  <a href="tel:203-275-9009" className="flex items-center justify-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>203-275-9009</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}