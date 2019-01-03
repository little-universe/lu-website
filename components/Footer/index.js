import "./styles.scss"
import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import Logo from '../ui/Logo'
import NavLink from '../ui/NavLink'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Icon } from 'react-icons-kit'
import { ic_content_copy } from 'react-icons-kit/md/ic_content_copy'

class Footer extends React.Component {
  state = {
    copied: false,
    copiedText: false
  }

  setCopiedText() {
    this.setState({ copiedText: true })
  }

  render () {
    return (
      <div className="footer container">
        <Grid container>
          <Grid item xs={3} className="footerItem agencyName">
            <p className="secondary">Little Universe</p>
          </Grid>
          <Grid item xs={3} className="footerItem agencyInfo">
            <p className="secondary">260 Ainslie Street, 3rd Floor</p>
            <p className="secondary">Brooklyn, NY 11211</p>
            <br />
            <Grid container alignItems="center">
              <p className="secondary">agency@littleuniverse.com</p>
              <CopyToClipboard text="agency@littleuniverse.com"
                onCopy={() => this.setState({copied: true})}
              >
                <Icon className="copyIcon" size={18} icon={ic_content_copy} />
              </CopyToClipboard>
              { this.state.copiedText &&
                <p className="secondary copiedText">Copied</p>
              }
            </Grid>
          </Grid>
          <Grid item xs={3} className="footerItem">
            <p></p>
          </Grid>
          <Grid item xs={3} className="footerItem social">
            <p className="secondary"><a href="" className="socialLink">Twitter</a></p>
            <p className="secondary socialLink"><a href="" className="socialLink">LinkedIn</a></p>
            <p className="secondary socialLink"><a href="" className="socialLink">Instagram</a></p>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Footer;
