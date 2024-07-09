"use client";
import { gotu } from "../ui/fonts";
import { PiInstagramLogoLight } from "react-icons/pi";

export default function BlogNavbar() {
  return (
    <nav className={`${gotu.className} z-50 shadow-md top-0 bg-beige-100/80`}
    style={{ '--navbar-height': 'var(--navbar-height)' } as React.CSSProperties}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      style={{ height: 'var(--navbar-height)' }}>
        <a href="/">
            <span className="self-center text-2xl whitespace-nowrap font-bold pl-6">
              BALANCE
            </span>
            </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul
            className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 
        md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 
        md:border-0 md:bg-transparent "
          >
            <li>
              <a href="https://www.instagram.com/andreea.zosin/" target="_blank">
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
