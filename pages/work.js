import Layout from '../Layouts/layout'
import Grid from '@material-ui/core/Grid'
import Nav from '../components/Nav'
import Hero from '../components/ui/Hero'
import Project from '../components/Project'
import CLIENTS from '../utils/clients'

export default () =>
  <Layout title='Little Universe - Work'>
    <div>
      <Nav />

      <Hero
        headline="Our Work"
      />
    </div>

    <Grid container direction="column">
      { CLIENTS.map((client) =>
        <Grid item>
          <Project
            variant="preview"
            serviceProvided={client.services}
            projectTitle={client.name}
            projectBlurb={client.blurb}
            projectImageLink={client.projectImageLink}
            nextProjectLink={client.nextProjectLink}
          />
        </Grid>
      )}
    </Grid>

  </Layout>
