import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../app/store';

interface StateProps {
  username: string,
  links: string[]
}

type Props = StateProps

interface State {

}


const mapStateToProps = (state: RootState) => {
  return ({
    username: state.socialLinks.username,
    links: state.socialLinks.socialLinks
  })
}

export class SocialLink extends React.Component<Props, State> {
  render () {
    return (
      <div>
        {this.props.links.map((link: string) => {
          return (
            <div>
              <a key={link} href={link}>{link}</a>
            </div>
          )
        })}
      </div>
    )
  }
}

export default connect(mapStateToProps)(SocialLink);