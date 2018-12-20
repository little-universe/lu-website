import "./styles.scss"
import Link from 'next/link'
import Head from 'next/head'
import Loader from '../components/Loader'

class Layout extends React.Component {
  state = {
    loading: true,
  }

  componentDidMount() {
    setTimeout(function() {
      this.setState({ loading: false });
    }.bind(this), 1000);
  };

  render() {
    let { children, title } = this.props

    return (
      <div>
        <Head>
          <title>{ title }</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>

        {
          this.state.loading ?
          <Loader />
          :
          <div className="page-content">{children}</div>
        }

      </div>
    )
  }
}

export default Layout
