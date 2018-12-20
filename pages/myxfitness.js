import Layout from '../Layouts/layout'
import Grid from '@material-ui/core/Grid'
import Nav from '../components/Nav'
import Hero from '../components/ui/Hero'
import Project from '../components/Project'

export default () =>
  <Layout title='Myx Fitness'>
    <div>
      <Nav />

      <Hero
        className="hero-myxfitness"
      />
    </div>

  </Layout>
