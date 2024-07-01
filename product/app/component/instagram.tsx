"use client";
import Image from "next/image";
import Link from "next/link";
import { gotu } from "../ui/fonts";

export default function Instagram() {
  return (
    <div className={`${gotu.className} mt-8 mb-14 flex grow flex-col gap-4`} id="instagram">
          <div className="flex justify-center mb-14">
            <Link
              href={"https://www.instagram.com/andreea.zosin/"}
              target="_blank"
              className="bg-beige-300 rounded-3xl py-1 px-10 border-2 border-beige-300 hover:border-beige-600 text-xl ease-in duration-150"
            >
              Urmărește-mă pe Instagram
            </Link>
          </div>

          <div className="flex flex-row gap-1 px-5">
            <Link
              href={"https://www.instagram.com/p/C5BzFHwIZr4/"}
              target="_blank"
              className="hover:opacity-70 transition-opacity"
            >
              <Image
                src="/insta1.png"
                width={350}
                height={350}
                className="hover:bg-white"
                alt="Image substitute for site presentation"
              ></Image>
            </Link>

            <Link
              href={"https://www.instagram.com/p/C3NLNcisfLZ/"}
              target="_blank"
              className="hover:opacity-70 transition-opacity"
            >
              <Image
                src="/insta2.png"
                width={350}
                height={350}
                className="hover:bg-white"
                alt="Image substitute for site presentation"
              ></Image>
            </Link>

            <Link
              href={"https://www.instagram.com/p/C3F78LboAF_/"}
              target="_blank"
              className="hover:opacity-70 transition-opacity"
            >
              <Image
                src="/insta3.png"
                width={350}
                height={350}
                className="hover:bg-white"
                alt="Image substitute for site presentation"
              ></Image>
            </Link>

            <Link
              href={"https://www.instagram.com/p/C3DK8xaMxJV/"}
              target="_blank"
              className="hover:opacity-70 transition-opacity"
            >
              <Image
                src="/insta4.png"
                width={350}
                height={350}
                className="hover:bg-white"
                alt="Image substitute for site presentation"
              ></Image>
            </Link>

            <Link
              href={"https://www.instagram.com/p/C4DHpuQI-kj/"}
              target="_blank"
              className="hover:opacity-70 transition-opacity"
            >
              <Image
                src="/insta5.png"
                width={350}
                height={350}
                className="hover:bg-white"
                alt="Image substitute for site presentation"
              ></Image>
            </Link>
          </div>
        </div>
  );
}
