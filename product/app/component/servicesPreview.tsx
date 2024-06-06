import { useState } from "react";
import { Service } from "../backend/services";

type ServicesPreviewProps = {
  services: Service[];
  selectedServicesIds: Service['id'][];
  onServicePressed: (serviceId: number) => void;
};


export default function ServicesPreview(props: ServicesPreviewProps) {
  

  return (
    <div className="w-1/2 flex flex-col  md:flex-row gap-20">
      {props.services.map((service, index) => (
        <div
          key={index}
          onClick={() => {
            props.onServicePressed(service.id)
          }}
          className={`flex flex-col justify-even gap-5 rounded-xl pb-8 w-2/5 bg-beige-500 h-fit 
                      transition duration-500 hover:scale-105 ring-4 select-none cursor-pointer
          ${props.selectedServicesIds.includes(service.id) ? "ring-beige-600/70" : "ring-transparent"}
          `}
        >
          <img
            className="object-cover m-2 max-h-40 max-w-80 rounded-xl"
            src={service.imgLink}
            alt={service.imgDescription}
          />

          <div className="flex flex-col gap-1 text-center px-6">
            <p className="text-2xl"> {service.title} </p>
            <p>{service.preview}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
