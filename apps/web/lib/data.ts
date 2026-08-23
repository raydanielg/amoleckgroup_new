export const siteConfig = {
  name: "Amoleck Group",
  shortName: "Amoleck",
  tagline: "We Take Care of Your Health through Physiotherapy services and up to date Medical Equipment supply.",
  description:
    "Supply, installation and servicing of medical, physiotherapy and diagnostic equipment for hospitals and clinics across Tanzania.",
  location: "Dar es Salaam, Tanzania",
  phone: "+255 626 371 854",
  email: "info@afyavifaa.co.tz",
  website: "afyavifaa.co.tz",
  whatsapp: "+255626371854",
  hours: "Monday - Friday: 8:00 AM - 5:00 PM | Saturday: 9:00 AM - 1:00 PM",
  social: {
    facebook: "https://facebook.com/amoleck",
    instagram: "https://instagram.com/amoleck",
    linkedin: "https://linkedin.com/company/amoleck",
    twitter: "https://twitter.com/amoleck",
  },
}

export const tickerItems = [
  "Certified biomedical technicians",
  "Nationwide delivery",
  "Installation & training included",
  "Genuine manufacturer warranty",
  "24/7 emergency support",
  "Service contracts available",
]

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Medical Equipment", href: "/equipment" },
  { label: "Physiotherapy", href: "/physiotherapy" },
  { label: "Technology", href: "/technology" },
  { label: "Contact", href: "/contact" },
]

export const services = [
  {
    title: "Medical Equipment",
    slug: "medical",
    icon: "stethoscope",
    description:
      "Diagnostic, surgical, ward and laboratory equipment — sourced from manufacturers we actually represent, not grey-market imports.",
    items: [
      "Site assessment",
      "Specification",
      "Procurement",
      "Delivery",
      "Installation & commissioning",
      "Staff training",
      "Warranty registration",
      "Scheduled maintenance",
    ],
    image:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80",
    cta: { label: "Learn More", href: "/services/medical" },
  },
  {
    title: "Physiotherapy Solutions",
    slug: "physiotherapy",
    icon: "heart",
    description:
      "Complete rehabilitation setups: therapy tables, electrotherapy, exercise and mobility equipment, plus practitioner training.",
    items: [
      "Treatment couches",
      "Electrotherapy (TENS, ultrasound, shortwave)",
      "Exercise & gym equipment",
      "Gait and mobility aids",
      "Assessment tools",
      "Consumables supply",
    ],
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    cta: { label: "Learn More", href: "/services/physiotherapy" },
  },
  {
    title: "Healthcare Technology",
    slug: "technology",
    icon: "code",
    description:
      "Clinical systems and diagnostic integration, configured to work with the equipment you already own.",
    items: [
      "Equipment integration",
      "Diagnostic data handling",
      "Systems configuration",
      "Staff onboarding",
      "Ongoing technical support",
    ],
    image:
      "https://images.unsplash.com/photo-1451187580459-9546f8936333?w=800&q=80",
    cta: { label: "Learn More", href: "/services/technology" },
  },
  {
    title: "Service & Maintenance",
    slug: "equipment",
    icon: "device",
    description:
      "Preventive maintenance schedules, calibration, spare parts and emergency callout under a single contract.",
    items: [
      "Preventive maintenance",
      "Calibration",
      "Spare parts",
      "Emergency callout",
      "Service contracts",
    ],
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe611db5902?w=800&q=80",
    cta: { label: "Learn More", href: "/services/equipment" },
  },
]

