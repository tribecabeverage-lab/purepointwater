import type { Metadata } from 'next';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/footer';
import CatalogBrowser from '@/components/catalog-browser';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Truck, FileText, Package } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Full Product Catalog | Pure Point Water Solutions',
  description:
    'Coolers, premium and sparkling water, case and pallet quantities, coffee, tea, cups and breakroom supplies from Pure Point Water Solutions. One delivery, one invoice.',
};

export default function FullCatalogPage() {
  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-primary to-blue-600 text-white">
        <div className="container">
          <Button variant="ghost" asChild className="mb-4 text-white hover:bg-white/10">
            <Link href="/#products">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Link>
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl">
            Products &amp; Supplies
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl text-balance">
            Coolers, bottled water by the case or pallet, coffee, cups and paper goods.
            Whatever your breakroom runs on, it arrives on the same truck, on the same
            schedule, on one invoice.
          </p>
        </div>
      </section>

      {/* Why one supplier */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-3">
              <Truck className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">One Delivery</p>
                <p className="text-gray-600 text-sm">
                  Water, coffee and supplies arrive together on your regular route day.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <FileText className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">One Invoice</p>
                <p className="text-gray-600 text-sm">
                  Every product on a single itemized bill, however many floors or sites.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Package className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">No Contracts</p>
                <p className="text-gray-600 text-sm">
                  Adjust quantities, add products or pause anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section className="py-16 bg-white">
        <div className="container">
          <CatalogBrowser />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Tell us what your breakroom needs
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Pricing depends on volume and delivery frequency, so we quote it properly
            rather than guessing. Send us a list and we&rsquo;ll come back with numbers.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/quote">Get a Quote</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:973-913-4568">Call 973-913-4568</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
