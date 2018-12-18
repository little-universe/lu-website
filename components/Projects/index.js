import "./styles.scss"
import Grid from '@material-ui/core/Grid'
import Project from '../Project'
import CLIENTS from '../../utils/clients'

export default () =>
  <>
    <Grid container direction="column">
      <Grid item>
        <h1 className="projects-header">Our Work</h1>
      </Grid>

      <Grid item>
        <Grid container direction="column">
          { CLIENTS.map((client) =>
            <Grid item>
              <Project
                variant="preview"
                serviceProvided={client.services}
                projectTitle="VoteCrew"
                projectBlurb="A platform to help students organize friends and hold each other accountable to voting in every election."
                projectImageLink=""
                nextProjectLink=""
              />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  </>
