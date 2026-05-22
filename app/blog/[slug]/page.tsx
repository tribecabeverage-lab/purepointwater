import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/footer';
import LeadForm from '@/components/lead-form';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { blogPosts } from '@/lib/blog-data';
import BlogQuiz from '@/components/blog-quiz';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | Pure Point Water Solutions',
    };
  }

  const pageTitle = post.metaTitle ?? post.title;
  const pageDescription = post.metaDescription ?? post.excerpt;

  return {
    title: `${pageTitle} | Pure Point Water Solutions`,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      type: 'article',
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same category, different post)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 2);

  return (
    <main>
      <Navigation />
      
      {/* Hero Section with Lead Form */}
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
              <p className="text-xl text-blue-100 text-balance">
                {post.excerpt}
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
      
      <article className="py-16">
        <div className="container max-w-4xl">
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-4">
              <Link href="/blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
            
            <div className="flex items-center justify-between mb-4">
              <Badge variant="secondary">{post.category}</Badge>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-1" />
                {post.date}
              </div>
            </div>
            
            <div className="flex items-center text-gray-600">
              <User className="h-4 w-4 mr-2" />
              <span>By {post.author}</span>
            </div>
          </div>

          <div className="max-w-none">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              {/* Article Header */}
              <div className="bg-gradient-to-r from-primary/5 to-blue-50 px-8 py-6 border-b border-gray-100">
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                  <span className="bg-white px-3 py-1 rounded-full border border-gray-200 font-medium">
                    {post.category}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  {post.title}
                </h1>
                <p className="text-lg text-gray-600 mt-4 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
              
              {/* Article Content */}
              <div className="px-8 py-8">
                <div className="blog-content text-gray-800 leading-relaxed space-y-10">
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                  {post.quiz ? <BlogQuiz config={post.quiz} /> : null}
                </div>
              </div>
            </div>
          </div>

          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-16 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Posts</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <div key={relatedPost.slug} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <Badge variant="secondary" className="mb-3">{relatedPost.category}</Badge>
                    <h4 className="text-xl font-semibold mb-3">
                      <Link href={`/blog/${relatedPost.slug}`} className="hover:text-primary transition-colors">
                        {relatedPost.title}
                      </Link>
                    </h4>
                    <p className="text-gray-600 mb-4">{relatedPost.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{relatedPost.author}</span>
                      <span className="mx-2">•</span>
                      <span>{relatedPost.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <Footer />
    </main>
  );
}