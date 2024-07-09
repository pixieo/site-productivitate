import { get } from "./client";

export type ArticleByDate = {
  id: number;
  attributes: {
    Image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    Categories: {
      data: {
        attributes: {
          Title: string;
        };
      }[];
    };
    Content: string;
    Title: string;
    Preview: string;
    publishedAt: string;
  };
};

export const getArticleByDate = async (): Promise<ArticleByDate[]> => {
  const articlesDesc = await get(`api/articles?populate=*&sort=createdAt:desc`);
  const response = (await articlesDesc.json())["data"];
  return await response;
};
