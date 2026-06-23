import MyWork from "@/components/MyWork";
import LayoutSection from "../../ui/LayoutSection";
import Greeting from "@/components/Greeting";

export default function Hero() {

  return (
    <LayoutSection>
      <Greeting/>
      <MyWork/>
    </LayoutSection>
  );
}
