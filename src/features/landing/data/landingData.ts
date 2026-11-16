import { PORTRAITS } from '../../../assets/portraits';

export interface NavItem {
  label: string;
  href: string;
}

export interface StepItem {
  stepNumber: string;
  highlightPrefix: string;
  titleRemainder: string;
  description: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating: string;
  avatar: string;
  tintClass: string;
}

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export const CLIENT_AVATARS: string[] = [
  PORTRAITS.avatar1,
  PORTRAITS.avatar2,
  PORTRAITS.avatar3,
];

export const BAR_CHART_HEIGHTS: number[] = [38, 56, 78, 100];

export const INTERACTIVE_STEPS: StepItem[] = [
  {
    stepNumber: 'Step 01',
    highlightPrefix: 'Nguyan Will ',
    titleRemainder: 'Find The Best Deals For You Instantly',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    stepNumber: 'Step 02',
    highlightPrefix: 'Nguyan Will ',
    titleRemainder: 'Craft Scalable Interfaces With Precision',
    description:
      'We combine human-centered research with rapid prototyping and high-contrast visual systems so your digital product converts visitors into loyal advocates.',
  },
  {
    stepNumber: 'Step 03',
    highlightPrefix: 'Nguyan Will ',
    titleRemainder: 'Accelerate Your Product Growth Globally',
    description:
      'Track real-time performance metrics, optimize customer journeys, and scale effortlessly with production-ready frontend architecture.',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    name: 'Anugrah Das',
    role: 'UI/UX DESIGNER',
    quote:
      '“Great experience! The design was clean, modern, and exactly what I needed.”',
    rating: '4.0',
    avatar: PORTRAITS.clientCyan,
    tintClass: 'hue-rotate-180 saturate-150',
  },
  {
    id: 2,
    name: 'Anugrah Das',
    role: 'UI/UX DESIGNER',
    quote:
      '“Professional and easy to work with. Delivered high-quality results on time without any hassle.”',
    rating: '4.0',
    avatar: PORTRAITS.clientWarm,
    tintClass: 'sepia saturate-150',
  },
  {
    id: 3,
    name: 'Anugrah Das',
    role: 'UI/UX DESIGNER',
    quote:
      '“Outstanding attention to detail and seamless communication throughout the entire project lifecycle.”',
    rating: '4.0',
    avatar: PORTRAITS.clientMono,
    tintClass: 'grayscale contrast-125',
  },
  {
    id: 4,
    name: 'Anugrah Das',
    role: 'UI/UX DESIGNER',
    quote:
      '“Transformed our brand identity with bold visual storytelling and measurable usability improvements.”',
    rating: '4.0',
    avatar: PORTRAITS.clientCyan,
    tintClass: 'hue-rotate-90 saturate-150',
  },
  {
    id: 5,
    name: 'Anugrah Das',
    role: 'UI/UX DESIGNER',
    quote:
      '“Fast delivery, pixel-perfect execution, and an intuitive design system our whole team loves.”',
    rating: '4.0',
    avatar: PORTRAITS.clientWarm,
    tintClass: 'contrast-125',
  },
];

export const FOOTER_MENU: string[] = [
  'How It Works',
  'Help & Support',
  'Contact',
  'Privacy & Policy',
  'Terms & Conditions',
];

export const FOOTER_SOCIALS: string[] = [
  'Facebook',
  'Instagram',
  'Twitter',
  'LinkedIn',
];
