export const addItem = (item) => {
    return dispatch => {
        return fetch('/api/addItem', {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.json();
        }).then(res => {
            item.id = res.id;
            dispatch({type : 'ADD_ITEM', meta: item})
        }).catch(err => {
            console.log('addItem failed')
        })}
}
export const editItem = (item) => {
    return dispatch => {
        return fetch('/api/editItem', {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.json();
        }).then(res => {
            dispatch({type : 'EDIT_ITEM', meta: item})
        }).catch(err => {
            console.log('editItem failed')
        })}
}
export const moveItem = (id, type) => {
    return dispatch => {
        return fetch('/api/moveItem', {
            method: 'POST',
            body: JSON.stringify({id, type}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.json();
        }).then(res => {
            dispatch({type : 'MOVE_ITEM', meta: {id, type}})
        }).catch(err => {
            console.log('moveItem failed')
        })}
}
export const delItem = (id) => {
    return dispatch => {
        return fetch('/api/delItem', {
            method: 'POST',
            body: JSON.stringify({id}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.json();
        }).then(res => {
            dispatch({type : 'DEL_ITEM', meta: id })
        }).catch(err => {
            console.log('delItem failed')
        })}
}
export const loadTableData = () => {
    return dispatch => {
        return fetch('/api/getTableData').then(res => {
            return res.json();
        }).then(res => {
            dispatch({type : 'LOAD_TABLE_DATA', data : res.data })
        }).catch(err => {
            console.log('API failed')
        })}
}

const actions = {addItem, editItem, moveItem, delItem, loadTableData};
export default actions;