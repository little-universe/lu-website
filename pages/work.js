import Layout from '../Layouts/layout'
import Grid from '@material-ui/core/Grid'
import Nav from '../components/Nav'
import Hero from '../components/ui/Hero'
import Project from '../components/Project'
import Research from '../components/Research'
import Footer from '../components/Footer'
import CLIENTS from '../utils/clients'

export default () =>
  <Layout title='Little Universe - Work' className="work-page">
    <Hero
      className="hero-workPage"
      headline={<>We make a difference for our clients.</>}
      subhead={["Each project has its own parameters for success."]}
    />
    

  <Footer />
</ Layout>
