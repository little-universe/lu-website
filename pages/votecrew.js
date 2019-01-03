import Layout from '../Layouts/layout'
import Grid from '@material-ui/core/Grid'
import Nav from '../components/Nav'
import Hero from '../components/ui/Hero'
import Project from '../components/Project'
import Footer from '../components/Footer'
import CLIENTS from '../utils/clients'

export default () =>
  <Layout title='VoteCrew' className="votecrew-page" render={(onExit) => (
    <>
      <Nav onExit={onExit}/>

      <Hero
        className="hero-votecrew project-hero"
        bgImage="https://s3.us-east-2.amazonaws.com/lu-assets/vc_logo.png"
      />

      <div className="container">
        <Grid container>
          <Grid item xs={2} />
          <Grid item xs={8} >
            <Project
              variant="full"
              serviceProvided={CLIENTS[4].services}
              projectTitle={CLIENTS[4].name}
              projectBlurb={CLIENTS[4].blurb}
              projectImageLink={CLIENTS[4].projectImageLink}
              nextProjectLink={CLIENTS[4].nextProjectLink}
              projectDescription={CLIENTS[4].description}
            />
          </Grid>
        </Grid>
      </div>

      <Grid container direction="column" className="container project-links">
        { CLIENTS.filter(c => c.name !== "VoteCrew").map((client) =>
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
