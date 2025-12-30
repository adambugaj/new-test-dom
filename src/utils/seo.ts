export interface SEOProps {
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article';
  publishDate?: string;
}

export const formatTitle = (title: string) => {
  return `${title} | Dom Jakości`;
};

export const generateSchema = (
  type: 'website' | 'article' | 'WebPage',
  props: SEOProps,
  url: URL
) => {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": type === 'article' ? 'Article' : 'WebPage',
    "name": props.title,
    "description": props.description,
    "url": url.toString(),
    "publisher": {
      "@type": "Organization",
      "name": "Dom Jakości",
      "logo": {
        "@type": "ImageObject",
        "url": "https://domjakosci.pl/favicon.svg"
      }
    }
  };

  if (type === 'article' && props.publishDate) {
    return JSON.stringify({
      ...baseSchema,
      "datePublished": props.publishDate,
      "headline": props.title,
      "image": props.image || "https://domjakosci.pl/default-og.jpg",
      "author": {
        "@type": "Person",
        "name": "Redakcja Dom Jakości"
      }
    });
  }

  return JSON.stringify(baseSchema);
};

export const generateBreadcrumbSchema = (crumbs: { name: string; url: string }[]) => {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `https://domjakosci.pl${crumb.url}`
    }))
  });
};