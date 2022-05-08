import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";

import reducer from './reducer'

interface WindowEx extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
}

const composeEnhancers = (window as unknown as WindowEx).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;
const StoreEnhancer = applyMiddleware(thunkMiddleware);
const store = createStore(reducer, composeEnhancers(StoreEnhancer));

export default store;
