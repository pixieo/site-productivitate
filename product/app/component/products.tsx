"use client";
import { gotu } from "@/app/ui/fonts";

export default function Products() {

    
  return (
    <div className="pt-32" id="services">
      <div
        className={`${gotu.className} ml-14 mb-16 flex gap-20 justify-center w-1/2 text-lg hover:cursor-default`}
      >
        <p className="text-3xl">LUCREAZĂ CU MINE</p>
        <div className="py-1 px-10 border-b-2 border-beige-400">
          ALEGE UN SERVICIU
        </div>
      </div>

      <div className="mt-4 mb-40 px-5 flex flex-col justify-center items-center h-96 gap-20 md:flex-row">
        <div className="w-1/2 flex flex-col  md:flex-row gap-20">
          <div className="flex flex-col justify-even gap-5 rounded-xl pb-8 w-2/5 bg-beige-500 h-fit transition duration-500 hover:scale-105">
            <img
              className="object-cover m-2 max-h-40 max-w-80 rounded-xl"
              src="/bg2.jpg"
              alt="image of article"
            />

            <div className="flex flex-col gap-1 text-center px-6">
              <p className="text-2xl"> Lorem ipsum </p>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-even gap-5 rounded-xl pb-8 w-2/5 bg-beige-500 h-fit duration-500 hover:scale-105">
            <img
              className="object-cover m-2 max-h-40 max-w-80 rounded-xl"
              src="/bg3.jpg"
              alt="image of article"
            />

            <div className="flex flex-col gap-1 text-center px-6">
              <p className="text-2xl"> Lorem ipsum </p>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
            </div>
          </div>
        </div>

        <form className={`${gotu.className} bg-beige-500 h-3/4 rounded-xl `}>
          <div className="mt-8 mb-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3 px-4">
              <label
                htmlFor="full-name"
                className="block leading-6 text-gray-900"
              >
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
                      focus:ring-2 focus:ring-inset focus:ring-beige-400 sm:text-sm sm:leading-6"
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
                    ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-beige-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6 pr-4">
            <button
              type="submit"
              className="rounded-md px-3 py-2 font-semibold 
                  border-2 border-beige-400 bg-beige-200
                  hover:bg-beige-200 focus-visible:outline focus-visible:outline-2 
                  focus-visible:outline-offset-2 focus-visible:outline-beige-400"
            >
              Trimite
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
