import "./styles.scss"
import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import Logo from '../ui/Logo'
import NavLink from '../ui/NavLink'

export default () =>
  <div className="footer container">
    <Grid container>
      <Grid item xs={3} className="footerItem agencyName">
        <p className="secondary">Little Universe</p>
      </Grid>
      <Grid item xs={3} className="footerItem agencyInfo">
        <p className="secondary">260 Ainslie Street, 3rd Floor</p>
        <p className="secondary">Brooklyn, NY 11211</p>
        <br />
        <p className="secondary">agency@littleuniverse.com</p>
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
