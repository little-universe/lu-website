import Layout from '../Layouts/layout'
import Grid from '@material-ui/core/Grid'
import Nav from '../components/Nav'
import Hero from '../components/ui/Hero'
import Project from '../components/Project'
import Footer from '../components/Footer'
import CLIENTS from '../utils/clients'

export default () =>
  <Layout title='Myx Fitness' className="myxfitness-page">
    <Hero
      className="hero-myxfitness project-hero"
      bgImage="https://s3.us-east-2.amazonaws.com/lu-assets/bg-myxfitness.png"
    />
      <div className="container">
        <Grid container>
          <Grid item xs={1} md={1} />
          <Grid item xs={12} md={8} >
            <Project
              variant="full"
              serviceProvided={CLIENTS[1].services}
              projectTitle={CLIENTS[1].name}
              projectBlurb={CLIENTS[1].blurb}
              projectImageLink={CLIENTS[1].projectImageLink}
              nextProjectLink={CLIENTS[1].nextProjectLink}
              projectDescription={CLIENTS[1].description}
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={1} md={1} />
          <Grid item xs={10} md={10}>
            <img className="product-screenshot" src="../static/product-screenshots/myxfitness/myxfitness-1.png" />
          </Grid>
        </Grid>
      </div>

      <Grid container direction="column" className="container project-links">
        { CLIENTS.filter(c => c.name !== "Myx Fitness").map((client) =>
          <Grid container direction="column" className="container">
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
          </Grid>
        )}
      </Grid>

      <Footer />
    </ Layout>
