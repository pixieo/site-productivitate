import { get } from "./client";

export type ArticlePreview = {
  attributes: {
    Title: string,
    Preview: string,
    Image: {
      data: {
        attributes: {
          url: string;
        } 
      }
    }
  }
};


export const getArticlesPreviews = async (tagTitle: string): Promise<ArticlePreview[]> => {
  const responseId = await get(`api/categories?filters[Title][$eq]=${tagTitle}`);
  const categoryId = (await responseId.json())["data"];

  const response = await get(`api/articles?populate=*&filters[Categories][id][$eq]=${categoryId[0].id}&pagination[limit]=3`);
  return (await response.json())["data"];
};
