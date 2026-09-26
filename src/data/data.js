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
        { id: 'recruitment-feature-2', icon: 'circle', title: 'Screening and assessment', description: 'We find the right fit.' },
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
        { id: 'staffing-feature-2', icon: 'circle', title: 'Build diverse teams.' },
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
    description: 'Our expertise spans custom software development, cloud-based applications, modern web technologies, and scalable digital solutions. We combine thoughtful strategy, clean engineering, and reliable architecture to help businesses improve operations, deliver better customer experiences, and grow with confidence.',
    interaction: { type: 'expertise-placeholder' },
  },

  clients: {
    id: 'client',
    number: '04',
    sectionLabel: 'OUR HAPPY CUSTOMERS',
    title: 'Trusted Partnerships. Better Futures.',
    titleLines: ['Trusted Partnerships.', 'Better Futures.'],
    titleHighlightWordIndexes: [1, 3],
    description: 'We partner with forward-thinking businesses across industries to deliver practical technology solutions and exceptional talent. From custom software development to recruitment and staffing support, we help our clients solve complex challenges, strengthen their teams, and create lasting business value.',
    interaction: { type: 'clients-placeholder' },
  },

  teams: {
    id: 'team',
    number: '05',
    sectionLabel: 'OUR TEAM',
    title: 'Meet Our Technology Experts',
    titleHighlightWordIndexes: [2],
    description: 'Our team brings together skilled software engineers, technology specialists, and talent professionals who care deeply about the work they do. By combining technical expertise, industry knowledge, and a collaborative approach, we turn ambitious ideas into reliable solutions and meaningful business outcomes.',
    interaction: { type: 'teams-placeholder' },
  },

  footer: {
    id: 'footer',
    number: '06',
    sectionLabel: 'GET IN TOUCH',
    title: 'Have A Good Feeling?',
    titleLines: ['Have A Good', 'Feeling?'],
    titleHighlightWordIndexes: [3],
    description: 'Let\'s turn your ideas into meaningful outcomes.',
    conversationLabel: 'START A CONVERSATION',
    email: 'sales@abstractit.in',
    location: 'Chennai, India',
    address: {
      label: '4/67, 4th North Cross St, Neelankarai, Chennai - 600041',
      href: 'https://www.google.com/maps/search/?api=1&query=4%2F67%2C%204th%20North%20Cross%20St%2C%20Neelankarai%2C%20Chennai%20-%20600041',
    },
    nextStepsLabel: 'WHAT HAPPENS NEXT',
    nextSteps: [
      { id: 'footer-step-1', number: '01', label: 'Tell us your needs', icon: 'user' },
      { id: 'footer-step-2', number: '02', label: 'Shape the solution', icon: 'handshake' },
      { id: 'footer-step-3', number: '03', label: 'Move forward together', icon: 'arrow' },
    ],
    servicesLabel: 'SERVICES',
    servicesLinks: [
      { id: 'expertise', label: 'Expertise' },
      { id: 'staffing', label: 'Staffing', target: 'service' },
      { id: 'development', label: 'Development', target: 'service' },
    ],
    quickLinksLabel: 'QUICK LINKS',
    quickLinks: [
      { id: 'home', label: 'Home' },
      { id: 'service', label: 'Services' },
      { id: 'expertise', label: 'Expertise' },
      { id: 'team', label: 'Team' },
      { id: 'client', label: 'Clients' },
    ],
    socialLinksLabel: 'SOCIAL LINKS',
    socialLinks: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com', external: true },
      { label: 'Instagram', href: 'https://www.instagram.com', external: true },
    ],
    copyright: '© 2026 Abstract Business Systems. All rights reserved.',
    legalLinks: [
      { label: 'Privacy policy', href: '#privacy' },
      { label: 'Terms & conditions', href: '#terms' },
    ],
  },
};

export default data;
