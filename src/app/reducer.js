import { combineReducers } from 'redux'
import socialLinkReducer from '../features/socialLink/socialLinkSlice'

// const initialState = {
//   username: "user1",
//   isMember: "true",
//   socialLinks: ["https://www.twitch.tv/dasgoot", "https://www.youtube.com", "https://www.etsy.com"],
//   email: "someone@someone.com",
//   about: "Hi, I'm someone who is also someone and something something something"
// }

// const rootReducer = (state = initialState, action) =>{
//   return state
// }
const rootReducer = combineReducers({
  socialLinkReducer: socialLinkReducer
})

export default rootReducer