"use client";

import { IoIosArrowForward } from "react-icons/io";
import { gotu, lora } from "../ui/fonts";
import ArticleCategory from "./articleCategory";
import ArticleDate from "./articleDate";
import { useEffect, useState } from "react";
import {
  Article,
  BlogContentResponse,
  getBlogContent,
} from "../backend/blogContents";
import { useRouter } from "next/router";

export default function ArticleDisplay() {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  const [blogContent, setBlogContent] = useState<
    BlogContentResponse | undefined
  >(undefined);

  useEffect(() => {
    getBlogContent().then((data) => {
       setBlogContent(data);
    });
  }, []);

  const handleArticleClick = (id: Article["id"]) => {
    router.push(`/blog/${id}`);
  };

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
        {blogContent === undefined ? (
          <div></div>
        ) : !toggle ? (
          <ArticleCategory
            categoriesAndTitles={blogContent.categories}
            onArticleClick={handleArticleClick}
          />
        ) : (
          <ArticleDate
            articles={blogContent.articles}
            onArticleClick={handleArticleClick}
          />
        )}
      </div>
    </div>
  );
}
