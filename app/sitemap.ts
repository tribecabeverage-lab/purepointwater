import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-data';

const fairfieldCountyCities = [
  'bethel', 'bridgeport', 'brookfield', 'danbury', 'darien', 'easton', 'fairfield', 
  'greenwich', 'monroe', 'new-canaan', 'new-fairfield', 'newtown', 'norwalk', 
  'redding', 'ridgefield', 'shelton', 'sherman', 'stamford', 'stratford', 
  'trumbull', 'weston', 'westport', 'wilton'
];

const westchesterCountyCities = [
  'mount-vernon', 'new-rochelle', 'peekskill', 'rye-city', 'white-plains', 'yonkers',
  'bedford', 'cortlandt', 'eastchester', 'greenburgh', 'harrison', 'lewisboro',
  'mamaroneck', 'mount-kisco', 'mount-pleasant', 'new-castle', 'north-castle',
  'north-salem', 'ossining', 'pelham', 'pound-ridge', 'rye-town', 'scarsdale',
  'somers', 'yorktown'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://purepointwatersolutions.com';
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/quote`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/service-areas`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  // Product pages
  const productPages = [
    {
      url: `${baseUrl}/products/bottle-free-water-towers`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products/countertop-water-coolers`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products/5-gallon-jug-delivery`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products/ice-machines`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products/commercial-ice-machines`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  // Blog posts
  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Service area pages
  const serviceAreaPages = [
    ...fairfieldCountyCities.map((city) => ({
      url: `${baseUrl}/service-areas/${city}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...westchesterCountyCities.map((city) => ({
      url: `${baseUrl}/service-areas/${city}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];

  return [
    ...staticPages,
    ...productPages,
    ...blogPages,
    ...serviceAreaPages,
  ];
}