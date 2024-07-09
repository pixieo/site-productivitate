import { get } from "./client";

export type BlogArticle = {
  attributes: {
    Content: string;
    Title: string;
  }
};

export const getArticle = async (id: string): Promise<BlogArticle> => {
  const response = await get(`api/articles/${id}`);

  return (await response.json())["data"];
};
