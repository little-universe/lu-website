import Layout from '../Layouts/layout'
import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import Nav from '../components/Nav'
import Hero from '../components/ui/Hero'
import Project from '../components/Project'
import Footer from '../components/Footer'
import CLIENTS from '../utils/clients'

export default () =>
  <Layout className="home-page" title='Little Universe - Home' render={(onExit) => {
    return (
      <>
      <Nav onExit={onExit} />

      <div className="home-hero-bg">
        <img className="navy-bubble bubble" src="https://s3.us-east-2.amazonaws.com/lu-assets/navy.svg" />
        <img className="yellow-bubble bubble" src="https://s3.us-east-2.amazonaws.com/lu-assets/yellow.svg" />
        <Hero
          className="hero-index"
          headline="Little Universe is a digital product design agency and research studio."
        />
      </div>

    <Grid container direction="column" className="container">
      { CLIENTS.map((client) =>
        <Grid container>
          <Grid item xs={12}>
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
    )
  }} />
