import Layout from '../Layouts/layout'
import Grid from '@material-ui/core/Grid'
import Link from 'next/link'
import Nav from '../components/Nav'
import Hero from '../components/ui/Hero'
import Project from '../components/Project'
import Footer from '../components/Footer'
import LineDrawing from '../components/LineDrawing'

import CLIENTS from '../utils/clients'

class Agency extends React.Component {
  state = {
    visible: false
  }

  render() {
    const { visible } = this.state;
    return (
      <Layout title='Little Universe - Agency' className="agency-page">
        <div className="home-hero-bg agency">
          <img className="yellow-bubble bubble" src="https://s3.us-east-2.amazonaws.com/lu-assets/yellow.svg" />
          <img className="green-bubble bubble" src="https://s3.us-east-2.amazonaws.com/lu-assets/green.svg" />
          <Hero
            className="hero-agency"
            headline={<>We're a pretty cool bunch of folks who <br/>absolutely <span className="emphasis">love product</span>.</>}
          />
        </div>

        {/*<Hero
          className="hero-agency"
          bgImage="../static/office-2.JPG"
        />*/}

        {/*}<div className="home-hero-bg">
          <div className="section-bubbles">
            <img className="smallWhiteBubble bubble bubbleOne" src="../static/bubble-circle.svg" />
            <img className="smallWhiteBubble bubble bubbleThree" src="../static/bubble-circle.svg" />
            <img className="smallWhiteBubble bubble bubbleFour" src="../static/bubble-circle.svg" />
          </div>
      </div>*/}

        <div className="container">
          <Grid container spacing={40} alignItems="center">
            <Grid item md={6} xs={12}>
            <h1>Small team, <span className="emphasis">full stack</span>.</h1>
            <p>Our team has gone to bat with all things startup. We’ve built, launched and scaled multiple ventures as founders, managers, operators and dreamers.</p>
            <p>We’ve seen huge successes and formidable failures. We understand what it means to operate in ambiguity, where to make tough calls, and we have the skills to back it up.</p>
            </Grid>
            <Grid item md={6} xs={12}>
              <img style={{width: "100%"}} src="../static/office-2.JPG" />
            </Grid>
          </Grid>
        </div>

        <div className="container">
{/*
          <Grid container className="small-team-container">
            <Grid item md={3} xs={12}/>
            <Grid item md={6} xs={12} style={{textAlign: "center"}}>
              <h1>Small team, <span className="emphasis">full stack</span>.</h1>
              <p>Our team has gone to bat with all things startup. We’ve built, launched and scaled multiple ventures as founders, managers, operators and dreamers.</p>
              <p>We’ve seen huge successes and formidable failures. We understand what it means to operate in ambiguity, where to make tough calls, and we have the skills to back it up.</p>
            </Grid>
          </Grid>*/}

          <Grid container className="skills-container" spacing={40}>
            <Grid item md={6} xs={12}>
              <h2>Design</h2>
              <p className="skill">UX Design</p>
              <p className="skill">UI Design</p>
              <p className="skill">User Research</p>
            </Grid>
            <Grid item md={6} xs={12}>
              <p className="skill-description">Our designers are fluent frontend developers, to ensure designs are implemented to the highest possible quality while staying lean and fast.</p>
            </Grid>
          </Grid>

          <Grid container className="skills-container" spacing={40}>
            <Grid item md={6} xs={12}>
              <h2>Web Development</h2>
              <p className="skill">React</p>
              <p className="skill">Next</p>
              <p className="skill">Node</p>
            </Grid>
            <Grid item md={6} xs={12}>
              <p className="skill-description">We take a cross-functional approach to web development, backed by some of the best developers in the industry. We know how to move fast and craft great products.</p>
            </Grid>
          </Grid>

          <Grid container className="skills-container" spacing={40}>
            <Grid item md={6} xs={12}>
              <h2>Data Engineering</h2>
              <p className="skill">Scala</p>
              <p className="skill">Spark</p>
              <p className="skill">Databricks</p>
              <p className="skill">Airflow</p>
            </Grid>
            <Grid item md={6} xs={12}>
              <p className="skill-description">Having built and scaled massive data pipelines, we make things work under the hood.</p>
            </Grid>
          </Grid>

          <Grid container className="skills-container" spacing={40}>
            <Grid item md={6} xs={12}>
              <h2>Strategy</h2>
              <p className="skill">Product Management</p>
              <p className="skill">Business Strategy</p>
              <p className="skill">Team Management</p>
            </Grid>
            <Grid item md={6} xs={12}>
              <p className="skill-description">We’ve been early employees, managers and founders at startups that have scaled through multiple milestones and funding rounds. We’re strategic thinkers who understand what it means to build a company.</p>
            </Grid>
          </Grid>

          <Grid container className="cta-container">
            <Grid item md={3} xs={12}/>
            <Grid item md={6} xs={12} style={{textAlign: "center"}}>
              <h1>Can't wait to hang out?</h1>
              <p>Let's meet up and build something together.</p>
              <Link href='/work-with-us'><button>Get in touch</button></Link>
            </Grid>
          </Grid>
        </div>

        <Footer />
      </Layout>
    )
  }
}

export default Agency;


{ /* OLD CONTENT
  <Layout title='Little Universe - Agency' className="agency-page">
  <div className="home-hero-bg agency">
    <img className="yellow-bubble bubble" src="https://s3.us-east-2.amazonaws.com/lu-assets/yellow.svg" />
    <img className="green-bubble bubble" src="https://s3.us-east-2.amazonaws.com/lu-assets/green.svg" />
    <Hero
      className="hero-agency"
      headline="We are concerned not only with the way Digital Products look, function, or produce value, but with the way they are built, maintained, and scaled."
    />
  </div>

    <Grid container className="container agencyBlurb" alignItems="center">
      <Grid item md={6} xs={12}/>
      <Grid item md={6} xs={12}>
        <p>We are a team of obsessive, critical, and evolutionary makers interested in the way our contemporary Digital context will evolve and continue to influence our lives beyond the screen.</p>

        <p>We work diligently and systematically to design, build, scale, and maintain products, websites, and libraries for our clients which support their missions and targets. Through our operation as an agency we are granted an objective view into the problems of our clients allowing for unbiased decision making and focused product thinking.</p>

        <p>We not only implement code, design interfaces, and structure product development, but build unique processes tailored to our client’s need and digital goals.</p>

        <p>Though we think intensely about the way in which Digital Products have come to influence the cultural, social, and political environments of our time, we find ourselves returning to questions which concern their own language and way of addressing reality. </p>

        <p>Each product, service, or website designed and built for a Digital context involves an exercise in collection. The mainstream internet is built as a result of a robust structure of reference and documentation. Documentation which describes the application and implementation of contextually valuable snippets, kits, or libraries.</p>

        <p>This excites us, as it introduces a unique opportunity to question the languages and vocabularies which building Digital Products involve. The designer, engineer, or technological worker expresses a sensibility and attitude in Digital design not through master-plans or full-scope design and development exercises, but through the way in which they decide to integrate, refresh, and re-incarnate fragments of the existing web into a unique and evolving context.</p>

        <p>We think about the part as well as the whole, the detail within the harmonious outcome, each as its own Little Universe.</p>
      </Grid>
    </Grid>
    <Grid container className="container team">
      <Grid item md={6} xs={12} />
      <Grid item md={4} xs={12} className="teamMembers">
        <p>Current Team Members</p>
        <h1 className="adrianName">Adrian Del Balso</h1>
        <h1 className="zachName">Zach Smith</h1>
        <h1 className="taylorName">Taylor Zanke</h1>
      </Grid>
    </Grid>

    <Grid container direction="column" className="container">
      { CLIENTS.map((client) =>
        <Grid container>
          <Grid item xs={12}>
            <Project
              variant="preview"
              serviceProvided={client.services}
              projectTitle={client.name}
              projectBlurb={client.blurb}
              projectImageLink={client.projectImageLink}
              nextProjectLink={client.nextProjectLink}
              url={client.url}
            />
          </Grid>
        </Grid>
      )}
    </Grid>

    <Footer />
  </Layout>
*/ }
