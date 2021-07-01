const initialState = {
  username: "user1",
  isMember: "true",
  socialLinks: ["https://www.twitch.tv/dasgoot", "https://www.youtube.com", "https://www.etsy.com"],
  email: "someone@someone.com",
  about: "Hi, I'm someone who is also someone and something something something"
}

interface SocialLinkState {
  username: string
  socialLinks: string[]
}

export default function socialLinkReducer(state = initialState, action) {
  return state
}