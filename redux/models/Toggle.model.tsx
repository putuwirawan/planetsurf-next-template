export interface ToggleType {
	shoowMenu: boolean;
}

export const SET_TOGGLE = "SET_TOGGLE";


interface SetToggle {
	type: typeof SET_TOGGLE;
	shoowMenu: boolean;
}

export type ToggleAction = SetToggle; 

