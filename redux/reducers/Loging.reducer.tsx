import {
	LoginState,
	LogingAction,
	LOGIN_USER,
	LOGOUT_USER,
	ERROR_LOGIN,
} from "../models";

export const initialState: LoginState = {
	loginUser: undefined,
	errorLogin: undefined,
	isLogin: false,
};

export function logingReducer(
	state = initialState,
	action: LogingAction
): LoginState {
	switch (action.type) {
		case LOGIN_USER: {
			return {
				...state,
				loginUser: action.userData,
				isLogin: true,
			};
		}
		case ERROR_LOGIN: {
			return {
				...state,
				loginUser: undefined,
				errorLogin: action.error,
				isLogin: false,
			};
		}
		case LOGOUT_USER: {
			return {
				...state,
				loginUser: undefined,
				errorLogin: undefined,
				isLogin: false,
			};
		}
		default:
			return state;
	}
}
