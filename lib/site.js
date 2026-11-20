// Shared links. External links point at the LIVE site (read-only use) so booking,
// blog and insights keep working without touching the original website.
export const LIVE = 'https://www.gtmtechsol.com';

export const BOOKING_URL = `${LIVE}/appointment/5`;
export const EMAIL = 'info@gtmtechsol.com';

export const NAV = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    children: [
      {
        label: 'Odoo Services',
        href: '/odoo-services',
        desc: 'End-to-end ERP implementation and customization',
      },
      {
        label: 'Revenue Operations (RevOps)',
        href: '/revops',
        desc: 'Align marketing, sales, and customer success to drive growth',
      },
    ],
  },
  { label: 'About Us', href: '/about-us' },
  { label: 'RevOps Maturity', href: '/revops-maturity' },
  {
    label: 'Insights',
    children: [
      { label: 'Odoo Business Growth', href: '/insights/odoo-business-growth', desc: 'Case study' },
      { label: 'Odoo Manufacturing Transformation', href: '/insights/odoo-manufacturing-transformation', desc: 'Case study' },
    ],
  },
  { label: 'Blog', href: '/blog' },
];

export const SOCIAL = [
  { label: 'Facebook', href: `${LIVE}/website/social/facebook` },
  { label: 'X', href: `${LIVE}/website/social/twitter` },
  { label: 'LinkedIn', href: `${LIVE}/website/social/linkedin` },
];

export const FOUNDER_IMG = `${LIVE}/web/image/7309-e7379d33/image.png`;

// ---------- Images ----------
// Original site images (read-only, loaded from the live site)
const W = `${LIVE}/web/image`;
export const ORIG = {
  logo: `${W}/website/1/logo/GTM?unique=3897faf`,
  heroDashboard: `${W}/7243-d24f6a5d/f31f3914-d569-48ca-a047-3837b2e96b7e.webp`,
  odooLogo: `${W}/7291-335765b9/Odoo%20Logo.webp`,
  revopsBadge: `${W}/7292-b9496ee1/revops.webp?access_token=935ebfb3-858b-4f41-8c2d-fef3dcfe8774`,
  problems: [`${W}/7236-72311f2b/image.png`, `${W}/7238-c316e672/image.png`, `${W}/7237-97167fd6/image.png`, `${W}/7248-0c0d6f28/image.png`],
  services: [`${W}/7245-4056bf9d/image.png`, `${W}/7239-5c4a4d7d/image.png`, `${W}/7246-17f8a652/image.png`, `${W}/7247-c446877f/image.png`],
  areas: [`${W}/7567-4bfe05fe/image.png`, `${W}/7569-375c6e7b/image.png`, `${W}/7570-ed938220/image.png`, `${W}/7566-81232b74/image.png`, `${W}/7565-1e19331f/image.png`, `${W}/7568-da62686a/image.png`],
  steps: [`${W}/7571-7c3ad670/image.png`, `${W}/7572-f974ac77/image.png`, `${W}/7573-fb0618d2/image.png`],
};

// Stock photography (Unsplash)
const u = (id, w = 1400) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;
export const IMG = {
  workshop: u('1552664730-d307ca884978'),
  highFive: u('1600880292203-757bb62b4baf'),
  laptopAnalytics: u('1460925895917-afdab827c52f'),
  darkDashboard: u('1551288049-bebda4e38f71'),
  presenting: u('1556761175-5973dc0f32e7'),
  teamLaptops: u('1522071820081-009f0129c71c'),
  laptopCharts: u('1504868584819-f8e8b4b6d7e3'),
  meeting: u('1517245386807-bb43f82c33c4'),
  openOffice: u('1559136555-9303baea8ebd'),
  warehouse: u('1586528116311-ad8dd3c8310d'),
  amsterdam: u('1534351590666-13e3e96b5017'),
  handsTogether: u('1600880292089-90a7e086ee0c'),
  boardroom: u('1542744173-8e7e53415bb0'),
  dataCenter: u('1573164713988-8665fc963095'),
  developers: u('1551434678-e076c223a692'),
  shop: u('1556742049-0cfed4f6a45d'),
  paperwork: u('1454165804606-c3d57bc86b40'),
  corridor: u('1497366216548-37526070297c'),
};
