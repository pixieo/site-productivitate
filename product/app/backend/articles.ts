import { get } from "./client";

export type ArticlePreview = {
  title: string;
  preview: string;
};

export const getArticlesPreviews = async (tagTitle: string): Promise<ArticlePreview[]> => {
  const response = await get(`articlesPreview?tagTitle=${tagTitle}`);
  return await response.json();
};
