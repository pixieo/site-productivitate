"use client";
import { gotu } from "@/app/ui/fonts";
import FormText from "./formText";
import ServicesPreview from "./servicesPreview";
import { useState, useEffect } from "react";
import { Service, getServices } from "../backend/services";
import { Customer, createCustomer } from "../backend/customer";

export default function From() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [services, setServices] = useState<Service[]>([]);
  const [selectedServicesIds, setSelectedServicesIds] = useState<number[]>([]);

  useEffect(() => {
    getServices()
      .then((data) => {
        setServices(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.toString());
        setIsLoading(false);
      });

    if (isSubmitted) {
      const submitData = async () => {
        try {
          const customer: Customer = {
            name: name,
            email: email,
            services: selectedServicesIds,
          };

          console.log(customer)

          await createCustomer(customer);
          console.log("Customer created successfully");
        } catch (error) {
          console.error("Error creating customer:", error);
        }
      };

      submitData();
      setIsSubmitted(false);
    }
  }, [isSubmitted]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleServicePressed = (serviceId: number) => {
    setSelectedServicesIds((prevIds) => {
      if (!prevIds.includes(serviceId)) {
        return [...prevIds, serviceId];
      } else if (prevIds.includes(serviceId)) {
        return prevIds.filter((id) => id !== serviceId);
      }
      return prevIds;
    });
  };

  const onChangeName = (value: string) => {
    if (isInputValueValid(value, "name")) {
      setName(value);
    }
  };

  const isInputValueValid = (value: string, type: string): boolean => {
    if (type === "name") {
      if (value.length !== 0) {
        return true;
      }
    } else if (type === "email") {
      if (value.length !== 1) {
        return true;
      }
    }
    return false;
  };

  const onChangeEmail = (value: string) => {
    if (isInputValueValid(value, "email")) {
      setEmail(value);
    }
  };

  const onSubmit = (): void => {
    setIsSubmitted(true);
  };

  return (
    <div className="pt-32" id="services">
      <div
        className={`${gotu.className} ml-14 mb-16 flex gap-20 justify-center w-1/2 text-lg`}
      >
        <p className="text-3xl">LUCREAZĂ CU MINE</p>
        <div className="py-1 px-10 border-b-2 border-beige-400">
          ALEGE UN SERVICIU
        </div>
      </div>

      <div className="mt-4 mb-40 px-5 flex flex-col justify-center items-center h-96 gap-20 md:flex-row">
        <ServicesPreview
          services={services}
          selectedServicesIds={selectedServicesIds}
          onServicePressed={handleServicePressed}
        />
        <FormText
          selectedServicesIds={selectedServicesIds}
          services={services}
          onServicePressed={handleServicePressed}
          onChangeName={onChangeName}
          onChangeEmail={onChangeEmail}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
}
