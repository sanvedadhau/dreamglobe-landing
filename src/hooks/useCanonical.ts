import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://www.dreamglobe.co.in';

export const useCanonical = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const url = `${BASE_URL}${pathname === '/' ? '' : pathname}`;
    
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);

    return () => {
      link?.remove();
    };
  }, [pathname]);
};
