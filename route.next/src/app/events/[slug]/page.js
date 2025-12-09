import { notFound } from "next/navigation";
import { getEventBySlug } from "../../../lib/events";
import Link from "next/link";

export default async function EventPage({ params }) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) {
    notFound();
  }
  return (
    <main>
      <div>
        <h1>{event.title}</h1>
        <p>{event.description}</p>
        <p>Date: {event.program[0].time}</p>
      </div>
      <section>
        {event.program.map((s) => (
          <div key={s.sessionId}>
            <h2>{s.title}</h2>
            <Link href={`/events/${slug}/${s.sessionId}`}>View Details</Link>
          </div>
        ))}
      </section>
    </main>
  );
}
