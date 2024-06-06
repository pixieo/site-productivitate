"use client";
import { use, useEffect, useState } from "react";
import { gotu } from "@/app/ui/fonts";
import { ArticlePreview, getArticlesPreviews } from "../backend/articles";

export default function ArticlesPreview() {
  const [isClickedProd, setIsClickedProd] = useState(true);
  const [isClickedIT, setIsClickedIT] = useState(false);

  const [articles, setArticles] = useState<ArticlePreview[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isClickedIT) {
      getArticlesPreviews('IT')
      .then((data) => {
        setArticles(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.toString());
        setIsLoading(false);
      });
    } else if (isClickedProd) {
      getArticlesPreviews('productivitate')
      .then((data) => {
        setArticles(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.toString());
        setIsLoading(false);
      });
    }
  }, [isClickedIT, isClickedProd]);



  const articlesProd = {
    isClicked: isClickedProd,
    imgSrcProd: ["/bg2.jpg", "/bg1.jpg", "/bg3.jpg"],
    imgAltProd: ["article image", "article image", "article image"],
  };
  const articlesIT = {
    isClicked: isClickedIT,
    imgSrcIT: ["/bg5.jpg", "/bg6.jpg", "/bg7.jpg"],
    imgAltIT: ["article image", "article image", "article image"],
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div id="articles" className="pt-28">
      <div
        className={`${gotu.className} mb-10 flex gap-32 justify-center text-2xl`}
      >
        <button
          className="bg-beige-300 rounded-3xl py-1 px-16 border-2 border-beige-300 hover:border-beige-400"
          onClick={() => {
            setIsClickedIT(false);
            setIsClickedProd(true);
          }}
        >
          PRODUCTIVITATE
        </button>
        <div className="bg-beige-300 rounded-2xl h-11 w-2"></div>
        <button
          className="bg-beige-300 rounded-3xl py-1 px-32 border-2 border-beige-300 hover:border-beige-400"
          onClick={() => {
            setIsClickedIT(true);
            setIsClickedProd(false);
          }}
        >
          TECH IT
        </button>
      </div>

      <div className="mt-4 mb-20 flex flex-col justify-center h-96 gap-20 md:flex-row">
        {isClickedProd
          ? articles.map((article, index) => (
              <div
                className={`flex flex-col justify-even gap-5 rounded-xl pb-8 w-1/5 bg-beige-300 border-4 border-beige-500 h-fit transition-all duration-200 `}
                key={index}
              >
                <img
                  className="object-cover m-2 max-h-40 max-w-80 rounded-xl"
                  src={articlesProd.imgSrcProd[index]}
                  alt={articlesProd.imgAltProd[index]}
                />
                <div className="flex flex-col gap-1 text-center px-6 leading-normal ">
                  <p className="text-2xl"> {article.title} </p>
                  <p> {article.preview} </p>
                </div>
              </div>
            ))
          : articles.map((article, index) => (
              <div
                className={`flex flex-col justify-even gap-5 rounded-xl pb-8 w-1/5 bg-beige-300 border-4 border-beige-500 h-fit transition-all duration-200 `}
              >
                <img
                  className="object-cover m-2 max-h-40 max-w-80 rounded-xl"
                  src={articlesIT.imgSrcIT[index]}
                  alt={articlesIT.imgAltIT[index]}
                />
                <div
                  className="flex flex-col gap-1 text-center px-6 leading-normal "
                  key={index}
                >
                  <p className="text-2xl"> {article.title} </p>
                  <p> {article.preview} </p>
                </div>
              </div>
            ))}
      </div>

      <div className="flex justify-center mb-20">
        <button className="bg-beige-300 rounded-3xl text-lg py-1 px-10 border-2 border-beige-400 hover:bg-beige-500 hover:border-beige-300 duration-500 ">
          VEZI TOATE ARTICOLELE
        </button>
      </div>
    </div>
  );
}
