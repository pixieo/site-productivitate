import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Service } from "../backend/services";
import { gotu } from "../ui/fonts";

type ServicesPreviewProps = {
  services: Service[];
  selectedServicesIds: Service["id"][];
  onServicePressed: (serviceId: Service["id"]) => void;
};

export default function ServicesPreview(props: ServicesPreviewProps) {
  return (
    <div className="w-1/2 flex flex-col md:flex-row gap-20">
      {props.services.map((service, index) => {
        return (
        <div
          key={index}
          onClick={() => {
            props.onServicePressed(service.id);
          }}
          className={`flex flex-col justify-even gap-5 rounded-xl pb-8 w-2/5 bg-beige-500 h-fit 
                      transition duration-300 hover:scale-105 ring-4 select-none cursor-pointer
          ${
            props.selectedServicesIds.includes(service.id)
              ? "ring-beige-600/70"
              : "ring-transparent"
          }
          `}
        >
          <img className="object-cover m-2 max-h-40 max-w-80 rounded-xl" src={`http://localhost:1337${service.attributes.Image.data.attributes.url}`}/>

          <div className="flex flex-col gap-1  px-6">
            <p className={`${gotu.className} text-lg text-center`}>
              {service.attributes.Title}
            </p>
            <p className="text-center">{service.attributes.Preview}</p>
          </div>
        </div>
      )})}
    </div>
  );
}
