import { Dispatch } from "react";
import { API_Host } from "../../config";

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
		document.cookie = `username=; path=/ ;maxAge: 3600`;
		document.cookie = `access_token=; path=/ ;maxAge: 3600`;
		document.cookie = `refresh_token=; path=/ ;maxAge: 3600`;
		dispatch({ type: LOGOUT_USER });
	};
};
export const errorLoging = (error: any) => {
	return (dispatch: Dispatch<LogingAction>) => {
		dispatch({ type: ERROR_LOGIN, error: error });
	};
};
