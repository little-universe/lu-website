import "./styles.scss"
import Grid from '@material-ui/core/Grid'

export default () =>
  <div className="nav">
    <Grid container className="research" spacing={24} direction="column">
      <Grid item>
        <Grid container spacing={24} direction="column">
          <Grid item xs={6}>
            <h1>Motion.js and the Non-Nested Web</h1>
            <p>Motion.js is a tool that we'll use to do some great stuff. </p>
          </Grid>

          <Grid item xs={6}>
            <h1>Wireframing and Mocking It Up</h1>
            <p>Working with complex flows and lots of user inputs makes wireframing and mockups so important. This is how we do it!</p>
          </Grid>

          <Grid item xs={6}>
            <h1>Writing the Motion.js API</h1>
            <p>Motion.js is a tool that we'll use to do some great stuff. </p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </div>
