import { LucideIcon } from 'lucide-react';
import {
  PieChart,
  Map,
  DollarSign,
  Users,
  Wrench,
  ArrowLeftRight,
} from 'lucide-react';

interface NavItem {
  name: string;
  path: string;
  Icon: LucideIcon;
  description?: string;
  badge?: string;
  subItems?: Omit<NavItem, 'subItems'>[];
  permissions?: string[];
}

const createNavItem = (
  name: string,
  path: string,
  Icon: LucideIcon,
  options: Partial<Omit<NavItem, 'name' | 'path' | 'Icon'>> = {}
): NavItem => ({
  name,
  path,
  Icon,
  ...options,
});

export const navigation: NavItem[] = [
  createNavItem('Dashboard', '/admin/dashboard', PieChart, {
    description: 'Overview and analytics',
  }),
  createNavItem('Energy Mapping', '/admin/mapping', Map, {
    description: 'GIS-based visualization',
  }),
  createNavItem('Investor Portal', '/admin/investors', DollarSign, {
    description: 'Financial models and tracking',
    permissions: ['investor.view'],
  }),
  createNavItem('Community', '/admin/community', Users, {
    description: 'Community engagement tools',
  }),
  createNavItem('Maintenance', '/admin/maintenance', Wrench, {
    description: 'Predictive maintenance',
    badge: 'New',
  }),
  createNavItem('Energy Trade', '/admin/trade', ArrowLeftRight, {
    description: 'Energy marketplace',
  }),
];

export type { NavItem };