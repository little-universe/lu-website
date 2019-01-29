import Layout from '../Layouts/layout'
import Link from 'next/link'
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

    <div className="container">
      <Grid container className="projectAbout" spacing={40}>
        <Grid item md={8} xs={12} className="aboutItem">
          <h2>Betterfin is a service for business owners to get educated on small business lending and navigate commercial products with confidence. They provide transparency into lending through data analytics to help owners secure business financing they understand.</h2>
        </Grid>
      </Grid>
    </div>

    <div className="projectContext">
      <div className="container">
        <Grid container spacing={40} alignItems="flex-start">
          <Grid item md={4} xs={12} className="contextItem">
            <h2>Challenge</h2>
          </Grid>
          <Grid item md={8} xs={12} className="contextItem">
            <p>Betterfin is tackling a massively complex tasks of offering businesses transparency in navigating financing options. We needed to distill it into a product users could understand and adopt.</p>
          </Grid>
        </Grid>
      </div>

      <div className="container">
        <Grid container spacing={40} alignItems="flex-start">
          <Grid item md={4} xs={12} className="contextItem">
            <h2>Approach</h2>
          </Grid>
          <Grid item md={8} xs={12} className="contextItem">
            <p>We worked closely with the Betterfin team to synthesize their wisdom about the SMB lending industry and translate that into a valuable product for their customers.</p>
          </Grid>
        </Grid>
      </div>

      <div className="container">
        <Grid container spacing={40} alignItems="flex-start">
          <Grid item md={4} xs={12} className="contextItem">
            <h2>Value</h2>
          </Grid>
          <Grid item md={8} xs={12} className="contextItem">
            <p>The product we shipped makes small business financing friendly, transparent and, most importantly, dead simple. Businesses can efficiently use this tool to see how lenders view them, and get offers from over 30 lenders in one portal.</p>
          </Grid>
        </Grid>
      </div>
    </div>

    <div className="projectCallout">
      <div className="container">
        <Grid container spacing={40} alignItems="center">
          <Grid item xs={12} className="calloutItem">
          <h4>Building Trust</h4>
          <h2>Betterfin had built complex tech. They were frustrated that it was not packaged into a product that could build trust with their customers, satisfy their investors, and - of course - make their team proud. We worked closely with them to create a <span className="emphasis">powerful, clean and polished product</span>.</h2>
          </Grid>
        </Grid>
      </div>
    </div>

    <div className="projectFeatureImage">
      <div className="container">
        <Grid container className="projectFeatureImageLeft" spacing={40} alignItems="center">
          <Grid item md={7} xs={12} className="featureImageAsset">
            <img className="product-screenshot" src="../static/product-screenshots/betterfin/betterfin-5-nobg.png" />
          </Grid>
          <Grid item md={1} xs={0}/>
          <Grid item md={4} xs={12} className="featureImageDescription">
            <h2>Hello, small business!</h2>
            <p>Betterfin exchanges data for value, and their onboarding flow captures that data in a clean and efficient manner.</p>
          </Grid>
        </Grid>
      </div>
    </div>

    <div className="container">
      <Grid container className="projectSplitScreen" spacing={40} alignItems="center">
        <Grid item md={6} xs={12} className="splitScreenItem splitScreenLeft">
          <img className="product-screenshot" src="../static/product-screenshots/betterfin/betterfin-1-nobg.png" />
        </Grid>
        <Grid item md={6} xs={12} className="splitScreenItem splitScreenRight">
          <img className="product-screenshot" src="../static/product-screenshots/betterfin/betterfin-3-nobg.png" />
        </Grid>
      </Grid>
    </div>

    <div className="projectFeatureImage">
      <div className="container">
        <Grid container  spacing={40} alignItems="center">
          <Grid item md={2} xs={12}/>
          <Grid item md={8} xs={12} className="featureImageAsset">
            <img className="product-screenshot" src="../static/product-screenshots/betterfin/betterfin-4-nobg.png" />
          </Grid>
        </Grid>
      </div>
    </div>

    <div className="container">
      <Grid container className="nextProject" spacing={40} alignItems="center">
        <Grid item md={12} xs={12}>
          <p>Next Up</p>
          <h2><Link href="/strive">Strive Digital</Link></h2>
        </Grid>
      </Grid>
    </div>

    <Footer />
  </ Layout>
