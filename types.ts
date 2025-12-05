export type InputType = 'radio' | 'checkbox' | 'text' | 'textarea' | 'select' | 'info';

export interface Option {
  label: string;
  value: string;
}

export interface Question {
  id: string;
  label: string;
  type: InputType;
  options?: Option[];
  placeholder?: string;
  subtext?: string;
  required?: boolean;
  conditional?: {
    field: string;
    value: string[]; // Show this question if 'field' has one of these values
  };
}

export interface Section {
  id: string;
  title: string;
  questions: Question[];
}

export interface FormData {
  [key: string]: string | string[];
}