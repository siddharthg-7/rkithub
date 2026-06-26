import { GraduationCap, CodeXml, BriefcaseBusiness, BadgeCheck } from 'lucide-react';

export type JourneyState = 0 | 1 | 2 | 3;

export const JOURNEY_STEPS = [
  {
    id: 0,
    label: 'Expert Training',
    heading: 'Master Industry Skills.',
    description:
      'Learn from industry experts through structured classroom sessions, live coding and practical exercises.',
    icon: GraduationCap,
    color: '#2563EB',      // Blue
    position: { x: 160, y: 90 },
  },
  {
    id: 1,
    label: 'Projects',
    heading: 'Build Real Projects.',
    description:
      'Develop production-style applications using modern technologies and build a strong portfolio.',
    icon: CodeXml,
    color: '#06B6D4',      // Cyan
    position: { x: 323, y: 202 },
  },
  {
    id: 2,
    label: 'Internship',
    heading: 'Gain Industry Experience.',
    description:
      'Work on real business scenarios and understand professional software development workflows.',
    icon: BriefcaseBusiness,
    color: '#8B5CF6',      // Purple
    position: { x: 360, y: 396 },
  },
  {
    id: 3,
    label: 'Placement',
    heading: 'Launch Your Career.',
    description:
      'Prepare for interviews, improve communication and get placed with leading technology companies.',
    icon: BadgeCheck,
    color: '#F59E0B',      // Gold
    position: { x: 250, y: 560 },
  },
];

// Perfect mathematically smooth cubic curve dominating right section
export const ARC_PATH =
  'M 80,40 C 500,40 550,560 180,560';

// Exact arc lengths
export const NODE_PROGRESS = [0, 1/3, 2/3, 1.0];

// Accent gradients used by HeroLeft for the highlighted heading word.
export const ACCENT_GRADIENTS: Record<number, string> = {
  0: 'linear-gradient(to bottom, #60A5FA, #2563EB)',
  1: 'linear-gradient(to bottom, #3DD5F3, #0EA5E9)', // Updated Projects gradient
  2: 'linear-gradient(to bottom, #C4B5FD, #8B5CF6)',
  3: 'linear-gradient(to bottom, #FCD34D, #F59E0B)',
};
