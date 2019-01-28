import Layout from '../Layouts/layout'
import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import Nav from '../components/Nav'
import Hero from '../components/ui/Hero'
import Project from '../components/Project'
import Research from '../components/Research'
import Footer from '../components/Footer'
import CLIENTS from '../utils/clients'

export default () =>
  <Layout title='Little Universe - Work' className="work-page">
  <div className="home-hero-bg agency">
    <img className="yellow-bubble bubble" src="https://s3.us-east-2.amazonaws.com/lu-assets/yellow.svg" />
    <img className="green-bubble bubble" src="https://s3.us-east-2.amazonaws.com/lu-assets/green.svg" />
    <Hero
      className="hero-workPage"
      headline={<>We make a difference for our clients.</>}
      subhead={["Each project has its own parameters for success."]}
    />
    </div>
    <Grid container className="container workList" spacing={40} alignItems="center">
      <Grid container className="containerCard workContainer" spacing={40} alignItems="center">
        <Link href="/strive">
          <Grid item md={6} xs={12} className="workProject workStrive">
            <h2>Strive Digital</h2>
            <p>See how we helped strive digital build a tool for text message campaigns.</p>
            <img className="product-screenshot" src="../static/product-screenshots/strive/strive-1.png" />
          </Grid>
        </Link>
        <Link href="/betterfin">
          <Grid item md={6} xs={12} className="workProject workBetterfin">
            <h2>Betterfin</h2>
            <p>See how we helped Betterfin get to a compelling MVP and redesigned application.</p>
            <img className="product-screenshot" src="../static/product-screenshots/betterfin/betterfin-1.png" />
          </Grid>
        </Link>
      </Grid>
      <Grid container className="container linksToWork" spacing={40} alignItems="center">
      <Grid item md={6} xs={12} className="workLink"><a href="https://www.myxfitness.com/">Myx Fitness</a></Grid>
      </Grid>
    </Grid>


  <Footer />
</ Layout>
