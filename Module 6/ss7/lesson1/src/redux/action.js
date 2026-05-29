import Accounts from "bootstrap/js/src/dom/selector-engine.js";
import {getAccounts} from "../service/accountService.jsx";

export const login = (username, password) => {
    return async (dispatch) => {
        const account = await getAccounts(username, password);
        if(account){
            dispatch({
                type:'LOGIN',
                payload: account,
            })
            return true;
        }else{
            return false;
        }
    }
};
export const logout = () => {
    return async (dispatch) => {
        dispatch({
            type:'LOGOUT',
        })
    }
}