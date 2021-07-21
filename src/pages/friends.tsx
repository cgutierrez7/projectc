import React from 'react';
import SocialLink from '../features/socialLink/SocialLink';
import {RootState} from '../app/store';
import {connect} from 'react-redux';

interface Props {
  username: string
}

const mapStateToProps = (state: RootState) => ({
  username: state.socialLinks.username
})

class Friends extends React.Component<Props, RootState> {
  render() {
    return (
      <>
        <h1>{this.props.username}</h1>
        <SocialLink />
      </>
    )
  }
}

export default connect(mapStateToProps)(Friends);