import {useState} from "react"
import type { Project } from "./types/project";
import ProjectCard from "./components/ProjectCard"
import { projects } from "./data"
import ProjectPopup from "./components/ProjectPopup";

const ProjectSection = () => {
    const [selected, setSelected] = useState<Project | null>(null);
    return (
        <section>
            <div className="text-5xl mb-6 font-semibold">
                Projects
            </div>
            <div className="grid grid-cols-1 gap-10 auto-rows-fr lg:grid-cols-2 2xl:grid-cols-3">
                {projects.map((p) => {
                    return <ProjectCard project={p} key={p.title} onClick={() => {setSelected(p)}}></ProjectCard>
                })}
            </div>
            {selected && 
                <>
                    <div className="fixed inset-0 bg-[rgba(39,39,42,0.9)]" onClick={() => setSelected(null)}></div>
                    <ProjectPopup project={selected} onBackClick={() => setSelected(null)}></ProjectPopup>
                </>
            }
        </section>
    )
}

export default ProjectSection
