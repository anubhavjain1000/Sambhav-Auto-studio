import { CarModel, CarType, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Service Cost Calculator', href: '#calculator' },
  { label: 'Book Service', href: '#booking' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const CAR_MODELS: CarModel[] = [
  // NEXA
  { id: 'ignis', name: 'Ignis', type: CarType.NEXA },
  { id: 'baleno', name: 'Baleno', type: CarType.NEXA },
  { id: 'ciaz', name: 'Ciaz', type: CarType.NEXA },
  { id: 'xl6', name: 'XL6', type: CarType.NEXA },
  { id: 'fronx', name: 'Fronx', type: CarType.NEXA },
  { id: 'grand-vitara', name: 'Grand Vitara', type: CarType.NEXA },
  { id: 'jimny', name: 'Jimny', type: CarType.NEXA },
  { id: 'invicto', name: 'Invicto', type: CarType.NEXA },
  // ARENA
  { id: 'alto-k10', name: 'Alto K10', type: CarType.ARENA },
  { id: 'spresso', name: 'S-Presso', type: CarType.ARENA },
  { id: 'celerio', name: 'Celerio', type: CarType.ARENA },
  { id: 'wagonr', name: 'Wagon R', type: CarType.ARENA },
  { id: 'swift', name: 'Swift', type: CarType.ARENA },
  { id: 'dzire', name: 'Dzire', type: CarType.ARENA },
  { id: 'brezza', name: 'Brezza', type: CarType.ARENA },
  { id: 'ertiga', name: 'Ertiga', type: CarType.ARENA },
];