export type BillingCycle = 'monthly' | 'yearly';

export interface UserData {
  name: string;
  email: string;
  phone: string;
}

export interface ValidationErrors {
  name?: string;
  email?: string;
  phone?: string;
}

export interface FormState {
  currentStep: number;
  userData: UserData;
  planId: string;
  billingCycle: BillingCycle;
  addOnIds: string[];
}
