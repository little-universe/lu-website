import "./styles.scss"
import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import Logo from '../ui/Logo'
import Router from 'next/router'
import NavLink from '../ui/NavLink'

export default ({ theme, onExit }) =>
  <div className={ theme === "light" ? "nav light" : "nav" }>
    <Grid container spacing={24} justify="space-between" alignItems="flex-start">
      <a className={ Router.route === '/' && 'disable' }
        onClick={() => onExit(() => Router.push('/'))}
      >
        <Grid item xs={2} className="logoWrapper">
          <Logo />
        </Grid>
      </a>

      <Grid item xs={10}>
        <Grid container spacing={24} justify="flex-end" alignItems="flex-end">
          <Grid item md={2} xs={12}>
              <a
                className={ Router.route === '/agency' && 'disable' }
                onClick={() => onExit(() => Router.push('/agency'))}
              >
                <Grid item>
                  <NavLink linkTitle="Agency"/>
                </Grid>
              </a>
          </Grid>
          <Grid item md={2} xs={12}>
            <a
              className={ Router.route === '/research' && 'disable' }
              onClick={() => onExit(() => Router.push('/research'))}
            >
                <Grid item>
                  <NavLink linkTitle="Research"/>
                </Grid>
              </a>
          </Grid>


        </Grid>
      </Grid>
    </Grid>
  </div>
