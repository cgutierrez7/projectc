import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../app/store';
import { SocialLinkModel } from './socialLinkSlice'

interface StateProps {
  username: string,
  links: SocialLinkModel[]
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
        {this.props.links.map((link: SocialLinkModel) => {
          return (
            <>
            <a key={link.site} href={link.url} target="_blank" rel="noreferrer">{link.site}</a>
            <br/>
            </>
          )
        })}
      </div>
    )
  }
}

export default connect(mapStateToProps)(SocialLink);