import type { Metadata } from 'next';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowLeft, Droplets, FlaskConical, Leaf, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Water Information | Pure Point Water Solutions',
  description: 'Learn about our premium spring water and alkaline mineral enhanced water options. Sourced from the Shawangunk Ridge in New York\'s Hudson Valley.',
};

export default function WaterInformationPage() {
  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-blue-600 text-white relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/327090/pexels-photo-327090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
        ></div>

        <div className="absolute inset-0 bg-primary/20"></div>

        <div className="container">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <Button variant="ghost" asChild className="mb-4 text-white hover:bg-white/10">
              <Link href="/products/5-gallon-jug-delivery">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to 5-Gallon Delivery
              </Link>
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Water, Your Choice</h1>
            <p className="text-xl text-blue-100 text-balance">
              Premium spring water and alkaline mineral enhanced options — both sourced and prepared with care.
            </p>
          </div>
        </div>
      </section>

      {/* Spring Water Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Droplets className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Spring Water</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Natural hydration from the Shawangunk Ridge
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <Shield className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Source & Origin</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700">
                  <p className="mb-4">
                    Our spring water is sourced from a protected aquifer beneath the Shawangunk Ridge in New York's Hudson Valley — a geological formation known for its purity and mineral-rich bedrock.
                  </p>
                  <p>
                    The water is naturally filtered through layers of ancient rock and mineral deposits over decades, emerging cold, crisp, and balanced.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <FlaskConical className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Natural Mineral Profile</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700">
                  <p className="mb-4">
                    As it travels through the aquifer, the water picks up trace minerals like calcium, magnesium, and potassium — elements that contribute to its clean, refreshing taste.
                  </p>
                  <p>
                    These minerals are naturally occurring, not added, and they give the water a subtle character that people often describe as smooth and satisfying.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-2xl">What Makes It Different</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <p className="font-semibold mb-2">No Chemical Treatment</p>
                    <p>Unlike tap water, our spring water isn't chlorinated, fluoridated, or processed through municipal treatment plants. It's bottled at the source with minimal handling.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Consistent Quality</p>
                    <p>Because the source is protected and the aquifer is stable, the water's composition stays remarkably consistent — season to season, year to year.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Taste You Can Notice</p>
                    <p>People who switch from tap water often mention the difference immediately. It's lighter, cleaner, and easier to drink — especially if you're filling up a glass multiple times a day.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Alkaline Water Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Leaf className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Alkaline Mineral Enhanced Water</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                pH-balanced hydration for wellness-minded customers
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle>What Is Alkaline Water?</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700">
                  <p className="mb-4">
                    Alkaline water has a higher pH than standard drinking water — typically between 8.0 and 10.0, compared to the neutral pH of 7.0.
                  </p>
                  <p>
                    Our alkaline option is formulated to fall between 9.0–9.5, a range that many health-conscious customers prefer for daily hydration.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>How It's Made</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700">
                  <p className="mb-4">
                    We start with purified water and enhance it with a carefully balanced blend of minerals — including calcium, magnesium, and potassium bicarbonate.
                  </p>
                  <p>
                    These minerals not only raise the pH but also contribute electrolytes that support hydration and give the water a smooth, slightly silky texture.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-2xl">Why Customers Choose Alkaline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <p className="font-semibold mb-2">Wellness and Lifestyle</p>
                    <p>Many people who are intentional about their diet, fitness, or overall wellness gravitate toward alkaline water as part of a balanced lifestyle.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Taste and Texture</p>
                    <p>The mineral enhancement gives the water a smoother, more refined mouthfeel that some customers find more enjoyable than standard purified water.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Hydration Support</p>
                    <p>The added electrolytes can complement active lifestyles and help support hydration during physical activity or recovery.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 bg-white p-6 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-600 italic">
                <strong>Note:</strong> While alkaline water is popular among health-conscious consumers, it's important to understand that the FDA does not evaluate claims related to pH balance or specific health benefits. We offer it as an option for those who prefer it — not as a medical recommendation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Spring vs. Alkaline: Which Is Right for You?</h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-900"></th>
                    <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-900">Spring Water</th>
                    <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-900">Alkaline Water</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">pH Level</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Naturally balanced (typically 6.5–7.5)</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Enhanced to 9.0–9.5</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">Source</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Shawangunk Ridge aquifer</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Purified water with mineral enhancement</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">Mineral Content</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Naturally occurring trace minerals</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Added calcium, magnesium, potassium</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">Best For</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Everyday hydration, families, offices</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Wellness-focused customers, active lifestyles</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">Taste Profile</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Clean, crisp, refreshing</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Smooth, slightly silky</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-700 mb-6">
                Both options are available for delivery. Choose the one that fits your preferences — or try both and see what you like.
              </p>
              <Button size="lg" asChild>
                <Link href="/quote">Start Your Delivery Service</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
