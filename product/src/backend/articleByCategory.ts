import { get } from "./client";

export type ArticleTitle = {
  id: string;
  title: string;
};

export type ArticlesByCategory = {
  categories: {
    title: string;
    articleTitles: ArticleTitle[];
  }[];
};

export const getArticlesByCategory = async (): Promise<ArticlesByCategory> => {
  const categories = await get(`api/categories`);
  const c = (await categories.json())["data"]
  console.log("cat: ", c)

  c.map((cc, i) => {
  const titles = get(`api/articles?populate=*&filters[Categories][Title][$eq]=${cc}&sort=createdAt:desc&pagination[limit]=3`)
    console.log("cc ",cc)
    console.log("tit ", titles)
  })

  const titles = await get(`api/articles?populate=*&filters[Categories][Title][$eq]=${c}&sort=createdAt:desc&pagination[limit]=3`)
  const titless = (await titles.json())["data"]

  console.log(titless)
  const articles = await get(`api/articles?populate=*&sort=createdAt:desc`)
  const response = (await articles.json())["data"]

  return articles.json();
};
