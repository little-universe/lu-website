import "./styles.scss"
import Grid from '@material-ui/core/Grid'

export default ({ headline }) =>
  <Grid className="hero" container alignItems="center">
    <div className="headline">{headline}</div>

    <video loop muted autoPlay poster="" id="bg-video">
      <source src="../static/output.mp4" type="video/webm" />
      <source src="../static/output.mp4" type="video/mp4" />
      <source src="../static/output.mp4" type="video/ogg" />
    </video>
  </Grid>
