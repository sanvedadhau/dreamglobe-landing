import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://www.dreamglobe.co.in';

interface SEOOptions {
  title: string;
  description: string;
}

export const useCanonical = (seo?: SEOOptions) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const url = `${BASE_URL}${pathname === '/' ? '' : pathname}`;

    // Canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);

    // Title
    if (seo?.title) {
      document.title = seo.title;
    }

    // Meta description
    if (seo?.description) {
      let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', seo.description);
    }

    return () => {
      link?.remove();
    };
  }, [pathname, seo?.title, seo?.description]);
};
