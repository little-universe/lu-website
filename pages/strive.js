import Layout from '../Layouts/layout'
import Grid from '@material-ui/core/Grid'
import Nav from '../components/Nav'
import Hero from '../components/ui/Hero'
import Project from '../components/Project'
import Footer from '../components/Footer'
import CLIENTS from '../utils/clients'

export default () =>
  <Layout title='Strive Digital' className="strive-page projectPage">
      <Hero
        className="hero-strive project-hero"
        headline="Strive Digital"
      />
      <Grid container className="container projectAbout" spacing={40} alignItems="flex-start">
        <Grid item md={8} xs={12} className="aboutItem">
          <p>Strive Digital is a multi-channel messaging platform for progressive campaigns of all sizes. The founders of Little Universe built the platform and operate it in partnership with Strive as a joint venture.</p>
        </Grid>
      </Grid>
      <Grid container className="container projectContext" spacing={40} alignItems="flex-start">
        <Grid item md={3} xs={12} className="contextItem contextChallenge">
          <h4>Challenge</h4>
          <p>The challenge was this. We worked really hard to do this and this and that and this.</p>
        </Grid>
        <Grid item md={3} xs={12} className="contextItem contextApproach">
          <h4>Approach</h4>
          <p>We took a level approach and worked hard to make sure the design matched the intention of the business.</p>
        </Grid>
        <Grid item md={3} xs={12} className="contextItem contextValue">
          <h4>Value</h4>
          <p>Through a process of this and that we delivered a great deal of value and it was great.</p>
        </Grid>
      </Grid>
      <Grid container className="container projectCallout" spacing={40} alignItems="center">
        <Grid item md={8} xs={12} className="calloutItem">
          <h4>UX Design</h4>
          <h2>We never just jump straight into design. For this project we spent a good deal of time conducting UX research, building out proto-personas, users journeys, and visual storyboards in order to map the who, where, and how for all potential site users.</h2>
        </Grid>
      </Grid>
      <Grid container className="container projectFeatureImage projectFeatureImageLeft" spacing={40} alignItems="center">
        <Grid item md={7} xs={12} className="featureImageAsset">
          <img className="product-screenshot" src="../static/product-screenshots/strive/strive-1.png" />
        </Grid>
        <Grid item md={1} xs={0}/>
        <Grid item md={4} xs={12} className="featureImageDescription">
          <h2>Texts for days.</h2>
          <p>We built a call and text tool that was special as friggin anything and did the job it was supposed to it was great.</p>
        </Grid>
      </Grid>
      <Grid container className="container projectSplitScreen" spacing={40} alignItems="center">
        <Grid item md={6} xs={12} className="splitScreenItem splitScreenLeft">

        </Grid>
        <Grid item md={6} xs={12} className="splitScreenItem splitScreenRight">

        </Grid>
      </Grid>
      <Grid container className="container projectFeatureImage .projectFeatureImageCenter" spacing={40} alignItems="center">
        <Grid item md={2} xs={12}/>
        <Grid item md={8} xs={12} className="featureImageAsset">
          <img className="product-screenshot" src="../static/product-screenshots/strive/strive-1.png" />
        </Grid>
      </Grid>
    <Footer />
  </ Layout>
