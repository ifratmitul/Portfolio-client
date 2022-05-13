import Link from "next/link";
import React from "react";
import { Project } from "../../Model/project";
import Layout from "../layout/Layout";
import style from "./FeaturedProjectStyle.module.scss";

interface Props {
  project: Project;
}

const FeaturedProject = ({ project }: Props) => {
  return (
    <div className={style["featuredProject"]}>
      <section className={style["project__text-box"]}>
        <h1 className="heading-primary--sub">Featured Projects</h1>
        <p className={style["project-list-link"]}>
          See more of my work
          <Link href="/projects">
            <a> here </a>
          </Link>
        </p>
      </section>
      <section className={style["featuredProject__card"]}>
        <div className={style["featuredProject__card--image"]}>
          <img src={project?.photos[0]?.url} />
        </div>
        <div className={style["featuredProject__card--info"]}>
          <h1>{project?.title}</h1>
          <p>{project?.details}</p>
          {
            project?.skills.length && 
             <ul>
              {
                  project?.skills.map(item => <li key={item.id}>{item.skillName}</li>)
              }
             </ul>
          }
        </div>
      </section>
    </div>
  );
};

FeaturedProject.layout = Layout;
export default FeaturedProject;
