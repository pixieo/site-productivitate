import { useParams } from "next/navigation";

export default function Article() {
    const {articleId} = useParams<{ articleId: string }>();

    return (
      <>{articleId}</>
    );
  }
  