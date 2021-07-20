// import { configureStore } from '@reduxjs/toolkit';

// export default configureStore({
//   reducer: {},
// });
import { createStore } from 'redux';
import rootReducer from './reducer';
// import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {}
const store = createStore(rootReducer, initialState)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;