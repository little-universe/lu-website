import "./styles.scss"
import Grid from '@material-ui/core/Grid'

export default ({ className, headline }) =>
  <Grid className={`hero ${className}`} container alignItems="flex-end">
    { headline &&
      <>
        <Grid item xs={8}>
          <h1 className="headline">{headline}</h1>
        </Grid>
      </>
    }
  </Grid>
