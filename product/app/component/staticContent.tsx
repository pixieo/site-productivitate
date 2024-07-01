"use client";
import { useEffect, useState } from "react";
import { gotu } from "@/app/ui/fonts";
import { StaticContent as StaticContentData, getStaticContent } from "../backend/staticContent";

type StaticContentProps = {
  type: string;
}

export default function StaticContent({type}: StaticContentProps) {
  const [data, setData] = useState<StaticContentData>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getStaticContent(type)
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.toString());
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className=""></div>;
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
