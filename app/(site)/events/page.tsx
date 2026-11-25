import EventsClientView from "@/components/events/EventsClientView";
import { foundationEvents } from "@/data/events";
export default function EventsPage() { return <EventsClientView initialEvents={foundationEvents} />; }
