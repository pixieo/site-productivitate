import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BlogArticle, getArticle } from "src/backend/blogArticle";
import BlogNavbar from "src/component/blogNavbar";
import { lora } from "src/ui/fonts";

export default function Article() {
  const params = useParams<{ articleId: string }>();

  const [article, setArticle] = useState<BlogArticle | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (params !== null) {
      getArticle(params.articleId).then((data) => {
        setArticle(data);
        setIsLoading(false);
      });
    }
  }, [params]);

  return (
    <>
      {isLoading ? (
        <>Loading</>
      ) : (
        <div>
          <BlogNavbar />
          <div className="flex justify-center">
            <div
              className={`${lora.className} flex flex-col w-[55rem] items-center px-[3rem] py-[4rem] gap-[4rem] bg-white/70 my-[4rem]`}
            >
              <div className="text-3xl text-center">{article?.title}</div>
              <div className="text-xl leading-loose">{article?.content}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
