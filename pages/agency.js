import Layout from '../Layouts/layout'
import Grid from '@material-ui/core/Grid'
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
      <Layout title='Little Universe - Agency' className="agency-page" render={(onExit) => {
        return (
          <>
          <Nav onExit={onExit}/>

          <Hero
            className="hero-agency"
            headline="We are concerned not only with the way Digital Products look, function, or produce value, but with the way they are built, maintained, and scaled."
          />

        <Grid container className="container agencyBlurb" alignItems="center">
          <Grid item md={6} xs={12}>
            <LineDrawing className={`line-drawing-wrapper ${visible ? 'animate' : ''}`} />
          </Grid>
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
          <Grid item md={6} xs={12} className="teamMembers">
            <h1 className="adrianName">Adrian Del Balso</h1>
            <p>Is a Product Designer...</p>
            <h1 className="zachName">Zach Smith</h1>
            <p>Is a Full Stack Developer...</p>
            <h1 className="taylorName">Taylor Zanke</h1>
            <p>Is a Product Designer...</p>
          </Grid>
          <Grid item md={6} xs={false} className="teamPhotos">
            <img className="adrian" src=""></img>
            <img className="zach" src=""></img>
            <img className="taylor" src=""></img>
          </Grid>
        </Grid>

        <Grid container direction="column" className="container">
          { CLIENTS.map((client) =>
            <Grid container>
              <Grid item xs={12}>
                <Project
                  onExit={onExit}
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
        </>
        )
      }}/>
    )
  }
}

export default Agency;
