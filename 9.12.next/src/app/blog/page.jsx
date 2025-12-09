import Link from "next/link";

const articoli = [
  { slug: "primo-post", titolo: "Il mio primo post" },
  { slug: "guida-nextjs", titolo: "Guida completa a Next.js" },
];

export default function BlogHome() {
  return (
    <div>
      {articoli.map((a) => (
        <Link key={a.slug} href={`/blog/${a.slug}`}>
          {a.titolo}
        </Link>
      ))}
    </div>
  );
}
