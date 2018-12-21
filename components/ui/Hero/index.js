import "./styles.scss"
import Grid from '@material-ui/core/Grid'

export default ({ className, headline, bgImage }) =>
  <Grid className={`hero ${className}`} container justify="center" alignItems="center">
    { bgImage &&
      <img className="hero-image" src={bgImage} />
    }
    { headline &&
      <>
        <Grid item xs={8}>
          <h1 className="headline">{headline}</h1>

        </Grid>
      </>
    }
  </Grid>
