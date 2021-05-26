import {createSelector} from 'reselect';

export const tableData = (state) => state.tableReducer.data;

export const getTableData = createSelector(
    [tableData],
    (data) => data
)