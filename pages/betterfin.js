import Layout from '../Layouts/layout'
import Grid from '@material-ui/core/Grid'
import Nav from '../components/Nav'
import Hero from '../components/ui/Hero'
import Project from '../components/Project'
import Footer from '../components/Footer'
import CLIENTS from '../utils/clients'

export default () =>
  <Layout title='Betterfin' className="betterfin-page projectPage">
    <Hero
      className="hero-betterfin project-hero"
      bgImage="../static/bg-betterfin.svg"
    />

    { /* <Grid className="hero hero-betterfin project-hero" container alignItems="center">
      <Grid item md={4} xs={12}>
        <h1 className="headline">Betterfin</h1>
      </Grid>
      <img className="hero-screenshot" src="../static/product-screenshots/betterfin/betterfin-hero.png" />
    </Grid>
    */ }

    <Grid container className="container projectAbout" spacing={40} alignItems="flex-start">
      <Grid item md={8} xs={12} className="aboutItem">
        <p>Betterfin is a service for business owners to get educated on small business lending and navigate commercial products with confidence. They provide transparency into lending through data analytics to help owners secure business financing they understand.</p>
      </Grid>
    </Grid>
    <Grid container className="container projectContext" spacing={40} alignItems="flex-start">
      <Grid item md={3} xs={12} className="contextItem contextChallenge">
        <h2>Challenge</h2>
        <p>Betterfin is tackling a massively complex tasks of offering businesses transparency in navigating financing options. We needed to distill it into a product users could understand and adopt.</p>
      </Grid>
      <Grid item md={3} xs={12} className="contextItem contextApproach">
        <h2>Approach</h2>
        <p>We worked closely with the Betterfin team to synthesize their wisdom about the SMB lending industry and translate that into a valuable product for their customers.</p>
      </Grid>
      <Grid item md={3} xs={12} className="contextItem contextValue">
        <h2>Value</h2>
        <p>The product we shipped makes small business financing friendly, transparent and, most importantly, dead simple. Businesses can efficiently use this tool to see how lenders view them, and get offers from over 30 lenders in one portal.</p>
      </Grid>
    </Grid>
    <Grid container className="container projectCallout" spacing={40} alignItems="center">
      <Grid item md={8} xs={12} className="calloutItem">
        <h4>Building Trust</h4>
        <h2>Betterfin had built complex tech. They were frustrated that it was not packaged into a product that could build trust with their customers, satisfy their investors, and - of course - make their team proud. We worked closely with them to create a <span className="emphasis">powerful, clean and polished product</span>.</h2>
      </Grid>
    </Grid>
    <Grid container className="container projectFeatureImage projectFeatureImageLeft" spacing={40} alignItems="center">
      <Grid item md={7} xs={12} className="featureImageAsset">
        <img className="product-screenshot" src="../static/product-screenshots/betterfin/betterfin-5.png" />
      </Grid>
      <Grid item md={1} xs={0}/>
      <Grid item md={4} xs={12} className="featureImageDescription">
        <h2>Hello, small business!</h2>
        <p>Betterfin exchanges data for value, and their onboarding flow captures that data in a clean and efficient manner.</p>
      </Grid>
    </Grid>
    <Grid container className="container projectSplitScreen" spacing={40} alignItems="center">
      <Grid item md={6} xs={12} className="splitScreenItem splitScreenLeft">
        <img className="product-screenshot" src="../static/product-screenshots/betterfin/betterfin-1.png" />
      </Grid>
      <Grid item md={6} xs={12} className="splitScreenItem splitScreenRight">
        <img className="product-screenshot" src="../static/product-screenshots/betterfin/betterfin-3.png" />
      </Grid>
    </Grid>
    <Grid container className="container projectFeatureImage .projectFeatureImageCenter" spacing={40} alignItems="center">
      <Grid item md={2} xs={12}/>
      <Grid item md={8} xs={12} className="featureImageAsset">
        <img className="product-screenshot" src="../static/product-screenshots/betterfin/betterfin-4.png" />
      </Grid>
    </Grid>

    <Footer />
  </ Layout>
