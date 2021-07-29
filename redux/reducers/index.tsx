import { combineReducers } from "redux";
import { logingReducer } from "./Loging.reducer";
export const rootReducer = combineReducers({
	loging: logingReducer,

	// miwah sane liyane
});
export type RootState = ReturnType<typeof rootReducer>;
