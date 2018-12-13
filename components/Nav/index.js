import "./styles.scss"
import Grid from '@material-ui/core/Grid'
import Logo from '../ui/Logo'
import NavLink from '../ui/NavLink'

export default () =>
  <div className="nav">
    <Grid container spacing={24} justify="space-between">
      <Grid item className="logoWrapper">
        <Logo />
        <p>Little Universe</p>
        <p>A digital design agency and research office.</p>
      </Grid>

      <Grid item>
        <Grid container spacing={40}>
          <Grid item>
            <NavLink linkTitle="About Us" />
          </Grid>

          <Grid item>
            <NavLink linkTitle="Work" />
          </Grid>

          <Grid item>
            <NavLink linkTitle="Research" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </div>
