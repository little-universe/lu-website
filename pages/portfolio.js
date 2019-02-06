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
  <Layout title='Little Universe - Portfolio' className="portfolio-page">
    <Hero
      className="hero-portfolio"
      headline={<>Welcome to our portfolio.</>}
      subhead={["This is some work our team has done together, and some work our team has done separately."]}
      explaination={["Not for distribution. Confidential!"]}
    />
    <div className="portfolio-page-wrapper container">
      <div className="project-container farmigo">
        <Grid container className="projectItem projectHeader" spacing={40} alignItems="flex-start">
          <Grid item className="title" xs={12} md={6}>
            <h1>Farmigo</h1>
          </Grid>
          <Grid item className="description" xs={12} md={6}>
            <p>Our mission was to create a food system that's better for everyone, from farmers to eaters. As a grocery service, the design team's challenge was to create a beautiful food experience that is enabled by the digital product.</p>
          </Grid>
        </Grid>
        <Grid container className="projectItem projectImages" spacing={40} alignItems="flex-start">
          <Grid item className="imageItem" xs={12} md={12}>
            <img className="product-screenshot" src="../static/product-screenshots/farmigo/farmigo-1.png" />
          </Grid>
          <Grid item className="imageItem" xs={12} md={12}>
            <img className="product-screenshot" src="../static/product-screenshots/farmigo/farmigo-2.png" />
          </Grid>
          <Grid item className="imageItem" xs={12} md={12}>
            <img className="product-screenshot" src="../static/product-screenshots/farmigo/farmigo-3.png" />
          </Grid>
        </Grid>
      </div>{/*Close project-container*/}
      <div className="project-container myxfitness">
        <Grid container className="projectItem projectHeader" spacing={40} alignItems="flex-start">
          <Grid item className="title" xs={12} md={6}>
            <h1>Myx Fitness</h1>
          </Grid>
          <Grid item className="description" xs={12} md={6}>
            <p>This project for Myx Fitness involved the design of an entire consumer fitness application. Aimed at the quickly growing market of home fitness, this project involved extensive product design for a native android application mounted to a stand-alone bike.</p>
            <p>The product encouraged users to schedule live workouts with live trainers and would guide them through the entire workout.</p>
          </Grid>
        </Grid>
        <Grid container className="projectItem projectImages" spacing={40} alignItems="flex-start">
          <Grid item className="imageItem" xs={12} md={12}>
            <img className="product-screenshot" src="../static/product-screenshots/myxfitness/myxfitness-1.png" />
          </Grid>
          <Grid item className="imageItem" xs={12} md={12}>
            <img className="product-screenshot" src="../static/product-screenshots/myxfitness/myxfitness-2.png" />
          </Grid>
        </Grid>
      </div>{/*Close project-container*/}
      <div className="project-container instructrr">
        <Grid container className="projectItem projectHeader" spacing={40} alignItems="flex-start">
          <Grid item className="title" xs={12} md={6}>
            <h1>Instructrr</h1>
          </Grid>
          <Grid item className="description" xs={12} md={6}>
            <p>We did visual design and user experience research for Instructrr, a company with a vision to be <em>the</em> tool for indoor cycling instructors to build and perform workouts.</p>
          </Grid>
        </Grid>
        <Grid container className="projectItem projectImages" spacing={40} alignItems="flex-start">
          <Grid item className="imageItem" xs={12} md={12}>
            <img className="product-screenshot" src="../static/product-screenshots/instructrr/instructrr-1.png" />
          </Grid>
          <Grid item className="imageItem" xs={12} md={12}>
            <img className="product-screenshot" src="../static/product-screenshots/instructrr/instructrr-2.png" />
          </Grid>
        </Grid>
      </div>{/*Close project-container*/}
      <div className="project-container votecrew">
        <Grid container className="projectItem projectHeader" spacing={40} alignItems="flex-start">
          <Grid item className="title" xs={12} md={6}>
            <h1>Vote Crew</h1>
          </Grid>
          <Grid item className="description" xs={12} md={6}>
            <p>An advocacy product that helps voters organize and hold each other accountable.</p>
          </Grid>
        </Grid>
        <Grid container className="projectItem projectImages" spacing={40} alignItems="flex-start">
          <Grid item className="imageItem" xs={12} md={12}>
            <img className="product-screenshot" src="../static/product-screenshots/votecrew/votecrew-1.png" />
          </Grid>
          <Grid item className="imageItem" xs={12} md={12}>
            <img className="product-screenshot" src="../static/product-screenshots/votecrew/votecrew-2.png" />
          </Grid>
          <Grid item className="imageItem" xs={12} md={12}>
            <img className="product-screenshot" src="../static/product-screenshots/votecrew/votecrew-3.png" />
          </Grid>
        </Grid>
      </div>{/*Close project-container*/}
    </div>
    <Footer />
  </Layout>
