import "./styles.scss"
import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import Logo from '../ui/Logo'
import Router from 'next/router'
import NavLink from '../ui/NavLink'

export default ({ theme, onExit }) =>
  <div className={ theme === "light" ? "nav light" : "nav" }>
    <Grid container spacing={24} justify="space-between" alignItems="center">
      <a onClick={() => onExit(() => Router.push('/'))}>
        <Grid item xs={2} className="logoWrapper">
          <Logo />
        </Grid>
      </a>

      <Grid item xs={10}>
        <Grid container spacing={40} justify="flex-end">

          <a onClick={() => onExit(() => Router.push('/agency'))}>
            <Grid item>
              <NavLink linkTitle="Agency" />
            </Grid>
          </a>

          <a onClick={() => onExit(() => Router.push('/research'))}>
            <Grid item>
              <NavLink linkTitle="Research" />
            </Grid>
          </a>

        </Grid>
      </Grid>
    </Grid>
  </div>
