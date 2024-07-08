import { get } from "./client";

export type StaticContent = {
  Title: string;
  Content: string;
};

export const getStaticContent = async (
  type: string
): Promise<StaticContent> => {
  const response = await get(`api/${type}`);
  return (await response.json())["data"]["attributes"];
};
