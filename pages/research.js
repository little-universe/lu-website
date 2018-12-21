import Layout from '../Layouts/layout'
import Grid from '@material-ui/core/Grid'
import Nav from '../components/Nav'
import Hero from '../components/ui/Hero'
import Project from '../components/Project'
import Research from '../components/Research'
import Footer from '../components/Footer'

export default () =>
  <Layout title='Little Universe - Research' className="research-page" render={(onExit) => (
    <>
    <Nav onExit={onExit} />

    <Hero
      headline="Research is making, implementing, writing, thinking, reviewing, or designing. We do it every day."
    />


  <Grid container direction="column">
    <Research />
  </Grid>

  <Footer />
  </>
  )
}/>
