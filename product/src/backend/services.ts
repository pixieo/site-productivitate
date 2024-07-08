import { get } from "./client";

// type ServiceImg = Pick<Service, "imgLink" | "imgDescription">;

// const SERVICE_ID_TO_IMG : Record<Service['id'], ServiceImg> = {
//   "1": {
//     "imgLink": "/bg2.jpg",
//     "imgDescription": "service image"
//   },
//   "2": {
//     "imgLink": "/bg3.jpg",
//     "imgDescription": "service image"
//   },
// };

// const DEFAULT_SERVICE_IMG: ServiceImg = {
//   "imgLink": "/bg3.jpg",
//   "imgDescription": "service image"
// }

export type Service = {
  id: string;
  attributes: {
    Title: string;
    Preview: string;
    Image: {
      data: {
        attributes: {
          url: string;
        } 
      }
    }
  }
};

export const getServices = async (): Promise<Service[]> => {
  const response = await get("api/services?populate=*");
  const services = (await response.json())["data"];
  // for (const service of services) {
  //   const serviceImg = SERVICE_ID_TO_IMG[service.id] || DEFAULT_SERVICE_IMG;

  //   service.imgLink = serviceImg.imgLink;
  //   service.imgDescription = serviceImg.imgDescription;
  // }
  
  return services;
};
