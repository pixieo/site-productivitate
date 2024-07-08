"use client";

import { IoIosArrowForward } from "react-icons/io";
import { gotu, lora } from "../ui/fonts";
import ArticleCategory from "./articleCategory";
import ArticleDate from "./articleDate";
import { useEffect, useState } from "react";
import {
  ArticlesByCategory,
  getArticlesByCategory,
} from "../backend/articleByCategory";
import { useRouter } from "next/router";
import { ArticleByDate, getArticleByDate } from "src/backend/articleByDate";

export default function ArticleDisplay() {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  const [articlesByCategory, setArticlesByCategory] = useState<
    ArticlesByCategory | undefined
  >(undefined);

  const [articleByDate, setArticleByDate] = useState<
  ArticleByDate | undefined
>(undefined);

  useEffect(() => {
    getArticlesByCategory().then((data) => {
       setArticlesByCategory(data);
    });
    getArticleByDate().then((data) => {
      setArticleByDate(data);
    })
  }, []);

  const handleArticleClick = (id: string) => {
    router.push(`/blog/${id}`);
  };
  console.log("F2", articleByDate)
  return (
    <div className={`${lora.className} flex justify-center`}>
      <div className="flex flex-col gap-[1rem] w-[70rem]">
        <div className="flex flex-col gap-3 justify-center items-center h-[12rem]">
          <div className={`text-3xl font-bold`}>Toate articolele</div>
          <button
            onClick={() => setToggle(!toggle)}
            className="text-slate-600/70 flex items-center"
          >
            <div className={`${gotu.className} text-xl text-slate-600/70`}>
              Ordonate {!toggle ? " în funcție de categorie" : "cronologic"}
            </div>
            <IoIosArrowForward />
          </button>
        </div>
        {articlesByCategory === undefined ? (
          <div></div>
        ) : !toggle ? (
          <ArticleCategory
            categoriesAndTitles={articlesByCategory}
            onArticleClick={handleArticleClick}
          />
        ) : (
          <ArticleDate
            articles={articleByDate}
            onArticleClick={handleArticleClick}
          />
        )}
      </div>
    </div>
  );
}
