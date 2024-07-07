"use client";
import { gotu } from "../ui/fonts";
import FormText from "./formText";
import ServicesPreview from "./servicesPreview";
import { useState, useEffect } from "react";
import { Service, getServices } from "../backend/services";
import { Customer, createCustomer } from "../backend/customer";

export default function From() {
  const [formState, setFormState] = useState<
    "INITIAL" | "LOADING" | "SUCCESSFUL" | "UNSUCCESSFUL"
  >("INITIAL");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [name, setName] = useState("");
  const [nameResult, setNameResult] = useState("");
  const [email, setEmail] = useState("");
  const [emailResult, setEmailResult] = useState("");

  const [services, setServices] = useState<Service[]>([]);
  const [selectedServicesIds, setSelectedServicesIds] = useState<
    Service["id"][]
  >([]);

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
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleServicePressed = (serviceId: string) => {
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
    const result = isInputValueValid(value, "name");
    if (result === "valid") {
      setName(value);
      setNameResult(result);
      return result;
    } else {
      setNameResult(result);
      return result;
    }
  };

  const onChangeEmail = (value: string) => {
    const result = isInputValueValid(value, "email");
    if (result === "valid") {
      setEmail(value);
      setEmailResult(result);
      return result;
    } else {
      setEmailResult(result);
      return result;
    }
  };

  const isInputValueValid = (value: string, type: string): string => {
    let result = "";
    if (type === "name") {
      if (value.length === 0 || value.length < 2) {
        result = "Numele trebuie să conțină cel puțin două caractere.";
      } else if (value.length > 50) {
        result = "Numele nu poate să conțină mai mult de 50 de caractere.";
      } else if (!/^[a-zA-Z\s'-]+$/.test(value)) {
        result =
          "Numele poate să conțină numai litere, spații, apostrofuri sau cratime.";
      } else {
        result = "valid";
      }
    } else if (type === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) {
        result = "E-mailul este obligatoriu.";
      } else if (value.length > 254) {
        result = "E-mailul nu poate să conțină mai mult de 254 de caractere.";
      } else if (!emailRegex.test(value)) {
        result = "E-mailul nu are forma validă.";
      } else {
        result = "valid";
      }
    }
    return result;
  };

  const onSubmit = (): void => {
    setFormState("LOADING");
    const submitData = async () => {
      try {
        const customer: Customer = {
          name,
          email,
          services: selectedServicesIds,
        };
        await createCustomer(customer);
        console.log("Customer created successfully");
        setFormState("SUCCESSFUL");
      } catch (error) {
        console.error("Error creating customer:", error);
        setFormState("UNSUCCESSFUL");
      }
    };

    if (nameResult === "valid" && emailResult === "valid") {
      submitData();
    } else {
      
    }
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
          formState={formState}
          nameResult={nameResult}
          emailResult={emailResult}
        />
      </div>
    </div>
  );
}
