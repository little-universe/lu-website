import Layout from '../Layouts/layout'
import Grid from '@material-ui/core/Grid'
import Nav from '../components/Nav'
import Hero from '../components/ui/Hero'
import Project from '../components/Project'
import CLIENTS from '../utils/clients'

export default () =>
  <Layout title='Betterfin'>
    <div>
      <Nav theme="light" />

      <Hero
        className="hero-instructrr"
      />
    </div>

    <div className="container">
      <Grid container>
        <Grid item xs={2} />
        <Grid item xs={8} >
          <Project
            variant="full"
            serviceProvided={CLIENTS[2].services}
            projectTitle={CLIENTS[2].name}
            projectBlurb={CLIENTS[2].blurb}
            projectImageLink={CLIENTS[2].projectImageLink}
            nextProjectLink={CLIENTS[2].nextProjectLink}
          />
        </Grid>
      </Grid>
    </div>

  </Layout>
