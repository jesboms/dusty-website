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
  { value: '£10K+', label: 'Revenue' },
  { value: '80+', label: 'Cleans completed' },
  { value: '30+', label: 'Hosts served' },
  { value: '20+', label: 'Cleaners on Dusty' },
];

// Real customer feedback only. The section stays hidden until this has at
// least one entry. Get the customer's OK before quoting them; first name and
// surname initial is enough.
export const testimonials: { quote: string; name: string; detail?: string }[] = [
  // { quote: '…', name: 'Sarah M.', detail: 'Weekly clean, Croydon' },
];
