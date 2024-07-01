"use client";
import StaticContent from "./staticContent";
import Image from "next/image";

export default function AboutSite() {
  return (
    <div className="max-w-[85rem] mx-auto mb-8 flex full-screen-minus-nav items-center justify-center flex-col md:flex-row pr-10">
      <div className="flex items-center justify-center p-1 md:w-2/5 md:pr-20 md:py-1">
        <Image
          src="/greens.jpg"
          width={350}
          height={350}
          className="rounded-xl"
          alt="Image substitute for site presentation"
        />
      </div>
      <div className="flex flex-col flex-wrap justify-center gap-6 rounded-xl px-14 py-10 md:w-7/12 bg-beige-300">
        {<StaticContent type={"site-description"} />}
      </div>
    </div>
  );
}
