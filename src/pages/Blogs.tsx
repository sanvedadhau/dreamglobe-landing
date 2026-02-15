import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Calendar, User, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogs = [
  {
    id: 1,
    title: 'Complete Guide to Canada Express Entry 2024',
    excerpt: 'Everything you need to know about the Express Entry system, CRS scores, and how to improve your chances of getting an ITA.',
    category: 'Canada Immigration',
    date: 'Jan 15, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600',
  },
  {
    id: 2,
    title: 'Study in Germany: A Comprehensive Guide',
    excerpt: 'Discover why Germany is the top choice for international students with its tuition-free universities and post-study work options.',
    category: 'Study Abroad',
    date: 'Jan 10, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600',
  },
  {
    id: 3,
    title: 'Australia Skilled Migration: Points Calculator Explained',
    excerpt: 'Learn how the points-based system works for Australian skilled migration and tips to maximize your score.',
    category: 'Australia Immigration',
    date: 'Jan 5, 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=600',
  },
  {
    id: 4,
    title: 'UK Graduate Route: Work After Studies',
    excerpt: 'Everything about the UK Graduate Route visa that allows international students to stay and work for 2-3 years after graduation.',
    category: 'UK Immigration',
    date: 'Dec 28, 2023',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600',
  },
  {
    id: 5,
    title: 'How to Write a Winning Statement of Purpose',
    excerpt: 'Expert tips on crafting an SOP that stands out and improves your chances of university admission.',
    category: 'Tips & Guides',
    date: 'Dec 20, 2023',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600',
  },
  {
    id: 6,
    title: 'New Zealand Skilled Migrant Category Updates',
    excerpt: 'Latest changes to New Zealand immigration policies and what they mean for potential migrants.',
    category: 'New Zealand Immigration',
    date: 'Dec 15, 2023',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=600',
  },
];

const Blogs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHeader 
        title="Immigration Blog"
        subtitle="Stay updated with the latest immigration news, tips, and guides."
        breadcrumb="Resources"
      />
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article key={blog.id} className="card-professional overflow-hidden hover-lift group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-medium rounded-full mb-3">
                    {blog.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-navy mb-2 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-custom text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get the latest immigration updates, tips, and guides delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <Button variant="gold">Subscribe</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blogs;
