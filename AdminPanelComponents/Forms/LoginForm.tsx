import {Form, Formik} from "formik";
import style from "./Form.module.scss";
import MyTextInput from "./MyTextInput";
import {Button} from "primereact/button";
import AdminLayout from "../../components/layout/AdminLayout";
import {useDispatch} from "react-redux";
import {LoginPayload} from "../../Model/skillPayload";
import {LoginAction} from "../../actions/AuthAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserLock } from "@fortawesome/free-solid-svg-icons";

const LoginForm = () => {
    const dispatch = useDispatch();
    const handleLogin = (data:LoginPayload) => {
        dispatch(LoginAction(data));
    }

    return( <Formik
        initialValues={{
            email: "",
            password: ""
        }}
        onSubmit={(values: any, { resetForm }) => {
            console.log(values);
            handleLogin(values);
        }}
    >
        {({ handleSubmit, isSubmitting, errors }) => (
            <Form
                className={style["login-form"]}
                onSubmit={handleSubmit}
                autoComplete="off"
            >
                <div>
                    <h1> <FontAwesomeIcon icon={faUserLock}/>Admin Login</h1>
                </div>
                <div>
                <MyTextInput
                    label="Email"
                    type="email"
                    name="email"
                    placeholder=""
                />
                </div>
                <div>
                <MyTextInput
                    label="Password"
                    type="password"
                    name="password"
                    placeholder=""
                />
                </div>
               
                <Button label="Login" type="submit" disabled={isSubmitting}/>
            </Form>
        )}
    </Formik>)
}
LoginForm.layout = AdminLayout;
export default  LoginForm