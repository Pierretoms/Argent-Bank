import { combineReducers } from "redux";
import loginReducer from './signin.reducer'
import userReducer from "./user.reducer";

export default combineReducers({
    loginReducer,
    userReducer
})