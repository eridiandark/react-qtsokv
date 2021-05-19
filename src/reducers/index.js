import {combineReducers} from 'redux'
import tableReducer from './tableReducer'
const config = {
    tableReducer : tableReducer
}
const appReducer  = combineReducers(config);
export default appReducer;