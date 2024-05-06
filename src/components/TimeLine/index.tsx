import { useTranslations } from "next-intl";
import LayoutSection from "../LayoutSection";
import TitleSection from "../TitleSection";
import { events } from "./data";
import TimeLineCard from "./TimeLineCard";

export default function TimeLine() {
  const translate = useTranslations("Home")


  return (
    <LayoutSection>
      <TitleSection title={translate("sectiontitles.1.title")} id="trajectory"/>
      <div className="flex mt-4 flex-wrap justify-center lg:justify-start">
        {events.map((event, index) => (
          <TimeLineCard
            event={translate(`timeline.${index}.event`)}
            eventDate={translate(`timeline.${index}.date`)}
            key={index}
          />
        ))}
      </div>
    </LayoutSection>
  );
}
