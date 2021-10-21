import {
	LoginState,
	LogingAction,
	LOGIN_USER,
	LOGOUT_USER,
	ERROR_LOGIN,
} from "../models";

export const initialState: LoginState = {

	user_login:undefined,
	errorLogin: undefined,
	isLogin: false
};

export function logingReducer(
	state = initialState,
	action: LogingAction
): LoginState {
	switch (action.type) {
		case LOGIN_USER: {
			
			return {
				...state,
				user_login: action.userData,		
				isLogin: true,
				errorLogin: undefined,
			};
		}
		case ERROR_LOGIN: {
			return {
				...state,
				user_login: undefined,
				errorLogin: action.error,
				isLogin: false,
			};
		}
		case LOGOUT_USER: {
			return {
				...state,
				user_login: undefined,
				errorLogin: undefined,
				isLogin: false,
			};
		}
		default:
			return state;
	}
}
