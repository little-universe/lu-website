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

  setCopy = () => {
    this.setState({copied: true, copiedText: true})

    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      this.setState({ copiedText: false })
    }, 1500);
  }

  render () {
    return (
      <div className="footer container">
        <Grid container>
          <Grid item xs={12} md={6} className="footerItem agencyMark">
            <Link href="/"><p className="secondary"><Logo /></p></Link>
          </Grid>
          <Grid item xs={12} md={6} className="footerItem agencyInfo">
            <p className="secondary">260 Ainslie Street, 3rd Floor</p>
            <p className="secondary">Brooklyn, NY 11211</p>
            <br />
            <Grid container alignItems="center">
              <p className="secondary">agency@littleuniverse.com</p>
              <CopyToClipboard text="agency@littleuniverse.com"
                onCopy={this.setCopy}
              >
                <Icon className="copyIcon" size={18} icon={ic_content_copy} />
              </CopyToClipboard>
              <p className={ this.state.copiedText ? "copiedText" : "copiedText fadeOut"}>Copied</p>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Footer;
