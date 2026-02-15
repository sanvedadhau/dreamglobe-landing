import { Link } from 'react-router-dom';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

const PageHeader = ({ title, subtitle, breadcrumb }: PageHeaderProps) => {
  return (
    <div className="bg-navy pt-28 pb-16 md:pt-32 md:pb-20">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <Link 
          to="/" 
          className="inline-flex items-center px-4 py-1.5 rounded-full bg-gold/10 text-gold hover:bg-gold/20 transition-colors mb-6 text-sm font-medium"
        >
          Back to Home
        </Link>
        {breadcrumb && (
          <p className="text-gold/80 text-sm font-medium tracking-wider uppercase mb-2">
            {breadcrumb}
          </p>
        )}
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-primary-foreground/70 text-lg max-w-2xl">
            {subtitle}
          </p>
        )}
        <div className="divider-gold mt-6" />
      </div>
    </div>
  );
};

export default PageHeader;
