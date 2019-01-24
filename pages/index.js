import Layout from '../Layouts/layout'
import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import Hero from '../components/ui/Hero'
import Project from '../components/Project'
import Footer from '../components/Footer'
import CLIENTS from '../utils/clients'

export default () =>
    <>
      <div className="home-hero-bg">
        <img className="navy-bubble bubble" src="https://s3.us-east-2.amazonaws.com/lu-assets/navy.svg" />
        <img className="yellow-bubble bubble" src="https://s3.us-east-2.amazonaws.com/lu-assets/yellow.svg" />
        <img className="oatmeal-bubble bubble" src="https://s3.us-east-2.amazonaws.com/lu-assets/oatmeal.svg" />
        <img className="green-bubble bubble" src="https://s3.us-east-2.amazonaws.com/lu-assets/green.svg" />
        <Hero
          className="hero-index"
          headline={[<span className="emphasis">Little Universe</span>, " is a digital product agency and research studio."]}
        />
      </div>

    <Grid container className="container" spacing={40} alignItems="center">
      <Grid item md={6} xs={12}>
        <h1>We solve the product problem</h1>
        <p>Our small team has collectively built up 30+ years of experience helping build, launch and scale startups.</p>
        <p>We know how to achieve <span className="emphasis">product market fit.</span></p>
      </Grid>
      <Grid item md={6} xs={12}>
        <img className="homepage-graphic" src="https://s3.us-east-2.amazonaws.com/lu-assets/product-graphic.svg" />
      </Grid>
    </Grid>

    <Grid container className="container" spacing={40} alignItems="center">
      <Grid item md={5} xs={12} justify="center">
        <img className="homepage-graphic" src="https://s3.us-east-2.amazonaws.com/lu-assets/business-graphic.svg" />
      </Grid>
      <Grid item md={1} xs={12} />
      <Grid item md={6} xs={12}>
        <h1>Our experience goes beyond product</h1>
        <p>We’re seasoned veterans who can help your business get started on the right foot. We de-risk your product strategy while helping your business grow strategically. We can help you hire, onboard, and handoff our work with minimal technical debt.</p>
      </Grid>
    </Grid>

    <hr />

    <Grid container direction="column" className="container">
      <h1>A selection of projects we've worked on</h1>
      { CLIENTS.map((client) =>
        <Grid container>
          <Grid item xs={12}>
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

    <Grid container className="container" spacing={40} direction="column" justify="center" alignItems="center">
      <h1>Ready to work together?</h1>
      <Link href='/work-with-us'>
        <button>Get started</button>
      </Link>
    </Grid>

    <Footer />
  </>
