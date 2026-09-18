import React, { useEffect } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  schema?: Record<string, unknown>;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonicalPath = '',
  schema,
}) => {
  const fullTitle = `${title} | Royal Surgical Aurangabad`;
  const defaultKeywords =
    'Royal Surgical, Pharmacy Aurangabad Bihar, Medical Store Old GT Road, Surgical Goods, Genuine Medicines, Prescription Home Delivery, Health Devices, BP Monitor, Gupta Mini Theater Aurangabad';

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    // Update keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords || defaultKeywords);
    }

    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', fullTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // Update or insert canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', `${window.location.origin}${canonicalPath}`);

    // Insert or update JSON-LD Schema
    const defaultSchema = {
      '@context': 'https://schema.org',
      '@type': 'Pharmacy',
      name: SITE_CONFIG.businessName,
      image: `${window.location.origin}/icons/icon-512.png`,
      '@id': `${window.location.origin}/#store`,
      url: window.location.origin,
      telephone: `+91${SITE_CONFIG.phone}`,
      priceRange: '₹',
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE_CONFIG.address.street,
        addressLocality: SITE_CONFIG.address.city,
        addressRegion: SITE_CONFIG.address.state,
        postalCode: SITE_CONFIG.address.pincode,
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 24.7554,
        longitude: 84.3644,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '08:00',
          closes: '22:30',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Sunday',
          opens: '08:30',
          closes: '22:00',
        },
      ],
      paymentAccepted: 'Cash, UPI, Credit Card, Debit Card',
      currenciesAccepted: 'INR',
    };

    const finalSchema = schema || defaultSchema;

    let scriptTag = document.getElementById('json-ld-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'json-ld-schema';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(finalSchema);
  }, [fullTitle, description, keywords, canonicalPath, schema]);

  return null;
};
