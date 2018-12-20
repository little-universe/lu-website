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
      <Nav />

      <Hero
        className="hero-betterfin"
      />
    </div>

    <div className="container">
      <Grid container>
        <Grid item xs={2} />
        <Grid item xs={8} >
          <Project
            variant="full"
            serviceProvided={CLIENTS[0].services}
            projectTitle={CLIENTS[0].name}
            projectBlurb={CLIENTS[0].blurb}
            projectImageLink={CLIENTS[0].projectImageLink}
            nextProjectLink={CLIENTS[0].nextProjectLink}
            projectDescription={CLIENTS[0].description}
          />
        </Grid>
      </Grid>
    </div>

    <Grid container direction="column" className="container">
      { CLIENTS.splice(0).map((client) =>
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
