import AdminLayout from "../../components/layout/AdminLayout";
import AdminControlPanel from "../../AdminPanelComponents/AdminControlPanel/Admin.control-panel";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { FetchProjects } from "../../actions/ProjectAction";
import { fetchEducationData } from "../../actions/EduAction";
import { fetchExperienceData } from "../../actions/ExperienceAction";
import { fetchSkills } from "../../actions/SkillAction";
const AdminHome = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchProjects());
    dispatch(fetchEducationData());
    dispatch(fetchExperienceData());
    dispatch(fetchSkills());
    return () => {};
  }, [dispatch]);
  console.log("test admin");
  return (
    <>
      <div style={{ background: "orange" }}>AdminHome</div>
      <AdminControlPanel />
    </>
  );
};

AdminHome.layout = AdminLayout;

export default AdminHome;
