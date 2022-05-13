import AdminLayout from "../../components/layout/AdminLayout";
import SkillControlPanel from "../SkillControlPanel/Skill.control.panel";
import * as React from "react";
import { TabView, TabPanel } from "primereact/tabview";
import { useState } from "react";
import EducationControl from "../EducationControlPanel/EducationControl";
import ExperienceControlPanel from "../ExperienceControlPanel/ExperienceControlPanel";

const AdminControlPanel = () => {
  console.log("Admin Controll Panel");
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <TabView
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}
      >
        <TabPanel header="Skill">
          <SkillControlPanel />
        </TabPanel>
        <TabPanel header="Education">
          <EducationControl />
        </TabPanel>
        <TabPanel header="Experience">
            <ExperienceControlPanel />
        </TabPanel>
      </TabView>
    </div>
  );
};
AdminControlPanel.layout = AdminLayout;
export default AdminControlPanel;
