/* ============================================================================
   SITE CONFIG — the only file you need to edit.

   Every piece of text, link, phone number and address used by the new footer
   lives here. Change it once and it updates everywhere.

   ⚠️  The five fields marked TODO are placeholders. Replace them with your real
       details before you ship.
   ========================================================================== */

export const site = {
  name: "Amoleck Group",
  /** Shown under the logo in the footer. One or two sentences, no more. */
  tagline:
    "We Take Care of Your Health through Physiotherapy services and up to date Medical Equipment supply.",
  /** Used in the copyright line and in structured data. */
  legalName: "Amoleck Group Limited",
  foundedYear: 2015, // TODO: your actual founding year

  contact: {
    phone: "+255 626 371 854",
    phoneHref: "tel:+255626371854",
    whatsapp: "https://wa.me/255626371854",
    email: "info@amoleck.co.tz",
    address: {
      line1: "Dar es Salaam", // TODO
      line2: "Tanzania",
      country: "Tanzania",
      mapsUrl: "https://maps.google.com/?q=Dar+es+Salaam+Tanzania", // TODO
    },
    hours: [
      { days: "Mon – Fri", time: "8:00 AM – 6:00 PM" },
      { days: "Saturday", time: "9:00 AM – 1:00 PM" },
      { days: "Emergency support", time: "24 / 7" },
    ],
  },

  social: [
    { name: "Facebook", href: "https://facebook.com/", icon: "facebook" },
    { name: "Instagram", href: "https://instagram.com/", icon: "instagram" },
    { name: "LinkedIn", href: "https://linkedin.com/", icon: "linkedin" },
    { name: "X", href: "https://x.com/", icon: "x" },
    { name: "WhatsApp", href: "https://wa.me/255626371854", icon: "whatsapp" },
  ] as const,

  /* --- Main navigation, used by the navbar. ------------------------------- */

  mainNav: [
    { label: "Home", href: "/" },
    {
      label: "Services",
      href: "/services",
      children: [
        {
          label: "Medical Services",
          href: "/services/medical",
          blurb: "Procurement, installation and maintenance for wards and theatres.",
        },
        {
          label: "Equipment Supply",
          href: "/services/equipment",
          blurb: "One device or a full department fit-out, warranty included.",
        },
        {
          label: "Physiotherapy",
          href: "/services/physiotherapy",
          blurb: "Complete rehabilitation setups plus practitioner training.",
        },
        {
          label: "Healthcare Technology",
          href: "/services/technology",
          blurb: "Clinical systems integrated with the estate you already own.",
        },
      ],
    },
    { label: "Equipment", href: "/equipment" },
    { label: "Physiotherapy", href: "/physiotherapy" },
    { label: "Technology", href: "/technology" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],

  /* --- Footer navigation. These match the routes that already exist. ------ */

  nav: {
    services: [
      { label: "Medical Services", href: "/services/medical" },
      { label: "Equipment Supply", href: "/services/equipment" },
      { label: "Physiotherapy", href: "/services/physiotherapy" },
      { label: "Healthcare Technology", href: "/services/technology" },
      { label: "All Services", href: "/services" },
    ],
    explore: [
      { label: "Equipment Catalogue", href: "/equipment" },
      { label: "Physiotherapy", href: "/physiotherapy" },
      { label: "Technology", href: "/technology" },
      { label: "Insights & Blog", href: "/blog" },
      { label: "About Us", href: "/about" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },

  /* --- The strip that scrolls above the footer columns. ------------------- */

  ticker: [
    "Certified biomedical technicians",
    "Nationwide delivery",
    "Installation & training included",
    "Genuine manufacturer warranty",
    "24/7 emergency support",
    "Service contracts available",
  ],

  /* --- Trust signals. Swap in whatever is true for you. ------------------- */

  credentials: [
    "ISO 13485 aligned",
    "KEBS compliant",
    "Authorised distributor",
    "PPB registered",
  ],
} as const;

export type SiteConfig = typeof site;
