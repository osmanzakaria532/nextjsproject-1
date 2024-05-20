import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentByTags } from "@/utils/doc-util";

export default function TagsPage({ params: { name } }) {
  const docs = getDocuments();
  const matchedDocuments = getDocumentByTags(docs, name);

  return (
    <>
      <ContentDisplay id={matchedDocuments[0].id} />
    </>
  );
}
