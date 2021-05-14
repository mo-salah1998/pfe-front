import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import allReducers from './reducer/index';
import storage from 'redux-persist/lib/storage';
import {createTransform, persistReducer, persistStore} from 'redux-persist';
import * as Flatted from 'flatted';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const transformCircular = createTransform(
  (inboundState, key) => Flatted.stringify(inboundState),
  (outboundState, key) => Flatted.parse(outboundState),
)

const persistConfig = {
  key: "test",
  storage,
  transforms: [transformCircular],

}

const persistedReducer = persistReducer(persistConfig, allReducers);

const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
const persistor = persistStore(store);

export default {
  store,
  persistor,
};

