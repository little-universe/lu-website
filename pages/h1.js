import Layout from '../Layouts/layout'
import Grid from '@material-ui/core/Grid'
import Nav from '../components/Nav'
import Hero from '../components/ui/Hero'
import Project from '../components/Project'
import Footer from '../components/Footer'
import CLIENTS from '../utils/clients'

export default () =>
  <Layout title='H1 Insights' className="h1-page">
      <Hero
        className="hero-h1 project-hero"
        bgImage="https://s3.us-east-2.amazonaws.com/lu-assets/bg-h1.svg"
      />

      <div className="container">
        <Grid container>
          <Grid item xs={1} md={1} />
          <Grid item xs={12} md={8} >
            <Project
              variant="full"
              serviceProvided={CLIENTS[5].services}
              projectTitle={CLIENTS[5].name}
              projectBlurb={CLIENTS[5].blurb}
              projectImageLink={CLIENTS[5].projectImageLink}
              nextProjectLink={CLIENTS[5].nextProjectLink}
              projectDescription={CLIENTS[5].description}
            />
          </Grid>
        </Grid>
      </div>

      <Grid container direction="column" className="project-links">
          <Grid container direction="column" className="container">
            { CLIENTS.filter(c => c.name !== "Betterfin").map((client) =>
              <Grid item md={12} xs={12} >
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
            )}
          </Grid>
      </Grid>

      <Footer />
    </ Layout>
