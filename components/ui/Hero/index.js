import "./styles.scss"
import Grid from '@material-ui/core/Grid'

export default ({ className, headline, subhead, bgImage }) =>
  <>
    { bgImage &&
      <Grid className={`hero ${className}`} container justify="center" alignItems="center">
        <div className="container">
          <img className="hero-image" src={bgImage} />
        </div>
      </Grid>
    }
    { headline &&
      <div className="container">
        <Grid className={`hero ${className}`} container alignItems="center">
          <Grid item md={10} xs={12}>
            <h1 className="headline">{headline}</h1>
            <p className="subhead">{subhead}</p>
          </Grid>
        </Grid>
      </div>
    }
  </>
