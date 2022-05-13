import agent from "../api/agent";
import {LoginPayload} from "../Model/skillPayload";
import {AuthInfo} from "../Model/Auth";
import {AuthAction} from "../reducers/AuthReducer";

export const LoginAction = (payload : LoginPayload) => {
    return async (dispatch: any) => {
        const LoginUser = async (payload: LoginPayload) => {
            const data:any = await agent.Auth.login(payload);
            return data;
        };

        try {
            const data: AuthInfo = await LoginUser(payload);
            localStorage.setItem("user", JSON.stringify(data));
            dispatch(AuthAction.getAuthInfo(data));
        } catch (error) {
            console.log(error);
        }
    };
};