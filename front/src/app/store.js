import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { reducer } from './reducers';


import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

// export const store = createStore(
//   reducer,
//   applyMiddleware(sagaMiddleware)
// );

// export const store = createStore(
//   reducer,
//   compose(
//     applyMiddleware(sagaMiddleware),
//     window?.__REDUX_DEVTOOLS_EXTENSION__ && window?.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

export const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware),
  )
);

sagaMiddleware.run(rootSaga);



