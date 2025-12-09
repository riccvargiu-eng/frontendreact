import { getEventBySlug, getSession } from "../../../lib/events";
import { notFound } from "next/navigation";

export default async function SessionPage({ params }) {
  const { slug, sessionId } = await params;
  const event = getEventBySlug(slug);
  const session = getSession(slug, sessionId);
  if (!event || !session) {
    notFound();
  }
  return (
    <main>
      <h1>{event.title}</h1>
      <p>{session.title}</p>
      <p>Time: {session.time}</p>
      <p>Event: {session.description}</p>
    </main>
  );
}
