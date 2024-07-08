export const get = async (path: string): Promise<Response> => {
  const response = await fetch(`http://localhost:1337/${path}`);

  if (!response.ok) {
    throw Error(
      `Failed to backend data from path ${path}. Response: ${response}`
    );
  }
  return response;
};
