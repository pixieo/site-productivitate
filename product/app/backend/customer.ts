import { Service } from "./services";

export type Customer = {
  name: string;
  email: string;
  services: string[];
};

export const createCustomer = async (customer: Customer): Promise<void> => {
    const response = await fetch('http://localhost:3001/create-customer', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(customer),
      });

      if (!response.ok) {
        throw new Error('Failed to create customer');
      }
};
