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

const actions = {addItem, editItem};
export default actions;