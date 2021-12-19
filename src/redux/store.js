import { createStore,combineReducers } from "redux";
import { userReducer } from "../redux/userReducer";
import {photoReducer} from '../redux/photoReducer';



const reducers = combineReducers({userReducer,photoReducer});


export const store = createStore(reducers)