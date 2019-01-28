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

export default ({ theme, route }) =>
    <>
        <Hero
          className="hero-index"
          headline={<>Every product is its own <br /><span className="emphasis">Little Universe</span>.</>}
          subhead={["We’re Little Universe, a digital product agency based in Brooklyn, NY."]}
        />
        <div className="home-hero-bg">
          <div className="section-bubbles">
            <img className="smallWhiteBubble bubble bubbleOne" src="../static/bubble-circle-blue.svg" />
            <img className="smallWhiteBubble bubble bubbleThree" src="../static/bubble-circle-lightyellow.svg" />
            <img className="smallWhiteBubble bubble bubbleFour" src="../static/bubble-circle-red.svg" />
          </div>
      </div>
    <Grid container className="container productProblem" spacing={40} alignItems="center">
      <Grid container className="containerCard" spacing={40} alignItems="center">
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
    </Grid>


    <Grid container className="container contactUs" spacing={40} alignItems="center">
      <Link href="/about">
        <Grid container className="containerCard" spacing={40} alignItems="center">
          <Grid container className="valueStatementSection" alignItems="center">
            <Grid item md={12} xs={12}>
              <h2>Learn more about us <ArrowSquiggly /><Icon size={42} icon={ic_keyboard_arrow_right} /></h2>
            </Grid>
          </Grid>
        </Grid>
      </Link>
      <div className="section-bubbles">
        <img className="smallYellowBubble bubble bubbleOne" src="../static/bubble-circle-blue.svg" />
        <img className="smallYellowBubble bubble bubbleTwo" src="../static/smallYellowBubble.svg" />
        <img className="smallYellowBubble bubble bubbleFour" src="../static/bubble-circle-red.svg" />
      </div>
    </Grid>


    <Grid container className="container aboutUs" spacing={40} alignItems="center">
      <Grid container className="aboutUsStatement" alignItems="center">
        <Grid item md={8} xs={12}>
          <h1>Let's Work Together.</h1>
        </Grid>
      </Grid>
    </Grid>

    <Footer />
  </>
