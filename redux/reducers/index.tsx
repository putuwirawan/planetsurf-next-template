import { combineReducers } from "redux";
import { logingReducer } from "./Loging.reducer";
import { togleReducer } from "./Toggle.reducer";
export const rootReducer = combineReducers({
	loging: logingReducer,
	toglle: togleReducer,

	// miwah sane liyane
});
export type RootState = ReturnType<typeof rootReducer>;
