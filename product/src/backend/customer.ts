import { connect } from "http2";

export type Customer = {
  name: string;
  email: string;
  services: string[];
};

export const createCustomer = async (customer: Customer): Promise<void> => {
  const body = {
    data: {
      Name: customer.name,
      Email: customer.email,
      services: customer.services
    },
  };
  console.log(body);

  const response = await fetch("http://localhost:1337/api/customers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error("Failed to create customer");
  }
};
