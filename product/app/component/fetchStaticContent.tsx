"use client";
import { useEffect, useState } from "react";
import { gotu } from "@/app/ui/fonts";
import { StaticContent, getStaticContent } from "../backend/articles";

export default function FetchStaticContent({ type }) {
  const [data, setData] = useState<StaticContent>();
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
    return <div>Loading...</div>;
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
      <p className={`text-xl text-gray-800 md:text-2xl md:leading-normal`}>
        {data?.content}
      </p>
    </>
  );
}
