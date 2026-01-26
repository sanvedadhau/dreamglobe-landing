import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    id: 1,
    title: 'Complete Guide to Canada Express Entry 2024',
    excerpt:
      'Everything you need to know about the Express Entry system, CRS score optimization, and recent policy changes.',
    author: 'Immigration Team',
    date: 'Jan 15, 2024',
    readTime: '8 min read',
    category: 'Canada PR',
  },
  {
    id: 2,
    title: 'Tuition-Free Education in Germany: A Comprehensive Overview',
    excerpt:
      'Discover how you can pursue world-class education at German public universities without paying tuition fees.',
    author: 'Study Abroad Desk',
    date: 'Jan 10, 2024',
    readTime: '6 min read',
    category: 'Study Abroad',
  },
  {
    id: 3,
    title: 'Top 5 Mistakes to Avoid in Your Visa Application',
    excerpt:
      'Learn from common errors that lead to visa rejections and how to ensure a smooth application process.',
    author: 'Visa Experts',
    date: 'Jan 5, 2024',
    readTime: '5 min read',
    category: 'Visa Tips',
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="section-padding bg-cream">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-gold font-semibold tracking-wider uppercase text-sm">
              Latest Updates
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mt-3">
              Immigration Insights & News
            </h2>
          </div>
          <Button variant="navy">
            View All Articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="card-professional overflow-hidden hover-lift group cursor-pointer"
            >
              {/* Category Badge */}
              <div className="p-6 pb-0">
                <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-semibold rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-border pt-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
