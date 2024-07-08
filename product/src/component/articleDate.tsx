"use client";

import { gotu, lora } from "../ui/fonts";
import { ArticleByDate } from "src/backend/articleByDate";

export default function ArticleDate({
  articles,
  onArticleClick,
}: {
  articles: ArticleByDate | undefined;
  onArticleClick: (articleId: string) => void;
}) {
  console.log("???")
  console.log("F3", articles)

  return (
    <div className={`${lora.className} flex justify-center cursor-default`}>
      <div className="flex flex-col w-[70rem]">
        <div className="grid grid-cols-1">
          <div className={`cols-span-1 bg-white/70 flex flex-col items-center`}>
            {articles?.map((article, index) => (
              <div
                onClick={() => onArticleClick(article.id)}
                key={index}
                className="flex p-[3rem] gap-[2rem] hover:bg-beige-600/30 hover:border-y-beige-600 border-transparent border-2 hover:cursor-pointer transition ease-in duration-200 "
              >
                <div className="w-1/6">
                  <img className="object-cover w-full h-[10rem]" src={article.attributes.Image.data.attributes.url} alt="image" />
                </div>
                <div className="w-5/6 flex flex-col align-center">
                  <div className={`font-extrabold text-xl`}>
                    {" "}
                    {article.attributes.Title}{" "}
                  </div>
                  <div> {article.attributes.Preview} </div>
                  <div className={`${gotu.className} text-slate-700/70`}>
                    {" "}
                    {article.attributes.Categories.data.attributes.Title}{" "}
                  </div>
                  <div className={`${gotu.className} text-sm text-slate-700/40 text-end`}>{article.attributes.publishedAt.substring(0, 10)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
