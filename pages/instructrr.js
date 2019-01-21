import Layout from '../Layouts/layout'
import Grid from '@material-ui/core/Grid'
import Nav from '../components/Nav'
import Hero from '../components/ui/Hero'
import Project from '../components/Project'
import Footer from '../components/Footer'
import CLIENTS from '../utils/clients'

export default () =>
  <Layout title='Instructrr' className="instructrr-page" render={(onExit) => (
    <>
      <Hero
        className="hero-instructrr project-hero"
        bgImage="https://s3.us-east-2.amazonaws.com/lu-assets/bg-instructrr.png"
      />

      <div className="container">
        <Grid container>
          <Grid item xs={12} md={2} />
          <Grid item xs={12} md={8} >
            <Project
              variant="full"
              serviceProvided={CLIENTS[2].services}
              projectTitle={CLIENTS[2].name}
              projectBlurb={CLIENTS[2].blurb}
              projectImageLink={CLIENTS[2].projectImageLink}
              nextProjectLink={CLIENTS[2].nextProjectLink}
              projectDescription={CLIENTS[2].description}
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={1} md={1} />
          <Grid item xs={10} md={10}>
            <img className="product-screenshot" src="../static/product-screenshots/instructrr/instructrr-1.png" />
          </Grid>
        </Grid>
      </div>

      <Grid container direction="column" className="container project-links">
        { CLIENTS.filter(c => c.name !== "Instructrr").map((client) =>
          <Grid container>
            <Grid item md={12} xs={12} >
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
