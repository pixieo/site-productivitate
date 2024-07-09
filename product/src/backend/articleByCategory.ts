import { get } from "./client";

export type Article = {
  id: number;
  attributes: {
    Title: string;
  };
};

export type Category = {
  id: number;
  attributes: {
    Title: string;
  };
};

export type CategoryWithArticle = {
  category: Category;
  articles: Article[];
};

export const getArticlesByCategory = async (): Promise<
  CategoryWithArticle[]
> => {
  const categoriesWithArticles: CategoryWithArticle[] = [];

  const categoriesResponse = await get(`api/categories?sort=Title`);
  const categories = (await categoriesResponse.json())["data"] as Category[];

  await Promise.all(categories.map(async (category) => {
    const articlesForCategoryResponse = await get(
      `api/articles?populate=*&filters[Categories][id][$eq]=${category.id}&sort=createdAt:desc&pagination[limit]=3`
    );

    categoriesWithArticles.push({
      category: category,
      articles: (await articlesForCategoryResponse.json())["data"] as Article[],
    });
  }));

  return categoriesWithArticles;
};
