export const siteConfig = {
  name: "Ababeel Key Trading LLC",
  displayName: "Ababeel Key Trading LLC – Key Cutting Service",
  tagline: "Your security, our priority",
  domain: "ababeelkeydxb.com",
  url: "https://ababeelkeydxb.com",

  // NAP — byte-for-byte canonical source. Never hardcode anywhere else.
  phone: process.env.NEXT_PUBLIC_PHONE_NUMBER ?? "+971 50 476 2783",
  phoneRaw: process.env.NEXT_PUBLIC_PHONE_RAW ?? "971504762783",
  whatsappUrl: `https://wa.me/${process.env.NEXT_PUBLIC_PHONE_RAW ?? "971504762783"}`,

  address: {
    street: "Al Murar - Frij Murar",
    city: "Dubai",
    country: "United Arab Emirates",
    full: "Al Murar - Frij Murar - Dubai - United Arab Emirates",
  },

  hours: "Open 24 hours",
  hoursDescription: "We're available 24 hours a day, 7 days a week, 365 days a year.",

  rating: {
    value: 3.8,
    count: null as number | null, // TODO: replace with actual review count from Google
    source: "Google",
  },

  social: {
    facebook: "https://www.facebook.com/ababeelkeytradingkey/",
    googleMapsShort: "https://share.google/l8tS5msxhfFsFeTIf",
    googleMapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.84612050687!2d55.30695101060935!3d25.27576137756731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43ba3246cea7%3A0x873c4cffff6567ee!2sAbabeel%20Key%20Trading%20LLC%20Key%20Cutting%20Service!5e0!3m2!1sen!2s!4v1788685771302!5m2!1sen!2s",
  },

  geo: {
    latitude: 25.27576137756731,
    longitude: 55.30695101060935,
  },

  plusCode: "78G5+8R",
  plusCodeFull: "78G5+8R Dubai - United Arab Emirates",
  plusCodeUrl: "https://www.google.com/maps/place/78G5%2B8R+Dubai,+United+Arab+Emirates",

  services: [
    {
      slug: "emergency-locksmith-dubai",
      name: "Emergency Locksmith",
      shortDesc: "24/7 emergency locksmith response anywhere in Dubai.",
    },
    {
      slug: "key-cutting-dubai",
      name: "Key Cutting",
      shortDesc: "Precision key cutting for all key types while you wait.",
    },
    {
      slug: "car-key-programming-dubai",
      name: "Car Key Programming",
      shortDesc: "Transponder, smart key, and remote key programming for all makes.",
    },
    {
      slug: "lock-repair-replacement-dubai",
      name: "Lock Repair & Replacement",
      shortDesc: "Repair or upgrade locks for residential and commercial doors.",
    },
    {
      slug: "home-lockout-service-dubai",
      name: "Home Lockout Service",
      shortDesc: "Locked out of your home? Fast, damage-free entry 24/7.",
    },
    {
      slug: "office-commercial-locksmith-dubai",
      name: "Office & Commercial Locksmith",
      shortDesc: "Master key systems, access control, and commercial lock solutions.",
    },
    {
      slug: "safe-opening-safe-locksmith-dubai",
      name: "Safe Opening",
      shortDesc: "Professional safe cracking and combination reset services.",
    },
    {
      slug: "duplicate-key-services-dubai",
      name: "Duplicate Key Services",
      shortDesc: "Duplicate keys for homes, offices, cars, and more.",
    },
  ],

  locations: [
    { slug: "dubai", name: "Dubai" },
    { slug: "al-murar", name: "Al Murar" },
    { slug: "deira", name: "Deira" },
    { slug: "bur-dubai", name: "Bur Dubai" },
  ],

  areasServed: [
    "Dubai",
    "Al Murar",
    "Frij Murar",
    "Deira",
    "Bur Dubai",
    "Al Rigga",
    "Naif",
    "Al Ras",
    "Port Saeed",
    "Al Karama",
    "Jumeirah",
    "Al Barsha",
    "Muhaisnah",
    "Al Twar",
    "Mirdif",
    "Al Qusais",
    "Sharjah border areas",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
