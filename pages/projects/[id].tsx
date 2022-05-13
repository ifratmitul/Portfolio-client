import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import Layout from "../../components/layout/Layout";
import { Project } from "../../Model/project";
import style from "./projectDetails.module.scss";
import SkillList from "../../components/Skill/Skill-list";

const ProjectDetails = () => {
  console.log("Project details");
  
  const route = useRouter();
  const { id } = route.query;
  const project: Project[] = useSelector((state: any) => state.project);
  const selectedProject = project.find((item: Project) => item.id === id);
  console.log(selectedProject);

  if (!selectedProject) {
    setTimeout(() => {
      route.push("/");
    }, 4000);
    return (
      <div className={style["project-not-found"]}>
        <h1>{"Project Doesn't exit"}</h1>
      </div>
    );
  }
  return (
    <div className={style["project-details"]}>
      <section className={style["project-details__info"]}>
        <h2 className={style["project-details__info--title"]}>{selectedProject?.title}</h2>
        <p>{selectedProject.details}</p>
          {selectedProject?.skills.length && (
              <div className={style["project-details__info--skills"]}>
                  <h4>Technology used:</h4>
                  <SkillList skills={selectedProject.skills}/>
              </div>
          )}
      </section>
      <section className={style["project-details__image"]}>
        {selectedProject?.photos.length && 
        <>
        {selectedProject.photos.map(item => <img key={item.id} src={item.url}/>)}
        </>}
      </section>
    </div>
  );
};
ProjectDetails.layout = Layout;
export default ProjectDetails;
