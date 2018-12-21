import Layout from '../Layouts/layout'
import Grid from '@material-ui/core/Grid'
import Nav from '../components/Nav'
import Hero from '../components/ui/Hero'
import Project from '../components/Project'
import Footer from '../components/Footer'
import CLIENTS from '../utils/clients'

export default () =>
  <Layout title='Myx Fitness' className="myxfitness-page" render={(onExit) => (
    <>
      <Nav onExit={onExit}/>

      <Hero
        className="hero-myxfitness"
      />

      <div className="container">
        <Grid container>
          <Grid item xs={2} />
          <Grid item xs={8} >
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
      </div>

      <Grid container direction="column" className="container">
        { CLIENTS.filter(c => c.name !== "Myx Fitness").map((client) =>
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
