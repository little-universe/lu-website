import Layout from '../Layouts/layout'
import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import Hero from '../components/ui/Hero'
import Project from '../components/Project'
import Footer from '../components/Footer'
import LeadForm from '../components/LeadForm'
import NavLink from '../components/ui/NavLink'
import CLIENTS from '../utils/clients'

export default ({ theme, route }) =>
    <>
        <Hero
          className="hero-index"
          headline={["Every product is its own Little Universe."]}
          subhead={["We’re Little Universe, a digital product agency based in Brooklyn, NY."]}
        />
        <div className="home-hero-bg">
          <div className="section-bubbles">
            <img className="smallWhiteBubble bubble bubbleOne" src="../static/bubble-circle.svg" />
            <img className="smallWhiteBubble bubble bubbleTwo" src="../static/bubble-circle.svg" />
            <img className="smallWhiteBubble bubble bubbleThree" src="../static/bubble-circle.svg" />
            <img className="smallWhiteBubble bubble bubbleFour" src="../static/bubble-circle.svg" />
          </div>
      </div>
    <Grid container className="container productProblem" spacing={40} alignItems="center">
      <Grid container className="containerCard" spacing={40} alignItems="center">
        <Grid container className="valueStatementSection" alignItems="center">
          <Grid item md={6} xs={12}>
            <h1>We solve the product problem.</h1>
            <p>Our small team has collectively built up 30+ years of experience helping build, launch and scale startups.</p>
            <p className="emphasisPoint">We know how to achieve <span>product market fit</span>.</p>
          </Grid>
        </Grid>
        <Grid container className="valueStatementSection" alignItems="center">
          <Grid item md={6} xs={12} />
          <Grid item md={6} xs={12}>
            <h1>Our experience goes beyond product.</h1>
            <p>We’re seasoned veterans who can help your business get started on the right foot. We de-risk your product strategy while helping your business grow strategically. We can help you hire, onboard, and handoff our work with minimal technical debt.</p>
          </Grid>
        </Grid>
        <Grid container className="valueStatementSection" alignItems="center">
          <Grid item md={6} xs={12}>
            <h1>Our process is your process</h1>
            <p>We have worked on many teams with nuanced processes fitting their strategy and market. We’ve done design sprints, agile product, lean, and all those great things. Our goal is to solve problems, and we implement the right tactic in the right place for your business. We’re tool agnostic. Love JIRA? Trello? Asana? Sounds great to us.</p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    <Grid container className="container contactUs" spacing={40} alignItems="center">
      <Grid container className="containerCard" spacing={40} alignItems="center">
      <Grid container className="valueStatementSection" alignItems="center">
        <Grid item md={12} xs={12}>
          <h2>Small Team, Full Stack.</h2>
          <p>
            <Link href="/agency">
              <Grid item className={ route === '/agency' && 'disable' }>
                <NavLink linkTitle="Check Us Out" />
              </Grid>
            </Link>
          </p>
        </Grid>
      </Grid>
      </Grid>
      <div className="section-bubbles">
        <img className="smallYellowBubble bubble bubbleOne" src="../static/smallYellowBubble.svg" />
        <img className="smallYellowBubble bubble bubbleTwo" src="../static/smallYellowBubble.svg" />
        <img className="smallYellowBubble bubble bubbleFour" src="../static/smallYellowBubble.svg" />
      </div>
    </Grid>


    <Grid container className="container aboutUs" spacing={40} alignItems="center">
      <Grid container className="aboutUsStatement" alignItems="center">
        <Grid item md={6} xs={12}>
          <h1>Let's Work Together.</h1>
        </Grid>
      </Grid>
      <Grid container className="aboutUsStatement" alignItems="center">
        <Grid item md={6} xs={12}>
          <p>Drop us a line mayne.</p>
          <p>
            <Link href="/agency">
              <Grid item className={ route === '/agency' && 'disable' }>
                <NavLink linkTitle="Learn More" />
              </Grid>
            </Link>
          </p>
        </Grid>
      </Grid>

    </Grid>

    <Footer />
  </>
