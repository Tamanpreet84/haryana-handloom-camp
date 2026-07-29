import React, { useEffect } from 'react';
import { STORE_DETAILS } from '../data/products';

export default function MetaSEO({ title, description, keywords, schemaType = 'LocalBusiness', schemaData = null }) {
  const pageTitle = title
    ? `${title} | Haryana Handloom Camp Nandyal`
    : 'HARYANA HANDLOOM CAMP | Premium Home Furnishing Collection Nandyal';

  const pageDesc = description ||
    'Haryana Handloom Camp - Nandyal flagship home furnishing store on NK Road. Explore high-thread-count bedsheets, blackout curtains, velvet cushion covers, mink blankets, polar fleeces & ergonomic pillows.';

  useEffect(() => {
    document.title = pageTitle;

    // Update meta tags
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', pageDesc);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', pageTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', pageDesc);

    // Insert JSON-LD Schema
    const schemaId = 'jsonld-schema-script';
    let schemaScript = document.getElementById(schemaId);
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = schemaId;
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }

    const defaultSchema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: STORE_DETAILS.name,
      description: STORE_DETAILS.subtitle,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'NK Road, Near Sai Baba Mandir',
        addressLocality: 'Nandyal',
        addressRegion: 'Andhra Pradesh',
        postalCode: '518501',
        addressCountry: 'IN'
      },
      telephone: '+919215211025',
      url: 'https://haryana-handloom-camp.vercel.app',
      openingHours: 'Mo-Su 09:30-21:30'
    };

    schemaScript.text = JSON.stringify(schemaData || defaultSchema);
  }, [pageTitle, pageDesc, schemaData]);

  return null;
}
