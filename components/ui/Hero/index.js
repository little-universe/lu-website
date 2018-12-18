import "./styles.scss"
import Grid from '@material-ui/core/Grid'

export default ({ headline }) =>
  <Grid className="hero" container alignItems="center">
    <div className="headline">{headline}</div>
  </Grid>
