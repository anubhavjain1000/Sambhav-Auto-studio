import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export enum CarType {
  NEXA = 'NEXA',
  ARENA = 'ARENA'
}

export interface CarModel {
  id: string;
  name: string;
  type: CarType;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}