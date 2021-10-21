import { ToggleAction, ToggleType, SET_TOGGLE } from "../models";

export const initialState: ToggleType = {
	shoowMenu: false,
};

export function togleReducer(state = initialState, action: ToggleAction): ToggleType {
	switch (action.type) {
		case SET_TOGGLE: {
			return {
				...state,
				shoowMenu: action.shoowMenu,
			};
		}
		default:
			return state;
	}
}
