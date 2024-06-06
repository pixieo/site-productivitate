"use client";
import { gotu } from "@/app/ui/fonts";
import FormText from "./formText";
import ServicesPreview from "./servicesPreview";
import { useState, useEffect } from "react";
import { Service, getServices } from "../backend/services";

type ComponentProps = {
  prop1: string;
}

function Component(props: ComponentProps) {
  
}

export default function From() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

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
  }, []);

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
        return prevIds.filter((id) => id !== serviceId)
      }
      return prevIds;
    });
  }
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
        <ServicesPreview services={services} selectedServicesIds={selectedServicesIds} onServicePressed={handleServicePressed}/>
        <FormText selectedServicesIds={selectedServicesIds} services={services}/>
      </div>
    </div>
  );
}
