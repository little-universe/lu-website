import Layout from '../Layouts/layout'
import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import Nav from '../components/Nav'
import Hero from '../components/ui/Hero'
import Project from '../components/Project'
import CLIENTS from '../utils/clients'

export default () =>
  <Layout title='Little Universe - Home'>
    <div>
      <Nav />

      <Hero
        headline="Little Universe is a digital product design agency and research studio."
      />
    </div>

    <Grid container direction="column" className="container">
      { CLIENTS.map((client) =>
        <Grid container>
          <Grid item xs={2} />
          <Grid item xs={8}>
            <Project
              variant="preview"
              serviceProvided={client.services}
              projectTitle={client.name}
              projectBlurb={client.blurb}
              projectImageLink={client.projectImageLink}
              nextProjectLink={client.nextProjectLink}
            />
          </Grid>
        </Grid>
      )}
    </Grid>
  </Layout>
