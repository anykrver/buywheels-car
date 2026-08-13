import { useEffect } from 'react';

interface PageSEOProps {
  title: string;
  description: string;
  ogImage?: string;
  ogType?: string;
  canonicalPath?: string;
  jsonLd?: Record<string, any>;
  robots?: string;
}

const DEFAULT_OG_IMAGE = 'https://buywheels.in/og-image.jpg';
const SITE_NAME = 'BuyWheels';
const BASE_URL = 'https://buywheels.in';

export default function PageSEO({
  title,
  description,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  canonicalPath,
  jsonLd,
  robots = 'index, follow',
}: PageSEOProps) {
  useEffect(() => {
    // Title
    document.title = title;

    const setMeta = (selector: string, content: string, attr: 'name' | 'property' = 'name') => {
      let el = document.querySelector(`meta[${attr}="${selector}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, selector);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Standard meta
    setMeta('description', description);
    setMeta('robots', robots);

    // Open Graph
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:image', ogImage, 'property');
    setMeta('og:type', ogType, 'property');
    setMeta('og:site_name', SITE_NAME, 'property');

    // Twitter Card
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage);

    // Canonical
    if (canonicalPath) {
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', `${BASE_URL}${canonicalPath}`);
    }

    // JSON-LD structured data
    if (jsonLd) {
      const existingScript = document.querySelector('script[data-page-jsonld]');
      if (existingScript) existingScript.remove();
      const script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.setAttribute('data-page-jsonld', 'true');
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup JSON-LD on unmount
      const script = document.querySelector('script[data-page-jsonld]');
      if (script) script.remove();
    };
  }, [title, description, ogImage, ogType, canonicalPath, jsonLd, robots]);

  return null;
}
