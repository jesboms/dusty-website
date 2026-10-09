// Everything a non-developer might need to change lives here: links, contact
// details and the numbers on the page.

export const links = {
  // "Join our waitlist" — customers. The old site used three forms.gle short
  // links that all resolve to this same form.
  customerWaitlist: 'https://forms.gle/cXaYWy3ESftjnK6w5',
  // "Join Our Local Cleaner Network" — cleaners.
  cleanerSignup: 'https://forms.gle/8HSmKuxoL45e2VLd7',
  whatsapp: 'https://wa.me/447598833724',
  instagram: 'https://instagram.com/getdustyapp',
  // Fill these in when the app is live in the stores; the badges switch from
  // "coming soon" to real download links automatically.
  appStore: '',
  googlePlay: '',
};

export const contact = {
  email: 'info@getdusty.co.uk',
  phoneDisplay: '+44 7598 833724',
  phoneHref: 'tel:+447598833724',
  instagramHandle: '@getdustyapp',
};

// Carried over from the old site. Keep them true — update or remove as they
// change.
export const stats = [
  { value: '80+', label: 'Cleans completed' },
  { value: '20+', label: 'Cleaners on Dusty' },
  { value: '30+', label: 'Hosts served' },
  { value: '500+', label: 'On the waitlist' },
];