export const equipmentCategories = [
  {
    name: "Physiotherapy Equipment",
    slug: "physiotherapy-equipment",
    description:
      "Professional-grade physiotherapy and rehabilitation equipment for clinics and home use.",
    image:
      "https://images.unsplash.com/photo-1576091160399-5ba00a0a595c?w=800&q=80",
    products: [
      {
        name: "Electrotherapy Unit",
        description: "Multi-channel electrotherapy device for pain relief and muscle stimulation.",
        specs: ["4 channels", "Battery operated", "Portable design"],
      },
      {
        name: "Ultrasound Therapy Machine",
        description: "Therapeutic ultrasound for deep tissue healing and pain management.",
        specs: ["1 MHz / 3 MHz", "Digital display", "Multiple heads"],
      },
      {
        name: "Traction Table",
        description: "Motorized traction table for spinal decompression therapy.",
        specs: ["Motorized", "Adjustable force", "Digital controls"],
      },
    ],
  },
  {
    name: "Diagnostic Equipment",
    slug: "diagnostic-equipment",
    description:
      "Accurate and reliable diagnostic tools for healthcare professionals.",
    image:
      "https://images.unsplash.com/photo-1579154202943-47947c3a9ed7?w=800&q=80",
    products: [
      {
        name: "Digital Patient Monitor",
        description: "Multi-parameter patient monitor for vital signs tracking.",
        specs: ["ECG, SpO2, NIBP", "Touchscreen", "Data export"],
      },
      {
        name: "Digital Thermometer",
        description: "Precision infrared thermometer for non-contact temperature measurement.",
        specs: ["Non-contact", "1-second reading", "Memory storage"],
      },
      {
        name: "Stethoscope - Cardiology",
        description: "Premium cardiology stethoscope with superior acoustic performance.",
        specs: ["Dual-head", "Acoustic clarity", "Latex-free"],
      },
    ],
  },
  {
    name: "Rehabilitation Equipment",
    slug: "rehabilitation-equipment",
    description:
      "Equipment designed to support recovery and rehabilitation programs.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    products: [
      {
        name: "Adjustable Rehabilitation Bed",
        description: "Electric adjustable bed for patient comfort and therapy sessions.",
        specs: ["Electric adjustment", "Side rails", "Weight capacity 250kg"],
      },
      {
        name: "Exercise Bike - Rehab",
        description: "Low-impact recumbent bike for cardiovascular rehabilitation.",
        specs: ["Recumbent design", "Adjustable resistance", "Digital display"],
      },
      {
        name: "Parallel Bars",
        description: "Adjustable height parallel bars for gait training and rehabilitation.",
        specs: ["Height adjustable", "Foldable", "Non-slip surface"],
      },
    ],
  },
  {
    name: "Medical Devices",
    slug: "medical-devices",
    description:
      "Modern medical devices for clinical and home healthcare settings.",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80",
    products: [
      {
        name: "Pulse Oximeter",
        description: "Fingertip pulse oximeter for SpO2 and pulse rate monitoring.",
        specs: ["Fingertip", "OLED display", "6-hour battery"],
      },
      {
        name: "Nebulizer Compressor",
        description: "Compact nebulizer for respiratory therapy and medication delivery.",
        specs: ["Compressor type", "Quiet operation", "Portable"],
      },
      {
        name: "Blood Pressure Monitor",
        description: "Digital blood pressure monitor with irregular heartbeat detection.",
        specs: ["Upper arm", "Memory 90 readings", "WHO classification"],
      },
    ],
  },
  {
    name: "Wellness Equipment",
    slug: "wellness-equipment",
    description:
      "Wellness and preventive health equipment for clinics and wellness centers.",
    image:
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80",
    products: [
      {
        name: "Massage Chair",
        description: "Full-body therapeutic massage chair with multiple programs.",
        specs: ["Zero gravity", "Heated massage", "12 programs"],
      },
      {
        name: "Infrared Sauna",
        description: "Compact infrared sauna for detoxification and relaxation.",
        specs: ["Far infrared", "2-person capacity", "Low energy"],
      },
      {
        name: "TENS Unit",
        description: "Transcutaneous electrical nerve stimulation for pain relief.",
        specs: ["Dual channel", "12 modes", "Rechargeable"],
      },
    ],
  },
]

export const physiotherapyServices = [
  "Treatment & assessment",
  "Electrotherapy",
  "Exercise & rehabilitation",
  "Mobility & support",
  "Consumables",
]

export const howItWorksService = [
  { step: "01", title: "Tell us the need", description: "A phone call or the quote form. Describe the department, the budget range, and the timeline." },
  { step: "02", title: "We specify", description: "Our team recommends equipment that fits the room, the power supply and the staff you have — not just the biggest model." },
  { step: "03", title: "Written quote", description: "Full specification, landed price, lead time and warranty terms." },
  { step: "04", title: "Delivery & installation", description: "We deliver, install, commission and train your staff on site." },
  { step: "05", title: "We stay", description: "Preventive maintenance, calibration and callout under a service contract." },
]

