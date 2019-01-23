import Layout from '../Layouts/layout'
import Grid from '@material-ui/core/Grid'
import Nav from '../components/Nav'
import Hero from '../components/ui/Hero'
import Project from '../components/Project'
import Research from '../components/Research'
import Footer from '../components/Footer'
import RESEARCH from '../utils/research'
import CLIENTS from '../utils/clients'

export default () =>
  <Layout title='Little Universe - Research' className="research-page">
  <div className="home-hero-bg research">
    <img className="navy-bubble bubble" src="https://s3.us-east-2.amazonaws.com/lu-assets/navy.svg" />
    <img className="oatmeal-bubble bubble" src="https://s3.us-east-2.amazonaws.com/lu-assets/oatmeal.svg" />
    <Hero
      headline="We collect reference, do research, and make connections."
    />
    </div>

    <Grid container direction="column" className="container researchTopics">
      { RESEARCH.map((research) =>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Research
              variant="preview"
              researchTitle={research.title}
              researchSubtitle={research.subTitle}
              researchBlurb={research.blurb}
              url={research.url}
            />
          </Grid>
        </Grid>
      )}
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
</ Layout>
