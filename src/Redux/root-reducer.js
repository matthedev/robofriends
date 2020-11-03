import {combineReducers} from "redux";
import userReducer from "./users/userReducer"

const rootReducer = combineReducers({
    robotz: userReducer
})


export default rootReducer