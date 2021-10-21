import { Dispatch } from "react";
import { ToggleAction, SET_TOGGLE } from "../models";

export const thougleMenu = (value: boolean) => {
	return async (dispatch: Dispatch<ToggleAction>) => {
		dispatch({ type: SET_TOGGLE, shoowMenu: value });
	};
};
