import "./styles.scss"
import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import Logo from '../ui/Logo'
import NavLink from '../ui/NavLink'

export default () =>
  <Grid className="loader" container spacing={24} justify="center" alignItems="center">
    <div className="spinner" />
  </Grid>
