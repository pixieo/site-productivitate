import { get } from "./client";

export type StaticContent = {
  title: string;
  content: string;
};

export const getStaticContent = async (
  type: string
): Promise<StaticContent> => {
  const response = await get(`static-content/${type}`);
  return await response.json();
};
