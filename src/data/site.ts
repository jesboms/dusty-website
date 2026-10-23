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

// The on-page early access form posts straight into the customerWaitlist
// Google Form above, so responses land in the same sheet. If a question is
// added, removed or recreated in the form, its entry ID here must be updated
// (find them in the form's "Get pre-filled link").
export const waitlistForm = {
  action: 'https://docs.google.com/forms/d/e/1FAIpQLSdrrnkq1rquVBQoL3hnnYaD9opUbVixoztI3ETjmDIr2t6YiA/formResponse',
  email: 'emailAddress',
  name: 'entry.1787431862',
  location: 'entry.2141923680',
};

// Suggestions for the location field; people can still type any town.
export const locations = [
  'London', 'Birmingham', 'Manchester', 'Leeds', 'Liverpool', 'Bristol',
  'Sheffield', 'Nottingham', 'Leicester', 'Coventry', 'Newcastle', 'Glasgow',
  'Edinburgh', 'Cardiff', 'Belfast',
];

export const contact = {
  email: 'info@getdusty.co.uk',
  phoneDisplay: '+44 7598 833724',
  phoneHref: 'tel:+447598833724',
  instagramHandle: '@getdustyapp',
};

// Keep these true — update or remove them as they
// change.
export const stats = [
  { value: '£10K+', label: 'Revenue' },
  { value: '80+', label: 'Cleans Completed' },
  { value: '30+ Hosts', label: 'UK Wide Coverage' },
  { value: '20+', label: 'Dusters' },
];

export const heroImages = [
  { src: '/images/hero-4108715.jpg', alt: 'Professional cleaner at work in a modern home' },
  { src: '/images/hero-4239091.jpg', alt: 'Spotless living room with natural light' },
  { src: '/images/hero-4107120.jpg', alt: 'Cleaner organizing a beautiful kitchen' },
];

// Real customer feedback only. The section stays hidden until this has at
// least one entry. Get the customer's OK before quoting them; first name and
// surname initial is enough.
export const testimonials: { quote: string; name: string; rating?: number }[] = [
  // { quote: '…', name: 'Sarah M.', rating: 5 },
];
