import Counter from "./Counter"
import Reduser from "./Redus";
import Data from "./Data";
import { combineReducers } from "redux";


const allRoodeser = combineReducers({
    count:Counter,
    Redus:Reduser,
    item:Data
})


export default allRoodeser;