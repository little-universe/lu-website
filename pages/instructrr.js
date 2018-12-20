import Layout from '../Layouts/layout'
import Grid from '@material-ui/core/Grid'
import Nav from '../components/Nav'
import Hero from '../components/ui/Hero'
import Project from '../components/Project'
import Footer from '../components/Footer'
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
            projectDescription={CLIENTS[2].description}
            projectTitle={CLIENTS[2].name}
            projectBlurb={CLIENTS[2].blurb}
            projectImageLink={CLIENTS[2].projectImageLink}
            nextProjectLink={CLIENTS[2].nextProjectLink}
          />
        </Grid>
      </Grid>
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
              url={client.url}
            />
          </Grid>
        </Grid>
      )}
    </Grid>

    <Footer />

  </Layout>
