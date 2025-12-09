import { notFound } from "next/navigation";

const articoli = {
  "primo-post": { titolo: "Il mio primo post", contenuto: "..." },
};

export default async function Article({ params }) {
  const { slug } = await params;
  const articolo = articoli[slug];

  if (!articolo) notFound();

  return (
    <>
      <h1>{articolo.titolo}</h1>
      <p>{articolo.contenuto}</p>
    </>
  );
}
