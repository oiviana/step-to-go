import LayoutSection from "../LayoutSection";
import TitleSection from "../TitleSection";
import ProjectCard from "./ProjectCard";

export default function MyProjects(){

    return(
        <LayoutSection>
            <TitleSection title="Meus projetos"/>
            <div className="flex lg:justify-between">
            <ProjectCard/>
            </div>
       
        </LayoutSection>
    )
}