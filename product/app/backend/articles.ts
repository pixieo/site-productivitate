import { get } from "./client";

export type ArticlePreview = {
    title: string;
    preview: string;
}

export type StaticContent = {
    title: string;
    content: string;
}

export const getArticlesPreviews = async (): Promise<ArticlePreview[]> => {
    const response = await get("articlesPreview");
    return await response.json();
}

export const getStaticContent = async (type: string): Promise<StaticContent> => {
    const response = await get(`static-content/${type}`);
    return await response.json();
}