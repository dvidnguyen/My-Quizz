export const FECTH_USER_LOGIN_SUCCESS ='FECTH_USER_LOGIN_SUCCESS';
export const doLogin = (data) =>{
    return {
        type: "FECTH_USER_LOGIN_SUCCESS",
        payload: data
    }
} 