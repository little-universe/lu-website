import Layout from '../Layouts/layout'
import Grid from '@material-ui/core/Grid'
import Nav from '../components/Nav'
import Hero from '../components/ui/Hero'
import Project from '../components/Project'
import Research from '../components/Research'

export default () =>
  <Layout title='Little Universe - Work'>
    <div>
      <Nav />

      <Hero
        headline="Our Research Interests"
      />
    </div>

    <Grid container direction="column">
      <Research />
    </Grid>

  </Layout>