export const howItWorksEquipment = [
  { step: "01", title: "Browse Equipment", description: "Explore our catalog of medical and physiotherapy equipment." },
  { step: "02", title: "Request Quote", description: "Submit a quote request for the equipment you need." },
  { step: "03", title: "Our Team Reviews", description: "Our specialists review your request and prepare a quotation." },
  { step: "04", title: "Quotation", description: "Receive a detailed quotation with pricing and specifications." },
  { step: "05", title: "Order", description: "Confirm your order and we process it promptly." },
  { step: "06", title: "Delivery / Installation", description: "We deliver and install your equipment at your location." },
  { step: "07", title: "After-Sales Support", description: "Ongoing maintenance, training, and technical support." },
]

export const whyChooseUs = [
  {
    title: "We install what we sell",
    description: "Commissioning, calibration and staff training are part of the price, not a line item added later.",
    icon: "shield",
  },
  {
    title: "Parts on the shelf",
    description: "We hold stock for the equipment we supply, so a fault means days of downtime, not months.",
    icon: "device",
  },
  {
    title: "Technicians, not resellers",
    description: "Our engineers are biomedical-trained and travel to site anywhere in Tanzania.",
    icon: "users",
  },
  {
    title: "Written quotes",
    description: "Specification, price, lead time and warranty terms in one document — no verbal estimates.",
    icon: "support",
  },
]

export const technologyCards = [
  { title: "Equipment Integration", description: "Connect diagnostic and clinical equipment so data flows between systems without manual entry." },
  { title: "Diagnostic Data Handling", description: "Secure handling, storage and routing of diagnostic data across your facility." },
  { title: "Systems Configuration", description: "We configure around your existing estate rather than asking you to replace it." },
  { title: "Staff Onboarding", description: "Practical training so your team can use the systems from day one." },
  { title: "Technical Support", description: "Local support for technology we supply — and technology we didn't." },
  { title: "Clinical Systems", description: "Modern clinical systems, integrated properly and supported locally." },
]

export const quoteOptions = [
  "Medical Equipment",
  "Physiotherapy Solutions",
  "Healthcare Technology",
  "Service & Maintenance",
  "Other",
]

export const statsNumbers = [
  { value: "10+", label: "Years serving Tanzania" },
  { value: "500+", label: "Installations completed" },
  { value: "6", label: "Regions covered" },
  { value: "24/7", label: "Emergency support" },
]

export const teamMembers = [
  {
    name: "Amos Paschal",
    role: "Chief Executive Officer",
    title: "CEO & Director",
    image: "/team/Amos Paschal CEO director .jpeg",
    bio: "Leads Amoleck Group with a vision for reliable medical equipment supply and after-sales support across East Africa. Over a decade of experience in healthcare procurement and facility fit-out.",
    linkedin: "#",
    email: "amos@afyavifaa.co.tz",
  },
  {
    name: "Ezra Daniel",
    role: "Chief Technology Officer",
    title: "CTO & Director",
    image: "/team/Ezra Daniel CTO director.jpeg",
    bio: "Oversees healthcare technology integration, clinical systems and diagnostic data infrastructure. Ensures every piece of equipment talks to the systems around it.",
    linkedin: "#",
    email: "ezra@afyavifaa.co.tz",
  },
  {
    name: "Newton Nyema",
    role: "Chief Information Officer",
    title: "CIO & Director",
    image: "/team/newton nyema CIO director.jpeg",
    bio: "Drives information strategy and digital transformation across the organisation. Manages data security, systems architecture and technology partnerships.",
    linkedin: "#",
    email: "newton@afyavifaa.co.tz",
  },
  {
    name: "Salome Thadeus",
    role: "Sales Manager",
    title: "Head of Sales",
    image: "/team/Salome thadeus sales maager.jpeg",
    bio: "Leads client relationships across hospitals, clinics and physiotherapy practices. Ensures every quote is specified correctly and delivered on time.",
    linkedin: "#",
    email: "salome@afyavifaa.co.tz",
  },
]

export const facilityTypes = [
  "Hospital",
  "Clinic",
  "Physiotherapy practice",
  "Laboratory",
  "Other",
]
