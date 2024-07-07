"use client";
import { useEffect, useState } from "react";
import { gotu } from "../ui/fonts";
import {
  StaticContent as StaticContentData,
  getStaticContent,
} from "../backend/staticContent";

type StaticContentProps = {
  type: string;
};

export default function StaticContent({ type }: StaticContentProps) {
  const [data, setData] = useState<StaticContentData>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    getStaticContent(type)
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error.toString());
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading && type === "site-description") {
    return (
      <div className="min-h-[16.2rem] min-w-[48.4rem]">
        <div className="flex animate-pulse space-x-4 w-[41rem]">
          <div className="flex-1 space-y-[3rem] pt-5 pb-1">
            <div className="grid grid-cols-3">
              <div className="col-span-1 h-5 rounded-xl bg-white"></div>
            </div>
            <div className="space-y-5">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 h-3 rounded-md bg-white"></div>
                <div className="col-span-1 h-3 rounded-md bg-white"></div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1 h-3 rounded-md bg-white"></div>
                <div className="col-span-2 h-3 rounded-md bg-white"></div>
                <div className="col-span-1 h-3 rounded-md bg-white"></div>
              </div>
              <div className="h-3 rounded-md bg-white"></div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 h-3 rounded-md bg-white"></div>
                <div className="col-span-1 h-3 rounded-md bg-white"></div>
              </div>
              <div className="h-3 rounded-md bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading && type === "self-description") {
    return (
      <div className="min-h-[22.3rem] min-w-[41.2rem]">
        <div className="flex animate-pulse space-x-4 w-[41rem]">
          <div className="flex-1 space-y-[3rem] pt-5 pb-1">
            <div className="grid grid-cols-3">
              <div className="col-span-1"></div>
              <div className="col-span-1"></div>
              <div className="col-span-1 h-6 rounded-xl bg-white"></div>
            </div>
            <div className="space-y-5">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 h-3 rounded-md bg-white"></div>
                <div className="col-span-1 h-3 rounded-md bg-white"></div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1 h-3 rounded-md bg-white"></div>
                <div className="col-span-2 h-3 rounded-md bg-white"></div>
                <div className="col-span-1 h-3 rounded-md bg-white"></div>
              </div>
              <div className="h-3 rounded-md bg-white"></div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 h-3 rounded-md bg-white"></div>
                <div className="col-span-1 h-3 rounded-md bg-white"></div>
              </div>
              <div className="h-3 rounded-md bg-white"></div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 h-3 rounded-md bg-white"></div>
                <div className="col-span-1 h-3 rounded-md bg-white"></div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1 h-3 rounded-md bg-white"></div>
                <div className="col-span-2 h-3 rounded-md bg-white"></div>
                <div className="col-span-1 h-3 rounded-md bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <p
        className={`${gotu.className} text-5xl text-gray-800 md:leading-normal text-5xl tracking-wide`}
      >
        {data?.title}
      </p>
      <p className={`text-xl leading-relaxed text-gray-800 `}>
        {data?.content}
      </p>
    </>
  );
}
