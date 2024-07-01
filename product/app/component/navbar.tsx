"use client";
import { gotu } from "@/app/ui/fonts";
import { PiInstagramLogoLight } from "react-icons/pi";

export default function Navbar() {
  return (
    <nav className={`${gotu.className} z-50 sticky top-0 bg-beige-100/80`}
    style={{ '--navbar-height': 'var(--navbar-height)' } as React.CSSProperties}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      style={{ height: 'var(--navbar-height)' }}>
        <a href="#top">
          <button
            type="button"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl whitespace-nowrap">
              SITE PRODUCTIVITATE
            </span>
          </button>
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul
            className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 
        md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 
        md:border-0 md:bg-transparent "
          >
            <li>
              <a href="#aboutMe">
                <button
                  className="relative inline-flex items-center justify-center overflow-hidden 
                  text-gray-900 rounded-lg group hover:bg-beige-200 hover:rounded-2xl mt-2.5 mb-2.5 px-2.5 ease-in duration-200"
                >
                  <span className="relative leading-9 transition-all ease-in duration-75 text-lg">
                    DESPRE MINE
                  </span>
                </button>
              </a>
            </li>
            <li>
              <a href="#articles">
                <button
                  className="relative inline-flex items-center justify-center overflow-hidden 
              text-gray-900 rounded-lg group hover:bg-beige-200 hover:rounded-2xl mt-2.5 mb-2.5 px-2.5 ease-in duration-200"
                >
                  <span className="relative leading-9 transition-all ease-in duration-75 text-lg">
                    ARTICOLE
                  </span>
                </button>
              </a>
            </li>
            <li>
              <a href="#services">
                <button
                  className="relative inline-flex items-center justify-center overflow-hidden 
              text-gray-900 rounded-lg group hover:bg-beige-200 hover:rounded-2xl mt-2.5 mb-2.5 px-2.5 ease-in duration-200"
                >
                  <span className="relative leading-9 transition-all ease-in duration-75 text-lg">
                    LUCREAZĂ CU MINE
                  </span>
                </button>
              </a>
            </li>
            <li>
              <a href="#instagram">
                <button className="text-3xl text-gray-900 mt-2.5 mb-2.5 px-2">
                <PiInstagramLogoLight />
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
