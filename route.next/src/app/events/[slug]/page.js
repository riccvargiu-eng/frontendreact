import { getEventBySlug } from "../../../lib/events";

export default function EventPage({ params }) {
  const event = getEventBySlug(params.slug);
  return (
    <main>
      <div>
        <h1>{event.title}</h1>
        <p>{event.description}</p>
        <p>Date: {event.program[0].time}</p>
      </div>
    </main>
  );
}
