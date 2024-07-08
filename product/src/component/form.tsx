"use client";
import { gotu } from "../ui/fonts";
import FormText from "./formText";
import ServicesPreview from "./servicesPreview";
import { useState, useEffect } from "react";
import { Service, getServices } from "../backend/services";
import { Customer, createCustomer } from "../backend/customer";

export default function From() {
  const [services, setServices] = useState<Service[]>([]);

  const [formState, setFormState] = useState<
    "INITIAL" | "LOADING" | "SUCCESSFUL" | "UNSUCCESSFUL"
  >("INITIAL");

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState<string>();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<string>();

  const [selectedServicesIds, setSelectedServicesIds] = useState<
    Service["id"][]
  >([]);
  const [selectedServicesIdsError, setSelectedServicesIdsError] = useState<string>();


  useEffect(() => {
    getServices()
      .then((data) => {
        setServices(data);
      });
  }, []);

  const handleServicePressed = (serviceId: string) => {
    setSelectedServicesIdsError(undefined);
    
    setSelectedServicesIds((prevIds) => {
      if (!prevIds.includes(serviceId)) {
        return [...prevIds, serviceId];
      } else if (prevIds.includes(serviceId)) {
        return prevIds.filter((id) => id !== serviceId);
      }
      return prevIds;
    });
  };

  const validateName = (): void => {
    setNameError(undefined);

    if (name.length < 2) {
      setNameError("Numele trebuie să conțină cel puțin două caractere.")
    } else if (name.length > 50) {
      setNameError("Numele nu poate să conțină mai mult de 50 de caractere.");
    } else if (!/^[a-zA-Z\s'-]+$/.test(name)) {
      setNameError("Numele poate să conțină numai litere, spații, apostrofuri sau cratime.");
    };
  }

  const validateEmail = (): void => {
    setEmailError(undefined);

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (!email) {
      setEmailError("E-mailul este obligatoriu.");
    } else if (email.length > 254) {
      setEmailError("E-mailul nu poate să conțină mai mult de 254 de caractere.");
    } else if (!emailRegex.test(email)) {
      setEmailError("E-mailul nu are forma validă.");
    }
  }

  const validateServicesIds = (): void => {
    setSelectedServicesIdsError(undefined);

    if (selectedServicesIds.length === 0) {
      setSelectedServicesIdsError("Selectează cel puțin un serviciu.")
    }
  }

  const onSubmit = (): void => {
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

    validateName();
    validateEmail();
    validateServicesIds();

    if (nameError || emailError || selectedServicesIdsError) {
      return;
    }

    setFormState("LOADING");
    submitData();
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
          onChangeName={setName}
          onChangeEmail={setEmail}
          onSubmit={onSubmit}
          formState={formState}
          nameError={nameError}
          emailError={emailError}
          selectedServicesIdsError={selectedServicesIdsError}
        />
      </div>
    </div>
  );
}
