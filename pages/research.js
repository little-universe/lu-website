import Layout from '../Layouts/layout'
import Grid from '@material-ui/core/Grid'
import Nav from '../components/Nav'
import Hero from '../components/ui/Hero'
import Project from '../components/Project'
import Research from '../components/Research'
import Footer from '../components/Footer'
import RESEARCH from '../utils/research'

export default () =>
  <Layout title='Little Universe - Research' className="research-page">
  <div className="home-hero-bg">
    <img className="navy-bubble bubble" src="https://s3.us-east-2.amazonaws.com/lu-assets/navy.svg" />
    <img className="oatmeal-bubble bubble" src="https://s3.us-east-2.amazonaws.com/lu-assets/oatmeal.svg" />
    <Hero
      headline="Research is making, implementing, writing, thinking, reviewing, or designing. We do it every day."
    />
    </div>

    <Grid container direction="column" className="container researchTopics">
      { RESEARCH.map((research) =>
        <Grid container>
          <Grid item xs={12}>
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

  <Footer />
</ Layout>
