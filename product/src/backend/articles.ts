import { get } from "./client";

export type ArticlePreview = {
  img_url: string;
  title: string;
  preview: string;
};

export const getArticlesPreviews = async (tagTitle: string): Promise<ArticlePreview[]> => {
  const response = await get(`articles-preview?tagTitle=${tagTitle}`);
  return await response.json();
};
