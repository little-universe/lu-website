import "./styles.scss"
import Grid from '@material-ui/core/Grid'

export default () =>
  <div className="nav">
    <Grid container className="research" spacing={24} direction="column">
      <Grid item>
        <Grid container spacing={24} direction="column">
          <Grid item>
            <h1>Motion.js and the Non-Nested Web</h1>
          </Grid>

          <Grid item>
            <h1>Wireframing and Mocking It Up</h1>
          </Grid>

          <Grid item>
            <h1>Writing the Motion.js API</h1>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </div>
