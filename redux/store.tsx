import { rootReducer } from "./reducers";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";

const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, middleware);
export { store };
