export const navItems = [
  { id: 'home', label: 'Home', number: '01' },
  { id: 'service', label: 'Service', number: '02' },
  { id: 'expertise', label: 'Expertise', number: '03' },
  { id: 'client', label: 'Client', number: '04' },
  { id: 'team', label: 'Team', number: '05' },
];

export const sectionData = {
  home: {
    id: 'home',
    number: '01',
    sectionLabel: 'HERO LABEL',
    title: 'Hero section title',
    description: 'Hero section description',
    actions: [
      { label: 'Primary action', target: 'service', variant: 'primary' },
      { label: 'Secondary action', target: 'team', variant: 'outline', icon: 'down' },
    ],
    supportingInformation: [
      { value: '00', label: 'Supporting item' },
      { value: '00', label: 'Supporting item' },
      { value: '00', label: 'Supporting item' },
    ],
  },
  service: {
    id: 'service',
    number: '02',
    sectionLabel: 'OUR SERVICES',
    slides: [
      {
        id: 'custom-software-development',
        title: 'Custom Software Solution',
        description: 'We build full-stack applications on the cloud:',
        features: [
          { id: 'software-feature-1', label: 'As tech partners' },
          { id: 'software-feature-2', label: 'On fixed-bid engagements' },
          { id: 'software-feature-3', label: 'As a team on T&M at USD 25/hour/person' },
        ],
      },
      {
        id: 'recruitment',
        title: 'Talent Recruitment',
        features: [
          { id: 'recruitment-feature-1', label: 'Talent sourcing: We identify, attract, and engage with the best candidates in your industry.' },
          { id: 'recruitment-feature-2', label: 'Screening and assessment: Our rigorous evaluation process ensures you get the right fit.' },
          { id: 'recruitment-feature-3', label: 'Offer negotiation: We assist in securing top talent with competitive offers.' },
          { id: 'recruitment-feature-4', label: 'Onboarding support: We ensure a smooth transition for your new hires.' },
        ],
      },
      {
        id: 'staffing-solutions',
        title: 'Staffing Solutions',
        features: [
          { id: 'staffing-feature-1', label: 'Find and hire top talent, quickly.' },
          { id: 'staffing-feature-2', label: 'Help build diverse teams.' },
          { id: 'staffing-feature-3', label: 'Ensure the most qualified candidates are capable of delivering results.' },
          { id: 'staffing-feature-4', label: 'Help organizations of all sizes acquire top-tier talent.' },
        ],
      },
    ],
    controls: {
      previousLabel: 'Previous service',
      nextLabel: 'Next service',
    },
  },
  expertise: {
    id: 'expertise',
    number: '03',
    sectionLabel: 'EXPERTISE LABEL',
    title: 'Expertise section title',
    description: 'Expertise section description',
  },
  client: {
    id: 'client',
    number: '04',
    sectionLabel: 'CLIENTS LABEL',
    title: 'Clients section title',
    supportingBlocks: [
      { title: 'Client content block', description: 'Supporting content placeholder' },
      { title: 'Client content block', description: 'Supporting content placeholder' },
    ],
  },
  team: {
    id: 'team',
    number: '05',
    sectionLabel: 'TEAMS LABEL',
    title: 'Teams section title',
    description: 'Teams section description',
  },
};

export const footerData = {
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
};
