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
        bgImage="../static/bg-strive.png"
      />
      <Grid container className="container projectAbout" spacing={40}>
        <Grid item md={3} xs={12} />
        <Grid item md={6} xs={12} className="aboutItem">
          <p>Strive Digital is multi-channel messaging platform used by nonprofits and campaigns across the country to recruit and activate their supporters.</p>
        </Grid>
      </Grid>
      <Grid container className="container projectContext" spacing={40} alignItems="flex-start">
        <Grid item md={4} xs={12} className="contextItem contextChallenge">
          <h2>Challenge</h2>
          <p>In the aftermath of the 2016 elections, advocacy organizations large and small across the country were seeking more effective tools to activate their membership. The founders of Strive Digital had built a network of activists ready for a new and affordable texting tool built specifically for advocacy. However, they didn’t have a product team or the budget to hire an entire team to begin building out the solution they had identified.</p>
        </Grid>
        <Grid item md={4} xs={12} className="contextItem contextApproach">
          <h2>Approach</h2>
          <p>We stepped in with a product strategy that fit Strive Digital’s processes and budget. Starting with the development of an MVP, we created a product roadmap tied to growth milestones, so Strive could share the product vision with customers and invest in new features whenever they had the revenue to support the work.</p>
        </Grid>
        <Grid item md={4} xs={12} className="contextItem contextValue">
          <h2>Value</h2>
          <p>Strive Digital is used by hundreds of advocacy organizations and campaigns across the country. Just over a year after Little Universe built Strive’s MVP, the tool facilitates thousands of text messages to campaign supporters and hundreds of calls to legislators on a weekly basis.</p>
        </Grid>
      </Grid>
      <Grid container className="container projectCallout" spacing={40} alignItems="center">
        <Grid item md={8} xs={12} className="calloutItem">
          <h4>Partnership</h4>
          <h2>Our process with Strive fostered a deeper strategic partnership between our two teams, where growth and product enjoyed a shared interest in success and creative problem solving.</h2>
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
          <h2>Multi Channel</h2>
          <p> Strive allowed users to Design and develop custom messaging capabilities optimized for their needs, including powerful machine learning, platform extensions, and deep integrations with a CRM.</p>
        </Grid>
        <Grid item md={6} xs={12} className="splitScreenItem splitScreenRight">
          <img className="splitScreenImg" src="../static/product-screenshots/strive/services-graphic.png" />
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
