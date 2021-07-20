import React from 'react';
import SocialLink from '../features/socialLink/SocialLink';
import {RootState} from '../app/store';
import {connect} from 'react-redux';

const mapStateToProps = (state: RootState) => ({
  username: state.socialLinks.username,
  socialLinks: state.socialLinks.socialLinks
})

class Friends extends React.Component {


  render() {
    return (
      <>
        <div>
          Friends
        </div>
        {/* TODO: Test code, remove when done testing */}
        <SocialLink />
      </>
    )
  }
}

export default connect(mapStateToProps)(Friends);