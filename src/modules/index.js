import { combineReducers } from "redux";
import memberReducer from "./MemberModule";
import askReducer from "./AskModule";
import humanReducer from "./HRModule";

// 도아 - 보고서 
import { branchSalesReducer, vehicleRepairReducer} from "./ReportsModule";

import detergentsInfoReducer from "./DetergentInfoModule";
import partsInfoReducer from "./PartInfoModule";


const rootReducer = combineReducers({
    memberReducer,
    askReducer,
    humanReducer,
    branchSalesReducer,

    detergentsInfoReducer,
    partsInfoReducer,

    vehicleRepairReducer,

})

export default rootReducer;