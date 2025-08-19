import type { Project } from "../types/project";
import backIcon from "../../../assets/icons8-back-64.png";
import gh_logo from "../../../assets/github-mark-white.svg";

interface ProjectPopupProps {
    project: Project;
    onBackClick: () => void;
}

const ProjectPopup = ({project, onBackClick}: ProjectPopupProps) => {
    return (
        <div className="fixed inset-0 bg-neutral-700 md:mx-25 xl:mx-45 my-auto rounded-sm h-fit max-h-svh overflow-auto">
            <div className="flex justify-between p-2">
                <img className="w-12 cursor-pointer transition ease-out delay-100 hover:scale-125" src={backIcon} alt="Go Back" onClick={onBackClick}></img>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <img className="ml-auto max-w-10" alt="GH" src={gh_logo}></img>
                </a>
            </div>
            <div className="flex flex-col-reverse lg:flex-row px-8 py-3 gap-5 mb-10">
                <div>
                    <div className="text-5xl xl:text-6xl font-semibold wrap-anywhere text-center lg:text-left mb-5">
                        {project.title}
                    </div>
                    <div className="text-xl xl:text-2xl whitespace-pre-line">
                        {project.longDesc}
                    </div>
                </div>
                <img className="max-w-1/2 self-center" alt="screenshot" src={project.pic}></img>
            </div>
            
        </div>
        // TODO: more intuitive link to repo?
    )
}

export default ProjectPopup;
