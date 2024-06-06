"use client";
import Image from "next/image";
import FetchStaticContent from "./staticContent";

export default function AboutMe() {
  return (
    <div className="h-standard mt-4 flex flex-col md:flex-row" id="aboutMe">
    <div className="flex flex-wrap justify-center content-center rounded-xl">
      <div className="flex flex-col ml-24 mr-20 bg-beige-300 rounded-xl px-14 py-10 gap-6 text-right">
        <FetchStaticContent type={'Descriere personala'}/>
      </div>
    </div>
    <div className="flex items-center justify-center">
      <Image
        src="/fruit.jpg"
        width={710}
        height={0}
        alt="Image substitute for self presentation"
      />
    </div>
  </div>
  );
}
