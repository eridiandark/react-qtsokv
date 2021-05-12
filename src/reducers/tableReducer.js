import initialState from './initialState';


export default function tableReducer(state = initialState.table, action) {
    switch(action.type) {

        case "ADD_ITEM": {
            let id=0;
            for (let i=0; i<state.data.length; ++i){
                if(state.data[i].id >= id) id = (state.data[i].id + 1);
            }
            let item = action.meta;
            item.id = id;
            let data = [...state.data, item]
            return {
                ...state,
                data: data
            }
        }
        case "EDIT_ITEM": {
            let data = JSON.parse(JSON.stringify(state.data));
            for (let i=0; i<data.length; ++i){
                if(data[i].id === action.meta.id){
                    data[i] = action.meta;
                    break;
                }
            }
            return {
                ...state,
                data: data
            }
        }

        default:
            return state;
    }
}