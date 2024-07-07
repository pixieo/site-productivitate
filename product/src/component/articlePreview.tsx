"use client";
import { useEffect, useState } from "react";
import { gotu } from "../ui/fonts";
import { ArticlePreview, getArticlesPreviews } from "../backend/articles";

export default function ArticlesPreview() {
  const [isClickedProd, setIsClickedProd] = useState(true);
  const [isClickedIT, setIsClickedIT] = useState(false);

  const [articlesIt, setArticlesIt] = useState<ArticlePreview[]>([]);
  const [articlesProd, setArticlesProd] = useState<ArticlePreview[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const articlesProdImg = {
    isClicked: isClickedProd,
    imgSrcProd: ["/bg2.jpg", "/bg1.jpg", "/bg3.jpg"],
    imgAltProd: ["article image", "article image", "article image"],
  };
  const articlesITImg = {
    isClicked: isClickedIT,
    imgSrcIT: ["/bg5.jpg", "/bg6.jpg", "/bg7.jpg"],
    imgAltIT: ["article image", "article image", "article image"],
  };
  const loadingDiv = () => (
    <div
      className={`flex flex-col delay-150 items-center justify-even gap-4 rounded-xl pb-8 w-1/4 bg-beige-300 border-4 border-beige-500 h-fit ease-in-out transition-all duration-300`}
      style={{ height: "450px" }}
    >
      <div className="flex w-[15rem] animate-pulse space-x-4">
        <div className="flex-1 space-y-[3rem] pb-1 pt-5">
          <div className="h-[8rem] rounded-xl bg-white"></div>
          <div className="space-y-5">
            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-1"></div>
              <div className="col-span-2 h-4 rounded-xl bg-white"></div>
              <div className="col-span-1"></div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 h-2 rounded bg-white"></div>
              <div className="col-span-1 h-2 rounded bg-white"></div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-1 h-2 rounded bg-white"></div>
              <div className="col-span-2 h-2 rounded bg-white"></div>
              <div className="col-span-1 h-2 rounded bg-white"></div>
            </div>
            <div className="h-2 rounded bg-white"></div>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 h-2 rounded bg-white"></div>
              <div className="col-span-1 h-2 rounded bg-white"></div>
            </div>
            <div className="h-2 rounded bg-white"></div>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1 h-2 rounded bg-white"></div>
              <div className="col-span-2 h-2 rounded bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    setIsLoading(true);
    getArticlesPreviews("Tehnologie")
      .then((data) => {
        setArticlesIt(data);
      })
      .catch((error) => {
        setError(error.toString());
      });
    getArticlesPreviews("Productivitate")
      .then((data) => {
        setArticlesProd(data);
      })
      .catch((error) => {
        setError(error.toString());
      });
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const articlesContainer = document.getElementById("articlesContainer");
    if (articlesContainer) {
      articlesContainer.classList.remove("animate-fadein", "animate-fadeout");
      setTimeout(() => {
        articlesContainer.classList.add("animate-fadein");
      }, 0);
    }
  }, [isClickedProd, isClickedIT]);

  if (isLoading) {
    return (
      <div id="articles" className="pt-28">
        <div
          className={`${gotu.className} mb-10 flex gap-32 justify-center text-2xl pr-24`}
        >
          <button
            className={`bg-beige-300 rounded-3xl py-1 px-14 border-2 transition-all ease-in-out duration-350 ${
              isClickedProd
                ? "shadow-md border-beige-600"
                : "border-beige-300 hover:border-beige-600"
            }`}
            onClick={() => {
              setIsClickedIT(false);
              setIsClickedProd(true);
            }}
          >
            PRODUCTIVITATE
          </button>
          <div className="bg-beige-300 rounded-2xl h-11 w-2"></div>
          <button
            className={`bg-beige-300 rounded-3xl py-1 px-16 border-2 transition-all ease-in-out duration-350 ${
              isClickedIT
                ? "shadow-md border-beige-600"
                : "border-beige-300 hover:border-beige-600"
            }`}
            onClick={() => {
              setIsClickedIT(true);
              setIsClickedProd(false);
            }}
          >
            TECH IT
          </button>
        </div>
        <div className="flex justify-center">
          <div
            className="mt-4 mb-20 flex flex-col justify-center h-96 w-5/6 gap-20 md:flex-row"
          >
            {loadingDiv()}
            {loadingDiv()}
            {loadingDiv()}
          </div>
        </div>
        <div className={`${gotu.className} flex justify-center mb-20`}>
          <button className="bg-beige-300 rounded-3xl text-lg py-1 px-10 border-2 border-beige-400 hover:bg-beige-500 hover:border-beige-600 ease-in duration-150 ">
            VEZI TOATE ARTICOLELE
          </button>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div id="articles" className="pt-28">
      <div
        className={`${gotu.className} mb-10 flex gap-32 justify-center text-2xl pr-24`}
      >
        <button
          className={`bg-beige-300 rounded-3xl py-1 px-14 border-2 transition-all ease-in-out duration-350 ${
            isClickedProd
              ? "shadow-md border-beige-600"
              : "border-beige-300 hover:border-beige-600"
          }`}
          onClick={() => {
            setIsClickedIT(false);
            setIsClickedProd(true);
          }}
        >
          PRODUCTIVITATE
        </button>
        <div className="bg-beige-300 rounded-2xl h-11 w-2"></div>
        <button
          className={`bg-beige-300 rounded-3xl py-1 px-16 border-2 transition-all ease-in-out duration-350 ${
            isClickedIT
              ? "shadow-md border-beige-600"
              : "border-beige-300 hover:border-beige-600"
          }`}
          onClick={() => {
            setIsClickedIT(true);
            setIsClickedProd(false);
          }}
        >
          TECH IT
        </button>
      </div>

      <div className="flex justify-center">
        <div
          id="articlesContainer"
          className="mt-4 mb-20 flex flex-col justify-center h-96 w-5/6 gap-20 md:flex-row"
        >
          {isClickedProd
            ? articlesProd.map((article, index) => (
                <div
                  className={`flex flex-col justify-even gap-4 rounded-xl pb-8 w-1/4 bg-beige-300 border-4 border-beige-500 h-fit ease-in-out transition-all duration-300`}
                  key={index}
                  style={{ height: "450px" }}
                >
                  <img
                    className="object-cover m-2 max-h-40 max-w-80 rounded-xl"
                    src={article.img_url}
                    alt={articlesProdImg.imgAltProd[index]}
                  />
                  <div className="flex flex-col gap-1 text-center leading-normal text-clip">
                    <p className={`${gotu.className} px-1 text-xl font-bold`}>
                      {" "}
                      {article.title}{" "}
                    </p>
                    <p className="px-6 truncate line-clamp-[8] whitespace-normal">
                      {" "}
                      {article.preview}{" "}
                    </p>
                  </div>
                </div>
              ))
            : articlesIt.map((article, index) => (
                <div
                  key={index}
                  className={`flex flex-col delay-150 justify-even gap-4 rounded-xl pb-8 w-1/4 bg-beige-300 border-4 border-beige-500 h-fit ease-in-out transition-all duration-300`}
                  style={{ height: "450px" }}
                >
                  <img
                    className="object-cover m-2 max-h-40 max-w-80 rounded-xl"
                    src={article.img_url}
                    alt={articlesITImg.imgAltIT[index]}
                  />
                  <div
                    className="flex flex-col gap-1 text-center leading-normal "
                    key={index}
                  >
                    <p className={`${gotu.className} px-1 text-xl font-bold`}>
                      {" "}
                      {article.title}{" "}
                    </p>
                    <p className="px-6 truncate line-clamp-[8] whitespace-normal">
                      {" "}
                      {article.preview}{" "}
                    </p>
                  </div>
                </div>
              ))}
        </div>
      </div>

      <div className={`${gotu.className} flex justify-center mb-20`}>
        <a href="/blog">
        <button className="bg-beige-300 rounded-3xl text-lg py-1 px-10 border-2 border-beige-400 hover:bg-beige-500 hover:border-beige-600 ease-in duration-150 ">
          VEZI TOATE ARTICOLELE
        </button>
        </a>
      </div>
    </div>
  );
}
