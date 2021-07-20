const initialState = {
  username: "user1",
  socialLinks: ["https://www.twitch.tv/dasgoot", "https://www.youtube.com", "https://www.etsy.com"]
}

interface actions {
  type: string
}

export default function socialLinkReducer(state = initialState, action: actions) {
  switch (action.type){
    default:
      return state;
  }
}