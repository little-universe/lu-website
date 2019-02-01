import Layout from '../Layouts/layout'
import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import Hero from '../components/ui/Hero'
import Project from '../components/Project'
import Footer from '../components/Footer'
import LeadForm from '../components/LeadForm'
import NavLink from '../components/ui/NavLink'
import ArrowSquiggly from '../components/ArrowSquiggly'
import { Icon } from 'react-icons-kit'
import {ic_keyboard_arrow_right} from 'react-icons-kit/md/ic_keyboard_arrow_right'
import CLIENTS from '../utils/clients'
import Fade from 'react-reveal/Fade';

export default ({ theme, route }) =>
    <Layout title='Little Universe - Agency' className="agency-page">
      <Hero
        className="hero-index"
        headline={<>Every product is its own <span className="emphasis">Little Universe</span>.</>}
        subhead={["We’re Little Universe, a digital product agency based in Brooklyn, NY."]}
      />
      <div className="home-hero-bg">
        <div className="section-bubbles">
          <img className="smallWhiteBubble bubble bubbleOne" src="../static/bubble-circle.svg" />
          <img className="smallWhiteBubble bubble bubbleThree" src="../static/bubble-circle.svg" />
          <img className="smallWhiteBubble bubble bubbleFour" src="../static/bubble-circle.svg" />
        </div>
      </div>

    <div className="index-page">
    <Fade bottom distance="20px" duration={700} cascade>
      <div className="productProblem container">
        <Grid container spacing={40} alignItems="center">
          <Grid container className="containerCard" alignItems="center">
            <Grid container className="valueStatementSection" alignItems="center">
              <Grid item md={6} xs={12}>
                <h1>We solve the product problem</h1>
                <p>Our small team has collectively built up 30+ years of experience helping build, launch and scale startups.</p>
                <p className="emphasisPoint">We know how to achieve <span>product market fit</span>.</p>
              </Grid>
              <Grid item md={6} xs={12}>
                <img className="product-graphic" src="../static/product-graphic2.svg" />
              </Grid>
            </Grid>
            <Grid container className="valueStatementSection" alignItems="center">
              <Grid item md={6} xs={12}>
                <img src="../static/business-graphic2.svg" />
              </Grid>
              <Grid item md={6} xs={12}>
                <h1>Experience that goes beyond product</h1>
                <p>We’re seasoned veterans who can help your business get started on the right foot. We de-risk your product strategy while helping your business grow strategically. We can help you hire, onboard, and handoff our work with minimal technical debt.</p>
              </Grid>
            </Grid>
            <Grid container className="valueStatementSection" alignItems="center">
              <Grid item md={6} xs={12}>
                <h1>Our process is your process</h1>
                <p>We have worked on many teams with nuanced processes fitting their strategy and market. We’ve done design sprints, agile product, lean, and all those great things. Our goal is to solve problems, and we implement the right tactic in the right place for your business. We’re tool agnostic. Love JIRA? Trello? Asana? Sounds great to us.</p>
              </Grid>
              <Grid item md={6} xs={12}>
                <img className="process-graphic" src="../static/process-graphic.svg" />
              </Grid>
            </Grid>
          </Grid>
          <Link href="/about">
          <Grid container className="contactUs">
              <h2>Learn more about us <ArrowSquiggly /><Icon size={42} icon={ic_keyboard_arrow_right} /></h2>
            <Grid container className="valueStatementSection" spacing={40} alignItems="center">
              <div className="section-bubbles">
                <img className="smallBubble bubble bubbleOne" src="../static/smallBubble.svg" />
                <img className="smallBubble bubble bubbleTwo" src="../static/smallBubble.svg" />
                <img className="smallBubble bubble bubbleFour" src="../static/smallBubble.svg" />
              </div>
            </Grid>
          </Grid>
          </Link>
        </Grid>
      </div>
      </Fade>
    </div>


    {/*<div className="container">
      <Grid container className="valueStatementSection" spacing={40} alignItems="center">
        <div className="section-bubbles">
          <img className="smallYellowBubble bubble bubbleOne" src="../static/smallYellowBubble.svg" />
          <img className="smallYellowBubble bubble bubbleTwo" src="../static/smallYellowBubble.svg" />
          <img className="smallYellowBubble bubble bubbleFour" src="../static/smallYellowBubble.svg" />
        </div>
      </Grid>
    </div>*/}

    <Grid container className="container aboutUs" alignItems="center">
      <Grid container className="aboutUsStatement" alignItems="center">
        <Grid item md={12} xs={12}>
          <h1>We'd love to build something with you.</h1>
          <Link href="/work-with-us">
            <button>Work With Us</button>
          </Link>
        </Grid>
      </Grid>
    </Grid>
    <Footer />
  </Layout>
