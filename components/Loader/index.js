import "./styles.scss"
import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import Logo from '../ui/Logo'
import NavLink from '../ui/NavLink'

export default () =>
  <Grid className="loader" container>
    <div className="spinner" />
    <div className="spinner2" />
  </Grid>
