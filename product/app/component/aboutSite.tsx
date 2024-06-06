"use client";
import StaticContent from "./staticContent";
import Image from "next/image";

export default function AboutSite() {
  return (
    <div className="mt-16 mb-52 pl-12 pr-24 flex grow flex-col gap-8 md:flex-row">
      <div className="flex items-center justify-center p-1 md:w-2/5 md:pr-20 md:py-1">
        <Image
          src="/greens.jpg"
          width={350}
          height={350}
          className="rounded-xl"
          alt="Image substitute for site presentation"
        />
      </div>
      <div className="flex flex-col flex-wrap justify-center gap-6 rounded-xl px-14 py-10 md:w-7/12  bg-beige-300">
        {<StaticContent type={'Descriere site'} />}
      </div>
    </div>
  );
}
