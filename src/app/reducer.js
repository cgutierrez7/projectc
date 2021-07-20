import { combineReducers } from 'redux';
import socialLinkReducer from '../features/socialLink/socialLinkSlice';

// const rootReducer = (state = initialState, action) =>{
//   return state
// }
const rootReducer = combineReducers({
  socialLinks: socialLinkReducer
})

export default rootReducer;