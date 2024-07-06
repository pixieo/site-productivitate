"use client";

import { BlogContentResponse } from "../backend/blogContents";
import { gotu, lora } from "../ui/fonts";

export default function ArticleCategory({
  categoriesAndTitles,
}: {
  categoriesAndTitles: BlogContentResponse["categories"];
}) {
  return (
    <div className={`${lora.className} flex justify-center cursor-default`}>
      <div className="flex flex-col gap-[4rem] w-[70rem]">
        <div className="grid grid-cols-2 gap-[6rem]">
          {categoriesAndTitles.map((category, index) => (
            <div
              key={index}
              className="cols-span-1 h-[17rem] bg-white/70 flex items-center"
            >
              <div className="flex flex-col gap-[3rem] p-4">
                <div className="text-xl font-bold">{category.title}</div>
                <div className="flex flex-col gap-[2rem]">
                  {category.articleTitles.map((article, index) => (
                    <div key={index} 
                    style={{display: "inline-block"}}
                    className={`${gotu.className} font-bold border-transparent border-2 hover:border-b-beige-600 hover:bg-beige-600/10 inline-block rounded-sm ease-in-out duration-150`}>
                      {article.title}
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
