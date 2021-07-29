import { Dispatch } from "react";
import {
	LogingAction,
	LOGIN_USER,
	LOGOUT_USER,
	ERROR_LOGIN,
	UserType,
} from "../models";

export const logIn = (user: UserType) => {
	return (dispatch: Dispatch<LogingAction>) => {
		dispatch({ type: LOGIN_USER, userData: user });
	};
};
export const logOut = () => {
	return (dispatch: Dispatch<LogingAction>) => {
		dispatch({ type: LOGOUT_USER });
	};
};
export const errorLoging = (error: any) => {
	return (dispatch: Dispatch<LogingAction>) => {
		dispatch({ type: ERROR_LOGIN, error: error });
	};
};
