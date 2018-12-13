import "./styles.scss"
import Grid from '@material-ui/core/Grid'

export default ({
    variant,
    serviceProvided,
    projectTitle,
    projectBlurb,
    projectImageLink,
    nextProjectLink,
    projectDescription
  }) =>
  <div className="project">
    <Grid container spacing={24} direction="column">
    <Grid item>
      <img src={projectImageLink}/>
    </Grid>
      <Grid item>
        <h2>{projectTitle}</h2>
      </Grid>

      <Grid item>
        {
          serviceProvided.map((service) =>
            <div>{service}</div>
          )
        }
      </Grid>

      { variant === "preview" &&
        <Grid item>
          <p>{projectBlurb}</p>
        </Grid>
      }

      { variant === "full" &&
        <>
          <Grid item>
            {projectDescription}
          </Grid>

          <Grid item>
            <a href={nextProjectLink}>Next Project</a>
          </Grid>
        </>
      }
    </Grid>
  </div>
