enum Sites {
  Twitch = "TWITCH",
  Youtube = "YOUTUBE",
  Twitter = "TWITTER",
  Discord = "DISCORD",
  Instagram = "INSTAGRAM",
  Snapchat = "SNAPCHAT",
  Patreon = "PATREON",
  Onlyfans = "ONLYFANS",
  Etsy = "ETSY",
  Other = "OTHER"
}

export interface SocialLinkModel {
  site: Sites,
  url: string
}

const initialState = {
  username: "user1",
  socialLinks: [
    {
      site: Sites.Twitch,
      url : "https://www.twitch.tv"
    },
    {
      site: Sites.Youtube,
      url: "https://www.youtube.com"
    },
    {
      site: Sites.Etsy,
      url: "https://www.etsy.com"
    }
  ]
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