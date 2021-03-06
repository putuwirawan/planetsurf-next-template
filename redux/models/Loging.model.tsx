export interface UserType {
	username: string;
	access_token: string;
	refresh_token: string;

}
export interface LoginState {
	user_login: UserType| undefined;
	errorLogin: any | undefined;
	isLogin: boolean;
}
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const ERROR_LOGIN = "ERROR_LOGIN";

interface Login {
	type: typeof LOGIN_USER;
	userData: UserType;
}
interface Logout {
	type: typeof LOGOUT_USER;
}
interface ErrorLogin {
	type: typeof ERROR_LOGIN;
	error: any;
}
export type LogingAction = Login | Logout | ErrorLogin;