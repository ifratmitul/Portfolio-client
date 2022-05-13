import {AuthInfo} from "../Model/Auth";

export function authHeader() {
    if(typeof window === 'undefined') return {}; 
    const jsonString : string | null = localStorage.getItem('user');
    const user : AuthInfo = jsonString ? JSON.parse(jsonString) : null;
    if (user && user.token) {
        return { Authorization: 'Bearer ' + user.token };
    } else {
        return {};
    }
}

export function isAuthenticated () : boolean {
    if(typeof window === 'undefined') return false; 
    const jsonString : string | null = window?.localStorage.getItem('user');
    const user : AuthInfo = jsonString ? JSON.parse(jsonString) : null;
    if(user) {
        return true;
    }
    return false;
}
