import "./styles.scss"
import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import Logo from '../ui/Logo'
import NavLink from '../ui/NavLink'

export default ({ theme }) =>
  <div className={ theme === "light" ? "nav light" : "nav" }>
    <Grid container spacing={24} justify="space-between" alignItems="center">
      <Link href="/">
        <Grid item xs={2} className="logoWrapper">
          <Logo />
          { /* <p>Little Universe</p> */ }
        </Grid>
      </Link>

      <Grid item xs={10}>
        <Grid container spacing={40} justify="flex-end">

          <Link href="/agency">
            <Grid item>
              <NavLink linkTitle="Agency" />
            </Grid>
          </Link>

          <Link href="/research">
            <Grid item>
              <NavLink linkTitle="Research" />
            </Grid>
          </Link>

        </Grid>
      </Grid>
    </Grid>
  </div>
