import {applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import allReducers from './reducer/index';
import storage from 'redux-persist/lib/storage';
import {createTransform} from 'redux-persist';
import * as Flatted from 'flatted';
import {persistStore, persistReducer} from 'redux-persist'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const transformCircular = createTransform(
  (inboundState, key) => Flatted.stringify(inboundState),
  (outboundState, key) => Flatted.parse(outboundState),
)

const persistConfig = {
  key: "igomoku",
  storage,
  transforms: [transformCircular],
  // các state không được lưu trong localStorage
}

const persistedReducer = persistReducer(persistConfig, allReducers);

const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
const persistor = persistStore(store);

export default {
  store,
  persistor,
};

