import App, { Container } from 'next/app'
import React from 'react'
import { PageTransition } from 'next-page-transitions'
import Nav from '../components/Nav'
import Loader from '../components/Loader'
import "../static/empty.css"
import ReactGA from 'react-ga'

function initializeReactGA() {
    ReactGA.initialize('UA-133769605-1');
    ReactGA.pageview('/homepage');
}

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx, pathName }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps, router } = this.props
    const { route } = router
    return (
      <Container>
        <Nav theme={(route === '/instructrr' || route === '/h1') ? 'light' : 'dark'} route={route.toString()} />
        <PageTransition
          timeout={300}
          classNames="page-transition"
          loadingDelay={0}
          loadingComponent={Loader}
          >
          <Component {...pageProps} />
        </PageTransition>
        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 300ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 300ms;
          }
        `}</style>
      </Container>
    )
  }
}
