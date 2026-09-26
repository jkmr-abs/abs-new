const data = {
  navigation: [
    { id: 'home', label: 'Home',  },
    { id: 'service', label: 'Service', },
    { id: 'expertise', label: 'Expertise',  },
    { id: 'client', label: 'Client', },
    { id: 'team', label: 'Team',  },
  ],

  hero: {
    id: 'home',
    number: '01',
    label: 'OUR MOTTO',
    title: 'Premium quality. Affordable prices.',
    titleLines: ['Premium quality.', 'Affordable prices.'],
    titleHighlightWordIndexes: [1, 3],
    description: 'Clarity in Simplicity. Transparency in Action. We design and deliver thoughtful technology, exceptional teams, and the momentum to move your business forward.',
    primaryButton: { label: 'What we do', target: 'service' },
    secondaryButton: { label: 'Meet the team', target: 'team', icon: 'down' },
    additionalDetails: [
      { id: 'hero-detail-1', value: '20+', label: 'People with purpose' },
      { id: 'hero-detail-2', value: '12', label: 'Years of building better' },
      { id: 'hero-detail-3', value: '∞', label: 'Possibilities ahead' },
    ],
    interaction: { type: 'hero-placeholder' },
  },

  servicesLabel: 'OUR SERVICES',

  services: [
    {
      id: 'custom-software-solution',
      label: 'Customer Support Solution',
      title: 'Custom Software Solution',
      features: [
        { id: 'software-feature-1', icon: 'circle', title: 'We build full-stack applications on the cloud' },
        { id: 'software-feature-2', icon: 'circle', title: 'As tech partners' },
        { id: 'software-feature-3', icon: 'circle', title: 'On fixed-bid engagements' },
        { id: 'software-feature-4', icon: 'circle', title: 'As a team on T&M at USD 25/hour/person' },
      ],
      primaryButton: null,
      secondaryButton: null,
      additionalDetails: [],
      interaction: { type: 'lp-double-wave-placeholder' },
    },
    {
      id: 'talent-recruitment',
      label: 'Recruitment Solution',
      title: 'Talent Recruitment',
      features: [
        { id: 'recruitment-feature-1', icon: 'circle', title: 'Talent sourcing', description: 'We identify and attract top talent in your industry.' },
        { id: 'recruitment-feature-2', icon: 'circle', title: 'Screening and assessment', description: 'We assess candidates to find the right fit for your team.' },
        { id: 'recruitment-feature-3', icon: 'circle', title: 'Offer negotiation', description: 'We assist in securing top talent with competitive offers.' },
        { id: 'recruitment-feature-4', icon: 'circle', title: 'Onboarding support', description: 'We ensure a smooth transition for your new hires.' },
      ],
      primaryButton: null,
      secondaryButton: null,
      additionalDetails: [],
      interaction: { type: 'lp-double-wave-placeholder' },
    },
    {
      id: 'strategic-staffing',
      label: 'Strategic Staffing Solutions',
      title: 'Strategic Staffing Solutions',
      features: [
        { id: 'staffing-feature-1', icon: 'circle', title: 'Find and hire top talent, quickly.' },
        { id: 'staffing-feature-2', icon: 'circle', title: 'Help build diverse teams.' },
        { id: 'staffing-feature-3', icon: 'circle', title: 'Ensure the most qualified candidates are capable of delivering results.' },
        { id: 'staffing-feature-4', icon: 'circle', title: 'Help organizations of all sizes acquire top-tier talent.' },
      ],
      primaryButton: null,
      secondaryButton: null,
      additionalDetails: [],
      interaction: { type: 'lp-double-wave-placeholder' },
    },
  ],

  expertise: {
    id: 'expertise',
    number: '03',
    sectionLabel: 'OUR EXPERTISE',
    title: 'Powerful Technology. Bold Ideas.',
    titleLines: ['Powerful Technology.', 'Bold Ideas.'],
    titleHighlightWordIndexes: [1, 3],
    description: 'We combine modern technologies to build scalable and high-performance solutions',
    interaction: { type: 'expertise-placeholder' },
  },

  clients: {
    id: 'client',
    number: '04',
    sectionLabel: 'OUR HAPPY CUSTOMERS',
    title: 'Trusted Brands. Better Futures.',
    titleLines: ['Trusted Brands.', 'Better Futures.'],
    titleHighlightWordIndexes: [1, 3],
    description: 'We are proud to partner with forward-thinking organizations across industries.',
    interaction: { type: 'clients-placeholder' },
  },

  teams: {
    id: 'team',
    number: '05',
    sectionLabel: 'OUR TEAM',
    title: 'People Behind Progress',
    titleHighlightWordIndexes: [1],
    description: 'Meet the people turning thoughtful ideas into meaningful outcomes.',
    interaction: { type: 'teams-placeholder' },
  },

  footer: {
    id: 'footer',
    number: '06',
    sectionLabel: 'Get in touch',
    title: 'Have a good feeling?',
    titleLines: ['Have a good', 'feeling?'],
    titleHighlightWordIndexes: [3],
    email: 'sales@abstractit.in',
    address: {
      label: '4/67, 4th North Cross Street,Kapaleeswarar Nagar, Neelankarai,Chennai - 600041',
      href: 'https://www.google.com/maps/search/?api=1&query=4%2F67%2C%204th%20North%20Cross%20Street%2C%20Kapaleeswarar%20Nagar%2C%20Neelankarai%2C%20Chennai%20-%20600041',
    },
    quickLinksLabel: 'Explore',
    socialLinksLabel: 'Elsewhere',
    socialLinks: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com', external: true },
      { label: 'Instagram', href: 'https://www.instagram.com', external: true },
    ],
    copyright: '© 2022 Abstract Business Systems Private Limited. All rights reserved.',
    legalLinks: [
      { label: 'Privacy policy', href: '#privacy' },
      { label: 'Terms & conditions', href: '#terms' },
    ],
  },
};

export default data;
