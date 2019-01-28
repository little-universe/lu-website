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
  <div className="home-hero-bg work">
    <Hero
      headline="We collect reference, do research, and make connections."
    />
    </div>


  <Footer />
</ Layout>
