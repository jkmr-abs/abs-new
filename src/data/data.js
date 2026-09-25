const data = {
  navigation: [
    { id: 'home', label: 'Home', number: '01' },
    { id: 'service', label: 'Service', number: '02' },
    { id: 'expertise', label: 'Expertise', number: '03' },
    { id: 'client', label: 'Client', number: '04' },
    { id: 'team', label: 'Team', number: '05' },
  ],

  hero: {
    id: 'home',
    number: '01',
    label: 'OUR MOTTO',
    title: 'Premium quality. Affordable prices.',
    titleLines: ['Premium quality.', 'Affordable prices.'],
    titleHighlightWordIndexes: [1, 3],
    description: 'Clarity in Simplicity. Transparency in Action. We design and deliver thoughtful technology, exceptional teams, and the momentum to move your business forward.',
    primaryButton: { label: 'what we do', target: 'service' },
    secondaryButton: { label: 'Meet the team', target: 'team', icon: 'down' },
    additionalDetails: [
      { id: 'hero-detail-1', value: '20+', label: 'People with purpose' },
      { id: 'hero-detail-2', value: '12', label: 'Years of building better' },
      { id: 'hero-detail-3', value: '∞', label: 'Possibilities ahead' },
    ],
    interaction: { type: 'hero-placeholder' },
  },

  services: [
    {
      id: 'custom-software-solution',
      label: 'Customer Support Solution',
      title: 'Custom Software Solution',
      description: 'We build full-stack applications on the cloud:',
      features: [
        { id: 'software-feature-1', icon: 'circle', title: 'As tech partners' },
        { id: 'software-feature-2', icon: 'circle', title: 'On fixed-bid engagements' },
        { id: 'software-feature-3', icon: 'circle', title: 'As a team on T&M at USD 25/hour/person' },
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
      description: '',
      features: [
        { id: 'recruitment-feature-1', icon: 'circle', title: 'Talent sourcing', description: 'We identify, attract, and engage with the best candidates in your industry.' },
        { id: 'recruitment-feature-2', icon: 'circle', title: 'Screening and assessment', description: 'Our rigorous evaluation process ensures you get the right fit.' },
        { id: 'recruitment-feature-3', icon: 'circle', title: 'Offer negotiation', description: 'We assist in securing top talent with competitive offers.' },
        { id: 'recruitment-feature-4', icon: 'circle', title: 'Onboarding support', description: 'We ensure a smooth transition for your new hires.' },
      ],
      primaryButton: null,
      secondaryButton: null,
      additionalDetails: [],
      interaction: { type: 'lp-double-wave-placeholder' },
    },
    {
      id: 'staffing-solutions',
      label: 'Staffing Solution',
      title: 'Staffing Solutions',
      description: '',
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
    sectionLabel: 'EXPERTISE LABEL',
    title: 'Expertise section title',
    description: 'Expertise section description',
    interaction: { type: 'expertise-placeholder' },
  },

  clients: {
    id: 'client',
    number: '04',
    sectionLabel: 'CLIENTS LABEL',
    title: 'Clients section title',
    supportingBlocks: [
      { title: 'Client content block', description: 'Supporting content placeholder' },
      { title: 'Client content block', description: 'Supporting content placeholder' },
    ],
    interaction: { type: 'clients-placeholder' },
  },

  teams: {
    id: 'team',
    number: '05',
    sectionLabel: 'TEAMS LABEL',
    title: 'Teams section title',
    description: 'Teams section description',
    interaction: { type: 'teams-placeholder' },
  },

  footer: {
    id: 'footer',
    number: '06',
    sectionLabel: 'FOOTER LABEL',
    title: 'Footer title',
    supportingInformation: 'PMA ID / supporting information',
    address: 'Address placeholder',
    quickLinksLabel: 'Quick links',
    socialLinksLabel: 'Elsewhere',
    socialLinks: [
      { label: 'Social link', href: '#social' },
      { label: 'Social link', href: '#social' },
    ],
    copyright: 'Copyright information',
    legalLinks: [
      { label: 'Privacy policy', href: '#privacy' },
      { label: 'Other legal link', href: '#terms' },
    ],
  },
};

export default data;
