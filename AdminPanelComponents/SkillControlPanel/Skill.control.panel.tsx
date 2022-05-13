import React from "react";
import { useSelector } from "react-redux";
import AdminLayout from "../../components/layout/AdminLayout";
import { Skill } from "../../Model/skill";
import AdminSkillItem from "./AdminSkillItem";
import SkillForm from "../Forms/Skill.Form";
import style from '../admin.module.scss'

const SkillControlPanel = () => {
  console.log("SKillControll Panel");

  const skillList: Skill[] = useSelector((state: any) => state.skill);
  return (
    <div className={style['skill-control-panel']}>
      <SkillForm />
      {skillList.length && (
        <ol className={style['admin__skill-list']}>
          {skillList.map((item: Skill) => (
            <AdminSkillItem key={item.id} item={item} />
          ))}
        </ol>
      )}
    </div>
  );
};

SkillControlPanel.Layout = AdminLayout;
export default SkillControlPanel;
