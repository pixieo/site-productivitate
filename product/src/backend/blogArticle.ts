import { get } from "./client";

export type BlogArticle = {
  title: string;
  content: string;
};

export const getArticle = async (id: string): Promise<BlogArticle> => {
  const response = await get(`article?id=${id}`);
  return await response.json();
};
