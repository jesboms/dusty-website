// The public FAQ (/faq): questions people ask before choosing Dusty. Written
// in the words buyers use in Google and AI assistants, and answered so each
// answer makes sense on its own when quoted.
//
// /support is for people already using the app. Answers here must stay true
// to how the app works (dusty repo, checked 2026-11-24). Change them here and
// the page and its FAQPage structured data both update.
//
// `a` may contain simple HTML links; they're stripped for the structured data.

import { links } from './site';

export interface Faq {
  q: string;
  a: string;
}

const appLive = Boolean(links.appStore || links.googlePlay);

export const faqGroups: { id: string; title: string; faqs: Faq[] }[] = [
  {
    id: 'about',
    title: 'About Dusty',
    faqs: [
      {
        q: 'What is Dusty?',
        a: "Dusty is a UK app for booking home cleaners. You tell it what you need (the type of clean, your home, the day and time) and it matches you with a vetted, self-employed local cleaner. You see the cleaner's price, profile and reviews before you book, and you only pay once the clean is done.",
      },
      {
        q: "How does Dusty's AI matching work?",
        a: 'Choose your clean from a few options, or describe it in your own words to Ask Dusty. Dusty looks at cleaners who offer that service, cover your area, are free at that time and fit what you need, such as bringing their own products and equipment. It suggests the best fit and explains why. Nothing is booked until you confirm and the cleaner accepts.',
      },
      {
        q: 'What kinds of cleaning can I book?',
        a: 'Regular cleans (one-off, or repeating weekly, fortnightly or monthly), deep cleans, end of tenancy cleans, move-in cleans, turnover cleans between guests for Airbnb and other short lets, and office cleans. Each cleaner chooses which of these they offer.',
      },
      {
        q: 'Is Dusty a cleaning agency?',
        a: "No. Dusty is a marketplace. Cleaners are independent and self-employed: they set their own prices, hours and area, and choose which jobs to accept. Dusty checks every cleaner before their first booking, takes payment securely, keeps your phone number private and is there to help if something goes wrong, which you don't get when you find a cleaner on your own.",
      },
    ],
  },
  {
    id: 'price',
    title: 'Price and payment',
    faqs: [
      {
        q: 'How much does a cleaner cost on Dusty?',
        a: "Each cleaner sets their own hourly rate, and can charge more for some services, such as deep or end of tenancy cleans. You see the price for your clean before you book, and it's locked in once you request it, so it can't change afterwards. The price you see is the price you pay: Dusty's fee comes out of the cleaner's share, not on top.",
      },
      {
        q: 'When do I pay?',
        a: "When you book, Dusty puts a hold on your card for the price shown. You're only charged once the cleaner marks the clean as done. If the booking doesn't go ahead, the hold is released.",
      },
      {
        q: 'Can I cancel, and is there a fee?',
        a: 'Cancelling is free until 48 hours before the clean (24 hours for a repeat clean). After that the fee is 50% of the price, because the cleaner kept that time free for you. If the cleaner cancels, you\'re never charged. See our <a href="/terms#customers">terms</a> for the details.',
      },
      {
        q: 'Do I need to provide cleaning products and equipment?',
        a: "You choose when you book: the cleaner brings products and equipment, or you provide them and tell us what you have. If you need the cleaner to bring everything, Dusty only matches you with cleaners who do. Your answer is saved for next time.",
      },
    ],
  },
  {
    id: 'trust',
    title: 'Trust and safety',
    faqs: [
      {
        q: 'How are Dusty cleaners vetted?',
        a: 'Every cleaner uploads photo ID, proof of their right to work in the UK and proof of address. Our team checks them by hand before the cleaner can take a booking.',
      },
      {
        q: 'Are Dusty cleaners insured?',
        a: "Insurance is optional for cleaners, and we strongly recommend public liability cover. Cleaners who upload their certificate get an Insured badge showing their level of cover, once our team has checked it and only while it's in date. You can see who's insured before you book.",
      },
      {
        q: 'Can I see reviews before I book?',
        a: "Yes. Every cleaner's profile shows their rating and reviews. Only customers who have completed a booking with that cleaner can leave a review.",
      },
      {
        q: 'Will the cleaner have my phone number?',
        a: "No. You message your cleaner in the app, and calls go through Dusty's number, so neither of you sees the other's phone number.",
      },
      {
        q: 'What if something goes wrong with my clean?',
        a: 'Tell us within 48 hours, with photos if you can, and we\'ll look into it with you and the cleaner. You can also report or block anyone from their profile or your messages, and our team reviews every report. See <a href="/support">help and support</a>.',
      },
    ],
  },
  {
    id: 'where',
    title: 'Where Dusty works',
    faqs: [
      {
        q: 'Where is Dusty available?',
        a: 'Dusty is starting in Birmingham, Coventry and the West Midlands. If there isn\'t a cleaner near you yet, <a href="/#early-access">join the waitlist</a> and we\'ll tell you when we arrive.',
      },
      {
        q: 'Is there a Dusty app?',
        a: appLive
          ? 'Yes. Dusty is an app for iPhone and Android. Download it free from the App Store or Google Play.'
          : `Dusty is an app for iPhone and Android, coming soon to the App Store and Google Play. <a href="/#early-access">Join the waitlist</a> to hear when it's out. Until then, you can <a href="${links.whatsapp}">book a clean on WhatsApp</a>.`,
      },
      {
        q: 'Can Dusty clean my Airbnb or short let between guests?',
        a: 'Yes. Book a turnover clean for each changeover. You choose whether the cleaner brings products and equipment, and you can message them in the app with access details and anything specific to your property.',
      },
    ],
  },
  {
    id: 'cleaners',
    title: 'For cleaners',
    faqs: [
      {
        q: 'How do I find cleaning work with Dusty?',
        a: appLive
          ? 'Download Dusty, choose "Clean for Dusty", set your rate, services, area and hours, and upload your documents. We usually check them within 2 working days, and then customers near you can book you.'
          : `Dusty's app is launching soon. <a href="${links.cleanerSignup}">Join our cleaner network</a> now and we'll help you set up your profile (your rate, services, area and hours) and check your documents, usually within 2 working days.`,
      },
      {
        q: 'How much does Dusty take from cleaners?',
        a: "Dusty takes a 20% commission on each completed clean, and you keep 80%. There's no fee to join and no fee for leads. You're paid to your bank through Stripe after each clean you complete.",
      },
      {
        q: 'Can I choose my own jobs and prices?',
        a: "Yes. You're self-employed: you set your own hourly rate (and a different rate per service if you like), your hours and your area, and you choose which requests to accept. You can work for other clients and platforms too.",
      },
    ],
  },
];
