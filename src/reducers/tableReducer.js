import initialState from './initialState';


export default function tableReducer(state = initialState.table, action) {
    switch(action.type) {

        case "ADD_ITEM": {
            let data = [...state.data, action.meta]
            return {
                ...state,
                data
            }
        }
        case "EDIT_ITEM": {
            let data = [...state.data];
            let i = data.findIndex(value => value.id === action.meta.id);
            data[i] = action.meta;
            return {
                ...state,
                data
            }
        }
        case "MOVE_ITEM": {
            let data = [...state.data];
            let a = data.findIndex(value => value.id === action.meta.id);
            let b;
            if(action.meta.type === 'up'){
                b = a - 1;
            }
            else {
                b = a + 1;
            }
            if(a > -1){
                [data[a], data[b]] = [data[b], data[a]]
            }
            return {
                ...state,
                data
            }
        }
        case 'DEL_ITEM':
            return {
                ...state,
                data : state.data.filter(item=>item.id !== action.meta)
            }

        case 'LOAD_TABLE_DATA' :
            return {
                ...state,
                data : action.data
            }
        default:
            return state;
    }
}