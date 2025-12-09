import { events } from "../lib/events";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the Home Page!</p>
      <span>Event count: {events.length}</span>
      <section>
        {events.map((event) => (
          <div key={event.slug}>
            <h2>{event.title}</h2>
            <p>{event.program[0].time}</p>
            <Link href={`/events/${event.slug}`}>View Details</Link>
          </div>
        ))}
      </section>
    </div>
  );
}
