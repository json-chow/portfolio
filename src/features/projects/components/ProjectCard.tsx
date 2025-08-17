import type { Project } from "../types/project";
import gh_logo from "../../../assets/github-mark-white.svg"

interface ProjectCardProps {
    project: Project;
    onClick?: () => void;
}

const ProjectCard = ({project, onClick}: ProjectCardProps) => {
    return (
        <div className="rounded-md bg-stone-800 cursor-pointer p-4 flex flex-col transition ease-out delay-100 hover:scale-105" onClick={onClick}>
            <div className="flex justify-between">
                <div className="text-3xl font-semibold wrap-anywhere">{project.title}</div>
                <a href={project.link} onClick={(e) => e.stopPropagation()}>
                    <img className="ml-auto max-w-10 transition ease-out delay-100 hover:scale-120" alt="GH" src={gh_logo}></img>
                </a>
            </div>
            <div className="mb-4">
                {project.desc}
            </div>
            <div className="flex gap-2 mt-auto flex-wrap">
                {project.stack.map((s) => {
                    return <span className="rounded-sm bg-zinc-600 px-1">{s}</span>
                })}
            </div>
        </div>
    )
}

export default ProjectCard;
