import React from "react";
import { useSelector } from "react-redux";
import AdminLayout from "../../components/layout/AdminLayout";
import { Skill } from "../../Model/skill";

const SkillControlPanel = () => {
  const skillList: Skill[] = useSelector((state: any) => state.skill);
  return (
    <div>
      {skillList.length && (
        <ul>
          {skillList.map((item: Skill) => (
            <li key={item.id}>{item.skillName}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

SkillControlPanel.Layout = AdminLayout;
export default SkillControlPanel;
