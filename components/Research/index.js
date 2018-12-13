import "./styles.scss"
import Grid from '@material-ui/core/Grid'

export default () =>
  <div className="nav">
    <Grid container spacing={24} direction="column">
      <Grid item>
        <h1>Our Research</h1>
      </Grid>

      <Grid item>
        <Grid container spacing={40} direction="column">
          <Grid item>
            Topic 1
          </Grid>

          <Grid item>
            Topic 2
          </Grid>

          <Grid item>
            Topic 3
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </div>
