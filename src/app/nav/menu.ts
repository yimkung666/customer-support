import { NavItem } from './nav-item';

export let menu: NavItem[] = [
  {
    isActive: true,
    displayName: 'Customer Support',
    iconName: 'group',
    route: '',
    children: [
      {
        displayName: 'Report issue',
        iconName: '',
        route: 'customer-support/report',
        isActive: true,
      },
      {
        displayName: 'Task',
        iconName: '',
        route: 'customer-support/task',
        isActive: true,
      },
    ],
  },
];
