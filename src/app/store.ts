// import { configureStore } from '@reduxjs/toolkit';

// export default configureStore({
//   reducer: {},
// });
import { createStore } from 'redux'
import rootReducer from './reducer'

const store = createStore(rootReducer)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store