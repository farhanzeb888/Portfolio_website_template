
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  rating: number;
}
