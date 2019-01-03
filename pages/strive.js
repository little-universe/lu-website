import Layout from '../Layouts/layout'
import Grid from '@material-ui/core/Grid'
import Nav from '../components/Nav'
import Hero from '../components/ui/Hero'
import Project from '../components/Project'
import Footer from '../components/Footer'
import CLIENTS from '../utils/clients'

export default () =>
  <Layout title='Strive Digital' className="strive-page" render={(onExit) => (
    <>
      <Nav onExit={onExit}/>

      <Hero
        className="hero-strive project-hero"
        bgImage="https://s3.us-east-2.amazonaws.com/lu-assets/strive-logo-web.png"
      />

      <div className="container">
        <Grid container>
          <Grid item xs={2} />
          <Grid item xs={8} >
            <Project
              variant="full"
              serviceProvided={CLIENTS[3].services}
              projectTitle={CLIENTS[3].name}
              projectBlurb={CLIENTS[3].blurb}
              projectImageLink={CLIENTS[3].projectImageLink}
              nextProjectLink={CLIENTS[3].nextProjectLink}
              projectDescription={CLIENTS[3].description}
            />
          </Grid>
        </Grid>
      </div>

      <Grid container direction="column" className="container project-links">
        { CLIENTS.filter(c => c.name !== "Strive Digital").map((client) =>
          <Grid container>
            <Grid item xs={2} />
            <Grid item xs={8}>
              <Project
                onExit={onExit}
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
    </>
  )}
  />
