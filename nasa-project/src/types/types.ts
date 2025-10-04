export interface Annotation {
  id: string;
  title: string;
  description: string;
  x: number;
  y: number;
  type: 'nebula' | 'cluster' | 'galaxy' | 'star';
}

export interface PlanetInfo {
  name: string;
  description: string;
  diameter: string;
  distance: string;
  fact: string;
}

export interface User {
  email: string;
  name: string;
}

export interface AuthFormData {
  email: string;
  password: string;
  name?: string;
}