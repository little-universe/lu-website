import Layout from '../Layouts/layout'
import Grid from '@material-ui/core/Grid'
import Nav from '../components/Nav'
import Hero from '../components/ui/Hero'
import Project from '../components/Project'
import CLIENTS from '../utils/clients'

export default () =>
  <Layout title='Myx Fitness'>
    <div>
      <Nav />

      <Hero
        className="hero-myxfitness"
      />
    </div>

    <div className="container">
      <Grid container>
        <Grid item xs={2} />
        <Grid item xs={8} >
          <Project
            variant="full"
            serviceProvided={CLIENTS[1].services}
            projectTitle={CLIENTS[1].name}
            projectBlurb={CLIENTS[1].blurb}
            projectImageLink={CLIENTS[1].projectImageLink}
            nextProjectLink={CLIENTS[1].nextProjectLink}
          />
        </Grid>
      </Grid>
    </div>

  </Layout>
