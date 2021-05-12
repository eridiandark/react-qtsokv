import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from "./components/App";
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import tableReducer from "./reducers/tableReducer";

let store = createStore(tableReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);

