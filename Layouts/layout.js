import "./styles.scss"
import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router'
import Loader from '../components/Loader'
import Nav from '../components/Nav'

class Layout extends React.Component {
  state = {
    loading: true,
    loadOut: false
  }

  componentDidMount() {
    setTimeout(function() {
      this.setState({ loading: false });
    }.bind(this), 1000);
    window.scrollTo(0, 0);
  };

  onExit = (cb) => {
    this.setState({ loadOut: true })
    setTimeout(cb, 150)
  }

  render() {
    let { title, className, render } = this.props

    return (
      <>
        <Head>
          <title>{ title }</title>
          <meta property="og:title" content="Little Universe"/>
          <meta name="description" content="We're a digital product agency based in Brooklyn. Every product is its own Little Universe."/>
          <meta property="og:description" content="We're a digital product agency based in Brooklyn. Every product is its own Little Universe."/>
          <meta property="og:image" content="https://s3.us-east-2.amazonaws.com/lu-assets/little-universe-meta.png"/>
          <meta property="keywords" content="little, universe, little universe, digital product, digital, product, product design, product agency, agency, interaction, interaction design, design, development, design and development, web, website, web design, startup, build, design and build, brooklyn, new york city, new york, williamsburg"/>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link rel="shortcut icon" type="image/png" href="../static/lu-favicon.png"/>

        </Head>
        <div className={className} style={{ overflowX: "hidden"}}>
          {this.props.children}
        </div>
      </>
    )
  }
}

export default Layout
