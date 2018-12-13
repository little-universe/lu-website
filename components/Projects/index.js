import "./styles.scss"
import Grid from '@material-ui/core/Grid'
import Project from '../Project'

export default () =>
  <div className="nav">
    <Grid container direction="column">
      <Grid item>
        <h1>Our Work</h1>
      </Grid>

      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Project
              variant="preview"
              serviceProvided={['Backend', 'Frontend']}
              projectTitle="VoteCrew"
              projectBlurb="A platform to help students organize friends and hold each other accountable to voting in every election."
              projectImageLink=""
              nextProjectLink=""
            />
          </Grid>

          <Grid item>
            <Project
              variant="preview"
              serviceProvided={[]}
              projectTitle="MyxFitness"
              projectBlurb="A customizable, efficient, and affordable fitness studio, delivered to your door. Because EVERYONE deserves a quality workout."
              projectImageLink=""
              nextProjectLink=""
            />
          </Grid>

          <Grid item>
            <Project
              variant="preview"
              serviceProvided={[]}
              projectTitle="Betterfin"
              projectBlurb="Betterfin is a service for business owners to get educated on small business lending and navigate commercial products with confidence."
              projectImageLink=""
              nextProjectLink=""
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </div>
