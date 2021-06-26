import { createStore, applyMiddleware, compose } from 'redux';
import { reducer } from './reducers';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

// export const store = createStore(
//   reducer,
//   compose(
//     applyMiddleware(sagaMiddleware),
//     window?.__REDUX_DEVTOOLS_EXTENSION__ && window?.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

sagaMiddleware.run(rootSaga);



