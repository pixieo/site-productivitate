import { get } from "./client";

export type ArticleTitle = {
  id: string;
  title: string;
};
//add img_url column  in article table
export type Article = {
  id: string;
  img_url: string;
  title: string;
  preview: string;
  created_at: string;
  tags: string;
};

export type BlogContentResponse = {
  categories: {
    title: string;
    articleTitles: ArticleTitle[];
  }[];
  articles: Article[];
};

export const getBlogContent = async (): Promise<BlogContentResponse> => {
  const response = await get(`blog-contents`);
  return await response.json();
};
