import { gotu } from "@/app/ui/fonts";
import { Service } from "../backend/services";
import { IoCloseOutline } from "react-icons/io5";

type FormTextProps = {
  selectedServicesIds: Service["id"][];
  services: Service[];
  onServicePressed: (serviceId: Service["id"]) => void;
  onChangeName: (value: string) => void;
  onChangeEmail: (value: string) => void;
  onSubmit: () => void;
  formState: string;
};

export default function FormText(props: FormTextProps) {
  const renderFormFields = () => (
    <div>
      <div className="mt-8 mb-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3 px-4">
          <label htmlFor="full-name" className="block leading-6 text-gray-900">
            Numele complet
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="full-name"
              id="full-name"
              autoComplete="name"
              className="block w-full rounded-md 
                    bg-beige-200
                    border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                    focus:ring-2 focus:ring-inset focus:ring-beige-400 sm:text-sm sm:leading-6 shadow-md"
              onChange={(e) => {
                props.onChangeName(e.target.value);
              }}
            />
          </div>
        </div>
      </div>

      <div className="sm:col-span-4 px-4">
        <label htmlFor="email" className="block leading-6 text-gray-900">
          Email
        </label>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="block w-full bg-beige-200 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset 
                  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-beige-400 sm:text-sm sm:leading-6 shadow-md"
            onChange={(e) => {
              props.onChangeEmail(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex mt-4 mx-4 gap-6 h-8">
        {props.selectedServicesIds.length === 0 ? (
          <div className="text-slate-600/60 mt-2">
            Nu ai selectat niciun serviciu.
          </div>
        ) : (
          props.selectedServicesIds.map((serviceId) => {
            const service = props.services.find(
              (service) => service.id === serviceId
            ) as Service;

            return (
              <div className="group" key={service.id}>
                <div
                  key={service.id}
                  className="bg-beige-200 rounded-md py-1 px-6 shadow-md cursor-pointer relative group-hover:opacity-80 transition duration-200"
                  onClick={() => props.onServicePressed(service.id)}
                >
                  {service.title}
                  <IoCloseOutline className="absolute top-0 right-0 opacity-35 group-hover:opacity-100 transition duration-200" />
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="flex items-center justify-end gap-x-6 pr-4">
        <button
          type="submit"
          className="rounded-md px-3 py-1 font-semibold shadow-md
                border-2 border-beige-400 bg-beige-200 mt-4 ease-in duration-150
                hover:border-beige-600 focus-visible:outline focus-visible:outline-2 
                focus-visible:outline-offset-2 focus-visible:outline-beige-400"
          disabled={props.formState === "LOADING"}
        >
          Trimite
        </button>
      </div>
    </div>
  );

  return (
    <form
      className={`${gotu.className} bg-beige-500 h-4/5 rounded-xl shadow-md`}
      onSubmit={(e) => {
        e.preventDefault();
        props.onSubmit();
      }}
    >
      {props.formState === "INITAL" || "LOADING" ? renderFormFields() : null}

      {props.formState === "SUCCESSFUL" ? (
        <div>
          Mesajul tau a fost trimis. Te voi contacta eu in cel mai scurt timp.
        </div>
      ) : null}
      {props.formState === "UNSUCCESSFUL" ? (
        <div>
          Mesajul tau nu a fost trimis. Incearca mai tarziu. Daca eroarea
          persista, scrie-mi pe Instagram.
        </div>
      ) : null}
    </form>
  );
}
