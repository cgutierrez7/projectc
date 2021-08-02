import { createStore } from 'redux';
import rootReducer from './reducer';

const initialState = {}
const store = createStore(rootReducer, initialState)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;