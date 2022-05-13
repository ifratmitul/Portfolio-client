import AdminLayout from "../../../components/layout/AdminLayout";
import LoginForm from "../../../AdminPanelComponents/Forms/LoginForm";
import { useRouter } from "next/router";
import { isAuthenticated } from "../../../common/authHeader";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import LoadingComponent from "../../../components/UI/Loading";

const AdminLogin = () => {
    const router = useRouter();
    let authentication: Boolean = isAuthenticated();
    const auth = useSelector((state:any) => state.auth)
    console.log(auth);
    
    useEffect(() => {
      return () => {
      }
    }, [auth])
    

    if(authentication) {
        if(typeof window !== 'undefined'){
          router.push("/admin");
        }
        return <LoadingComponent />
    }
    return (<div className="login-container">
        <LoginForm />
    </div>)
}

AdminLogin.layout = AdminLayout;
export default AdminLogin;