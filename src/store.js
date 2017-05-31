import { compose, createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { persistStore, autoRehydrate } from 'redux-persist';
import rootReducer from './reducer';
import rootSaga from './saga';


const logger = createLogger({
  collapsed: true,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware, logger),
    autoRehydrate(),
  ),
);

sagaMiddleware.run(rootSaga);

persistStore(store).purge();

export default store;
