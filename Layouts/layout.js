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
      <div>
        <Head>
          <title>{ title }</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <Layout>
          <Nav/>
        {
          this.state.loading ?
          <Loader />
          :
          <>
            <div className={`page-content ${className} ${this.state.loadOut && "fade-out"}`}
            >{render(this.onExit)}</div>
          </>
        }
        </Layout>

      </div>
    )
  }
}

export default Layout
