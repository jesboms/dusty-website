// schema.org structured data. It tells Google and AI assistants the plain facts
// about Dusty (who runs it, how to reach us, what the app is) in a form they
// don't have to guess from the page layout. Built from site.ts, so a contact
// detail or store link changed there is changed here too.

import { company, contact, links } from './site';
import type { Faq } from './faq';

const site = 'https://getdusty.co.uk';

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${site}/#organization`,
  name: company.tradingName,
  legalName: company.legalName,
  url: site,
  logo: `${site}/logo.png`,
  description:
    'Dusty is a UK app for booking vetted, self-employed home cleaners. Cleaners set their own price, every cleaner has their ID and right to work checked, and you see your match with price and reviews before you book.',
  email: contact.email,
  telephone: contact.phoneHref.replace('tel:', ''),
  identifier: {
    '@type': 'PropertyValue',
    propertyID: 'Companies House company number',
    value: company.number,
  },
  address: { '@type': 'PostalAddress', streetAddress: company.registeredOffice, addressCountry: 'GB' },
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
  sameAs: [links.instagram],
};

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${site}/#website`,
  name: 'Dusty',
  url: site,
  inLanguage: 'en-GB',
  publisher: { '@id': `${site}/#organization` },
};

/**
 * The app itself. Only emitted once a store link is filled in in site.ts:
 * describing an app nobody can download yet would be a claim we can't back.
 */
export const appJsonLd = links.appStore || links.googlePlay
  ? {
      '@context': 'https://schema.org',
      '@type': 'MobileApplication',
      name: 'Dusty',
      operatingSystem: [links.appStore && 'iOS', links.googlePlay && 'Android'].filter(Boolean).join(', '),
      applicationCategory: 'LifestyleApplication',
      description:
        'Book vetted, local home cleaners in the UK. Describe the clean you need, see your matched cleaner with their price and reviews, and pay only once the clean is done.',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
      downloadUrl: [links.appStore, links.googlePlay].filter(Boolean),
      publisher: { '@id': `${site}/#organization` },
    }
  : null;

/** FAQPage from the same question list the /faq page renders, so the two can't drift. */
export function faqPageJsonLd(groups: { faqs: Faq[] }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: groups.flatMap((g) =>
      g.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/<[^>]+>/g, '') },
      })),
    ),
  };
}
