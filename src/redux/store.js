import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {combineReducers} from "redux";
import {photoReducer} from "./reducers";

const rootReducer = combineReducers({
    photos:photoReducer
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
