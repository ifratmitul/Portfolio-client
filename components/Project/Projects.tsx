import { useSelector } from "react-redux";
import { Project } from "../../Model/project";
import Layout from "../layout/Layout";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";
import style from "./projects.module.scss";
interface Props {
  providedIn: string;
}

function Projects({ providedIn }: Props) {
  console.log("Hero Projects");
  
  const projects: Project[] = useSelector((state: any) => state.project);
  const topProjects: Project[] =
    projects?.length > 1 ? projects.slice(0, 1) : projects;
  const projectToShow: Project[] =
    providedIn === "MAIN" ? topProjects : projects;

  if( providedIn === "MAIN") {
    return (
    <>
     <FeaturedProject project={projectToShow[0]}/>
    
    </>)
  }

  return (
    <section
      aria-labelledby="project"
      className={style["project"]}
      id="project"
    >
      <section className={style["project__list"]}>
        {projectToShow?.length > 0 &&
          projectToShow.map((item: Project) => (
            <ProjectCard key={item.id} project={item} />
          ))}
      </section>
    </section>
  );
}

Projects.layout = Layout;
export default Projects;
