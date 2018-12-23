import "./styles.scss"
import Grid from '@material-ui/core/Grid'

export default ({ className, headline, bgImage }) =>
  <>
    { bgImage &&
      <Grid className={`hero ${className}`} container justify="center" alignItems="center">
        <img className="hero-image" src={bgImage} />
      </Grid>
    }
    { headline &&
      <Grid className={`hero ${className}`} container alignItems="flex-end">
        <Grid item md={8}>
          <h1 className="headline">{headline}</h1>

        </Grid>
      </Grid>
    }
  </>
