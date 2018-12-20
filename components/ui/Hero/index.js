import "./styles.scss"
import Grid from '@material-ui/core/Grid'

export default ({ className, headline }) =>
  <Grid className={`hero ${className}`} container alignItems="center">
    { headline &&
      <>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <h1 className="headline">{headline}</h1>
        </Grid>
      </>
    }
  </Grid>
