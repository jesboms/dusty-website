// A company detail in site.ts that hasn't been filled in yet still reads
// "[FILL IN: …]". The legal pages leave those out rather than publish the
// placeholder, so the site can go live before every number arrives.
export const filled = (value: string) => (value && !value.startsWith('[FILL IN') ? value : null);
