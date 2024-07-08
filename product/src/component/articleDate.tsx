"use client";
import Image from "next/image";

import { Article, BlogContentResponse } from "../backend/blogContents";
import { gotu, lora } from "../ui/fonts";

export default function ArticleDate({
  articles,
  onArticleClick,
}: {
  articles: BlogContentResponse["articles"];
  onArticleClick: (articleId: Article["id"]) => void;
}) {

  return (
    <div className={`${lora.className} flex justify-center cursor-default`}>
      <div className="flex flex-col w-[70rem]">
        <div className="grid grid-cols-1">
          <div className={`cols-span-1 bg-white/70 flex flex-col items-center`}>
            {articles.map((article, index) => (
              <div
                onClick={() => onArticleClick(article.id)}
                key={index}
                className="flex p-[3rem] gap-[2rem] hover:bg-beige-600/30 hover:border-y-beige-600 border-transparent border-2 hover:cursor-pointer transition ease-in duration-200 "
              >
                <div className="w-1/6">
                  <img className="object-cover w-full h-[10rem]" src={article.img_url} alt="image" />
                </div>
                <div className="w-5/6 flex flex-col align-center">
                  <div className={`font-extrabold text-xl`}>
                    {" "}
                    {article.title}{" "}
                  </div>
                  <div> {article.preview} </div>
                  <div className={`${gotu.className} text-slate-700/70`}>
                    {" "}
                    {article.tags}{" "}
                  </div>
                  <div className={`${gotu.className} text-sm text-slate-700/40 text-end`}>{article.created_at.substring(0, 10)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
