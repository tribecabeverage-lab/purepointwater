import type { Metadata } from 'next';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/footer';
import LeadForm from '@/components/lead-form';
import BlogCard from '@/components/blog-card';
import { blogPosts } from '@/lib/blog-data';

export const metadata: Metadata = {
  title: 'Blog | Pure Point Water Solutions',
  description: 'Expert insights on office water solutions, bottleless coolers, and workplace hydration from Pure Point Water Solutions.',
};

export default function BlogPage() {
  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-blue-600 text-white relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
        ></div>
        
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-primary/20"></div>
        
        <div className="container">
          <div className="flex items-center justify-between min-h-[400px] relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
              <p className="text-xl text-blue-100 text-balance">
                Expert insights on office water solutions, workplace hydration, and industry trends.
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

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...blogPosts].reverse().map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}