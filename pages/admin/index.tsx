import AdminLayout from "../../components/layout/AdminLayout";
import AdminControlPanel from "../../AdminPanelComponents/AdminControlPanel/Admin.control-panel";
import {useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import { FetchProjects } from "../../actions/ProjectAction";
import { fetchEducationData } from "../../actions/EduAction";
import { fetchExperienceData } from "../../actions/ExperienceAction";
import { fetchSkills } from "../../actions/SkillAction";
import {useRouter} from "next/router";
import {isAuthenticated} from "../../common/authHeader";
import {Button} from "primereact/button";
import LoadingComponent from "../../components/UI/Loading";
const AdminHome = () => {
  const router = useRouter();
  const authentication : Boolean = isAuthenticated();
  const dispatch = useDispatch();
  useEffect(() => {
   if(authentication) {
    dispatch(FetchProjects());
    dispatch(fetchEducationData());
    dispatch(fetchExperienceData());
    dispatch(fetchSkills());
   }
    return () => {};
  }, []);
  
  if(!authentication) {
    if(typeof window !== 'undefined'){
      router.push("/admin/login");
    }
    return <LoadingComponent />
  }


  
  return (
    <div className="admin">
      <Button label="LogOut" className="p-button-danger logout-button" icon="pi pi-lock" onClick={() =>{
        if(typeof window !== 'undefined')
        localStorage.removeItem('user');
        router.push("/admin/login");
      }} />
      <AdminControlPanel/>
    </div>
  );
};

AdminHome.layout = AdminLayout;
export default AdminHome;
