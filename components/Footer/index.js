import "./styles.scss"
import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import Logo from '../ui/Logo'
import NavLink from '../ui/NavLink'

export default () =>
  <div className="footer container">
    <p className="secondary">260 Ainslie Street, 3rd Floor</p>
    <p className="secondary">Brooklyn, NY 11211</p>
    <br />
    <p className="secondary">agency@littleuniverse.com</p>
  </div>
