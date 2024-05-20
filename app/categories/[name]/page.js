import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentByCategory } from "@/utils/doc-util";

export default function CategoriesPage({ params: { name } }) {
  const docs = getDocuments();
  const matchedDocuments = getDocumentByCategory(docs, name);

  return (
    <>
      <ContentDisplay id={matchedDocuments[0].id} />
    </>
  );
}
