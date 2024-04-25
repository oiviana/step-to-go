import LayoutSection from "../LayoutSection";
import TitleSection from "../TitleSection";
import ProjectCard from "./ProjectCard";
import {projects} from "./data"

export default function MyProjects(){

    const projectCards = projects.slice(0,3).map((project)=>(
        <ProjectCard
        title={project.title}
        subtitle={project.subtitle}
        description={project.description}
        hasDeploy={project.hasDeploy}
        stack={project.stack}/>
    ))

    return(
        <LayoutSection>
            <TitleSection title="Meus projetos"/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {projectCards}
            </div>
       
        </LayoutSection>
    )
}