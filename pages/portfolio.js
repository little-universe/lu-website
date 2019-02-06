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
    />
    <div className="portfolio-page-wrapper container">
      <div className="project-container farmigo">
        <Grid container className="projectItem projectHeader" spacing={40} alignItems="center">
          <Grid item className="title" xs={12} md={6}>
            <h1>Farmigo</h1>
          </Grid>
          <Grid item className="description" xs={12} md={6}>
            <p>This was</p>
          </Grid>
        </Grid>
        <Grid container className="projectItem projectImages" spacing={40} alignItems="center">
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
        <Grid container className="projectItem projectHeader" spacing={40} alignItems="center">
          <Grid item className="title" xs={12} md={6}>
            <h1>Myx Fitness</h1>
          </Grid>
          <Grid item className="description" xs={12} md={6}>
            <p>This was</p>
          </Grid>
        </Grid>
        <Grid container className="projectItem projectImages" spacing={40} alignItems="center">
          <Grid item className="imageItem" xs={12} md={12}>
            <img className="product-screenshot" src="../static/product-screenshots/myxfitness/myxfitness-1.png" />
          </Grid>
          <Grid item className="imageItem" xs={12} md={12}>
            <img className="product-screenshot" src="../static/product-screenshots/myxfitness/myxfitness-2.png" />
          </Grid>
        </Grid>
      </div>{/*Close project-container*/}
      <div className="project-container instructrr">
        <Grid container className="projectItem projectHeader" spacing={40} alignItems="center">
          <Grid item className="title" xs={12} md={6}>
            <h1>Instructrr</h1>
          </Grid>
          <Grid item className="description" xs={12} md={6}>
            <p>This was</p>
          </Grid>
        </Grid>
        <Grid container className="projectItem projectImages" spacing={40} alignItems="center">
          <Grid item className="imageItem" xs={12} md={12}>
            <img className="product-screenshot" src="../static/product-screenshots/instructrr/instructrr-1.png" />
          </Grid>
        </Grid>
      </div>{/*Close project-container*/}
    </div>
    <Footer />
  </Layout>
