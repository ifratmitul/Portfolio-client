import { createSlice } from "@reduxjs/toolkit";
import {AuthInfo} from "../Model/Auth";

const  initialAuthInfo: any = null;

const AuthSlice = createSlice({
    name: "auth",
    initialState: initialAuthInfo,
    reducers: {
        getAuthInfo(state:any, data:any) {
            // console.log("State :: " + state);
            // console.log(data);
            state = data.payload.data;
            console.log(state)
            return state;
        }
    },
});
export const AuthAction = AuthSlice.actions;
export default AuthSlice;
