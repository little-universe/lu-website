import "./styles.scss"
import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import Logo from '../ui/Logo'
import React from 'react'
import NavLink from '../ui/NavLink'

export default ({ theme, route }) =>
  <div className={ theme === "light" ? "nav light" : "nav" }>
    <Grid container spacing={24} justify="space-between" alignItems="flex-start">
      <Link href="/">
        <Grid item xs={1} className="logoWrapper">
          <Logo />
        </Grid>
      </Link>

      <Grid item xs={10}>
        <Grid container spacing={24} justify="flex-end" alignItems="flex-end">
          <Grid item md={2} xs={12}>
            <Link href='/about'>
              <Grid item className={ route === '/about' && 'disable' }>
                <NavLink linkTitle="About Us" />
              </Grid>
            </Link>
          </Grid>
          <Grid item md={2} xs={12}>
            <Link href='/work'>
              <Grid item className={ route === '/work' && 'disable' }>
                <NavLink linkTitle="Work"/>
              </Grid>
            </Link>
          </Grid>
          <Grid item md={2} xs={12}>
            <Link href='/work-with-us'>
              <Grid item className={ route === '/work-with-us' && 'disable' }>
                <NavLink linkTitle="Work With Us"/>
              </Grid>
            </Link>
          </Grid>

        </Grid>
      </Grid>
    </Grid>
  </div>
