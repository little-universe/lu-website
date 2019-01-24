import Layout from '../Layouts/layout'
import Grid from '@material-ui/core/Grid'
import Nav from '../components/Nav'
import Hero from '../components/ui/Hero'
import Project from '../components/Project'
import Footer from '../components/Footer'
import CLIENTS from '../utils/clients'

export default () =>
  <Layout title='Betterfin' className="betterfin-page">
    <>
      <Hero
        className="hero-betterfin project-hero"
        bgImage="https://s3.us-east-2.amazonaws.com/lu-assets/bg-betterfin.svg"
      />

      <div className="container">
        <Grid container>
          <Grid item xs={1} />
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
        <Grid container>
          <Grid item xs={1} />
          <Grid item xs={10} >
            <img className="product-screenshot" src="../static/product-screenshots/betterfin/betterfin-1.png" />
            <img className="product-screenshot" src="../static/product-screenshots/betterfin/betterfin-2.png" />
            <img className="product-screenshot" src="../static/product-screenshots/betterfin/betterfin-3.png" />
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
    </>
  </ Layout>
