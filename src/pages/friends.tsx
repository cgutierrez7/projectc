import React from 'react';
import { SocialLink } from '../features/socialLink/SocialLink';

class Friends extends React.Component {
  render() {
    const links: string[] = ["link1","link2","link3"]
    return (
      <>
        <div>
          Friends
        </div>
        {links.map(link => {
          return <SocialLink key={link}/>
        })}
      </>
    )
  }
}

export default Friends;