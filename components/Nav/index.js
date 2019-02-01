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
      <MobileNav />
      <Grid item xs={10}>
        <div className="desktopNav">
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
        </div>
      </Grid>
    </Grid>
  </div>


  class MobileNav extends React.Component {
    state = {
      mobileNavIsOpen: false
    }
    toggleMobileNav = () => {
      this.setState({ mobileNavIsOpen: !this.state.mobileNavIsOpen })
    }

    render() {
      let route = this.props;

      return (
        <>
            <Grid item md={1} xs={6}>
              <div onClick={this.toggleMobileNav} className="hamburger">Toggle</div>
            </Grid>
          <Grid container className={ this.state.mobileNavIsOpen ? "mobileNav" : "mobileNav hidden" } spacing={24} alignItems="justify">
            <Grid item md={2} xs={12}>
              <Link href='/about'>
                <span className={ route === '/about' && 'disable' }>
                  <NavLink linkTitle="About Us" />
                </span>
              </Link>
            </Grid>
            <Grid item md={2} xs={12}>
              <Link href='/work'>
                <span className={ route === '/work' && 'disable' }>
                  <NavLink linkTitle="Work"/>
                </span>
              </Link>
            </Grid>
            <Grid item md={2} xs={12}>
              <Link href='/work-with-us'>
                <span className={ route === '/work-with-us' && 'disable' }>
                  <NavLink linkTitle="Work With Us"/>
                </span>
              </Link>
            </Grid>
          </Grid>
        </>
      )
    }
  }
