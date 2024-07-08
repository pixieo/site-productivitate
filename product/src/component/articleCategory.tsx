"use client";

import { ArticlesByCategory } from "../backend/articleByCategory";
import { gotu, lora } from "../ui/fonts";

export default function ArticleCategory({
  categoriesAndTitles,
  onArticleClick,
}: {
  categoriesAndTitles: ArticlesByCategory;
  onArticleClick: (articleId: string) => void;
}) {
  return (
    <div className={`${lora.className} flex justify-center cursor-default`}>
      <div className="flex flex-col gap-[4rem] w-[65rem] pb-[5rem]">
        <div className="grid grid-cols-2 gap-[5rem]">
          {categoriesAndTitles.map((category, index) => (
            <div
              key={index}
              className="cols-span-1 bg-white/70 flex"
            >
              <div className="flex flex-col gap-[3rem] p-4">
                <div className="text-xl font-bold">{category.title}</div>
                <div className="flex flex-col gap-[2rem]">
                  {category.articleTitles.map((article, index) => (
                    <div key={index} 
                    onClick={() => onArticleClick(article.id)}
                    className={`${gotu.className} font-bold`}>
                      <div className="hover:cursor-pointer border-transparent border-2 hover:border-b-beige-600 hover:bg-beige-600/10 inline-block rounded-sm text-md ease-in-out duration-150">{article.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
