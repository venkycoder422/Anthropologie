import { legacy_createStore as createStore} from "redux";
import { authReducer } from "./reducer";

export const store = (authReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());