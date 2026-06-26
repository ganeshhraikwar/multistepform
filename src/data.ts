import { Gamepad2, MonitorPlay, Joystick } from 'lucide-react';

export const PLANS = [
  {
    id: 'arcade',
    name: 'Arcade',
    priceMonthly: 9,
    priceYearly: 90,
    icon: Joystick,
    color: 'text-white',
    bg: 'bg-orange-400',
    freeMonths: '2 months free',
  },
  {
    id: 'advanced',
    name: 'Advanced',
    priceMonthly: 12,
    priceYearly: 120,
    icon: Gamepad2,
    color: 'text-white',
    bg: 'bg-strawberry-red',
    freeMonths: '2 months free',
  },
  {
    id: 'pro',
    name: 'Pro',
    priceMonthly: 15,
    priceYearly: 150,
    icon: MonitorPlay,
    color: 'text-white',
    bg: 'bg-purplish-blue',
    freeMonths: '2 months free',
  }
];

export const ADD_ONS = [
  {
    id: 'online-service',
    name: 'Online service',
    description: 'Access to multiplayer games',
    priceMonthly: 1,
    priceYearly: 10,
  },
  {
    id: 'larger-storage',
    name: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    priceMonthly: 2,
    priceYearly: 20,
  },
  {
    id: 'customizable-profile',
    name: 'Customizable Profile',
    description: 'Custom theme on your profile',
    priceMonthly: 2,
    priceYearly: 20,
  }
];

export const STEPS = [
  { num: 1, title: 'YOUR INFO' },
  { num: 2, title: 'SELECT PLAN' },
  { num: 3, title: 'ADD-ONS' },
  { num: 4, title: 'SUMMARY' }
];
