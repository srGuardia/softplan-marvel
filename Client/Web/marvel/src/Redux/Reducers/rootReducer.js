import { combineReducers } from "redux";
import marvelReducer from "./marvelReducers";

const rootReducer = combineReducers({
	root: marvelReducer,
});

export default rootReducer;
