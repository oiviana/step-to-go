import LayoutSection from "../LayoutSection";
import { events } from "./data";
import TimeLineCard from "./TimeLineCard";

export default function TimeLine() {
  return (
    <LayoutSection>
      <div className="flex mt-4 flex-wrap justify-center lg:justify-start">
        {events.map((event, index) => (
          <TimeLineCard
            event={event.event}
            eventDate={event.date}
            key={index}
          />
        ))}
      </div>
    </LayoutSection>
  );
}
