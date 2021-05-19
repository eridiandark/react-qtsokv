export const addItem = (item) => {
    return {
        type: "ADD_ITEM",
        meta: item
    }
}
export const editItem = (item) => {
    return {
        type: "EDIT_ITEM",
        meta: item
    }
}
export const moveItem = (id, type) => {
    return {
        type: "MOVE_ITEM",
        meta: {id, type}
    }
}
export const loadTableData = () => {
    return dispatch => {
        return fetch('/api/getTableData').then(res => {
            return res.json();
        }).then(res => {
            dispatch({type : 'LOAD_TABLE_DATA', data : res.data })
        }).catch(err => {
            console.log('API failed')
        })}}

const actions = {addItem, editItem, moveItem, loadTableData};
export default actions;