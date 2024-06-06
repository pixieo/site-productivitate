import { get } from "./client";

type ServiceImg = Pick<Service, "imgLink" | "imgDescription">;

const SERVICE_ID_TO_IMG : Record<Service['id'], ServiceImg> = {
  "1": {
    "imgLink": "/bg2.jpg",
    "imgDescription": "service image"
  },
  "2": {
    "imgLink": "/bg3.jpg",
    "imgDescription": "service image"
  },
};

const DEFAULT_SERVICE_IMG: ServiceImg = {
  "imgLink": "/bg3.jpg",
  "imgDescription": "service image"
}

export type Service = {
  id: number;
  title: string;
  preview: string;
  imgLink: string;
  imgDescription: string;
};

export const getServices = async (): Promise<Service[]> => {
  const response = await get("services");
  const services = await response.json();
  
  for (const service of services) {
    const serviceImg = SERVICE_ID_TO_IMG[service.id] || DEFAULT_SERVICE_IMG;

    service.imgLink = serviceImg.imgLink;
    service.imgDescription = serviceImg.imgDescription;
  }

  return services;
};
