import { get } from "./client";

export type Article = {
  title: string;
  content: string;
};

export const getArticlesPreviews = async (id: string): Promise<Article[]> => {
  const response = await get(`article?id=${id}`);
  return await response.json();
};
