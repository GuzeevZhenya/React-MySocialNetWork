import { createStore,combineReducers } from "redux";
import { userReducer } from "../redux/userReducer";
import { photoReducer } from '../redux/photoReducer';
import { registrationReducer } from "./registrationReducer";



const reducers = combineReducers({userReducer,photoReducer,registrationReducer});


export const store = createStore(reducers)