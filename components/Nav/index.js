import "./styles.scss"
import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import Logo from '../ui/Logo'
import NavLink from '../ui/NavLink'

export default () =>
  <div className="nav">
    <Grid container spacing={24} justify="space-between">
      <Link href="/">
        <Grid item className="logoWrapper">
          <Logo />
          <p>Little Universe</p>
        </Grid>
      </Link>

      <Grid item>
        <Grid container spacing={40}>
        
          <Link href="/">
            <Grid item>
              <NavLink linkTitle="About Us" />
            </Grid>
          </Link>


          <Link href="/work">
            <Grid item>
              <NavLink linkTitle="Work" />
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
