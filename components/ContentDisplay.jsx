import { getDocumentContent } from "@/lib/doc";
import Link from "next/link";
import Tag from "./Tag";

export default async function ContentDisplay({ id }) {
  const documentContent = await getDocumentContent(id);
  // console.log(documentContent);

  return (
    <>
      <article class="prose dark:prose-invert">
        <h1>{documentContent.title}</h1>
        <div>
          <span>Publish On: {documentContent.date}</span>
          by{" "}
          <Link href={`/authors/${documentContent.author}`}>
            {documentContent.author}
          </Link>{" "}
          Under the{" "}
          <Link href={`/categories/${documentContent.category}`}>
            {documentContent.category}
          </Link>{" "}
          category
        </div>
        <dir>
          {documentContent.tags &&
            documentContent.tags.map((tag) => <Tag key={tag} tag={tag} />)}
        </dir>
        <div
          className="lead"
          dangerouslySetInnerHTML={{ __html: documentContent.contentHtml }}
        />
      </article>
    </>
  );
}
