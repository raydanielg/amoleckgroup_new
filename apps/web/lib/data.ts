export const siteConfig = {
  name: "Amoleck Group Company Ltd",
  shortName: "Amoleck",
  tagline: "Advancing Healthcare Through Innovation, Technology & Professional Care",
  description:
    "Amoleck Group Company Ltd delivers innovative healthcare solutions, physiotherapy services, medical equipment, and technology solutions designed to improve lives and transform healthcare delivery.",
  location: "Dar es Salaam, Tanzania",
  phone: "+255 742 710 054",
  email: "info@amoleck.co.tz",
  website: "amoleck.co.tz",
  whatsapp: "+255742710054",
  hours: "Monday - Friday: 8:00 AM - 5:00 PM | Saturday: 9:00 AM - 1:00 PM",
  social: {
    facebook: "https://facebook.com/amoleck",
    instagram: "https://instagram.com/amoleck",
    linkedin: "https://linkedin.com/company/amoleck",
    twitter: "https://twitter.com/amoleck",
  },
}

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Medical Equipment", href: "/equipment" },
  { label: "Physiotherapy", href: "/physiotherapy" },
  { label: "Technology", href: "/technology" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]

export const services = [
  {
    title: "Physiotherapy",
    slug: "physiotherapy",
    icon: "heart",
    description:
      "Professional physiotherapy assessment, rehabilitation, pain management, and sports rehabilitation services.",
    items: [
      "Physiotherapy assessment",
      "Rehabilitation",
      "Pain management",
      "Sports rehabilitation",
      "Physical rehabilitation",
      "Post-operative rehabilitation",
    ],
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    cta: { label: "Learn More", href: "/services/physiotherapy" },
  },
  {
    title: "Medical Services",
    slug: "medical",
    icon: "stethoscope",
    description:
      "Comprehensive general medical care, specialist services, health assessments, and wellness counseling.",
    items: [
      "General medical care",
      "Specialist services",
      "Health assessment",
      "Counseling & wellness",
    ],
    image:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80",
    cta: { label: "Learn More", href: "/services/medical" },
  },
  {
    title: "Medical Equipment",
    slug: "equipment",
    icon: "device",
    description:
      "Supply of medical equipment, physiotherapy equipment, rehabilitation equipment, and modern healthcare devices.",
    items: [
      "Medical equipment",
      "Physiotherapy equipment",
      "Rehabilitation equipment",
      "Modern healthcare devices",
    ],
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe611db5902?w=800&q=80",
    cta: { label: "View Equipment", href: "/equipment" },
  },
  {
    title: "Technology Solutions",
    slug: "technology",
    icon: "code",
    description:
      "Software development, digital healthcare solutions, IT consulting, and business technology solutions.",
    items: [
      "Software development",
      "Digital healthcare solutions",
      "IT consulting",
      "Business technology solutions",
    ],
    image:
      "https://images.unsplash.com/photo-1451187580459-9546f8936333?w=800&q=80",
    cta: { label: "Explore Technology", href: "/technology" },
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
  "Musculoskeletal rehabilitation",
  "Sports injuries",
  "Neurological rehabilitation",
  "Post-surgical rehabilitation",
  "Pain management",
  "Exercise therapy",
  "Elderly rehabilitation",
]

export const howItWorksService = [
  { step: "01", title: "Choose a Service", description: "Browse our healthcare services and select what fits your needs." },
  { step: "02", title: "Contact Our Team", description: "Reach out via phone, email, or our online request form." },
  { step: "03", title: "Assessment / Consultation", description: "Our professionals assess your needs and recommend solutions." },
  { step: "04", title: "Personalized Solution", description: "Receive a tailored plan or quotation for your requirements." },
  { step: "05", title: "Ongoing Support", description: "We provide continued support, follow-up, and after-sales care." },
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
    title: "Professional Expertise",
    description: "Experienced professionals delivering reliable healthcare and technology solutions.",
    icon: "users",
  },
  {
    title: "Modern Solutions",
    description: "Access to modern healthcare technologies and medical equipment.",
    icon: "device",
  },
  {
    title: "Customer Focused",
    description: "Solutions designed around customer needs and expectations.",
    icon: "heart",
  },
  {
    title: "Quality & Reliability",
    description: "Commitment to quality products and professional services you can trust.",
    icon: "shield",
  },
  {
    title: "Innovation",
    description: "Combining healthcare with technology and continuous innovation.",
    icon: "bulb",
  },
  {
    title: "After-Sales Support",
    description: "Technical support, maintenance, and customer assistance when you need it.",
    icon: "support",
  },
]

export const technologyCards = [
  { title: "Software Development", description: "Custom software solutions tailored to your organization's needs." },
  { title: "Healthcare Systems", description: "Digital healthcare platforms that improve patient care and efficiency." },
  { title: "Business Management Systems", description: "Streamline operations with integrated management systems." },
  { title: "Mobile Applications", description: "Native and cross-platform mobile apps for healthcare and business." },
  { title: "Web Applications", description: "Modern, responsive web applications built with cutting-edge technology." },
  { title: "IT Consulting", description: "Strategic technology consulting to drive your organization forward." },
]

export const quoteOptions = [
  "Medical Equipment",
  "Physiotherapy Service",
  "Medical Service",
  "Technology Solution",
  "Other",
]
