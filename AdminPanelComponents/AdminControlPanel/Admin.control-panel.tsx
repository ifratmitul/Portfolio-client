import React from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import SkillControlPanel from "../SkillControlPanel/Skill.control.panel";

const AdminControlPanel = () => {
  return (
    <div>
      <h4>Skill Panel</h4>
      <SkillControlPanel />
    </div>
  );
};
AdminControlPanel.layout = AdminLayout;
export default AdminControlPanel;
