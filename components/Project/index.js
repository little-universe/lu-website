import "./styles.scss"
import Grid from '@material-ui/core/Grid'

export default ({
    variant = "full",
    serviceProvided,
    projectTitle,
    projectBlurb,
    projectImageLink,
    nextProjectLink,
    projectDescription
  }) =>
  <div className="project">
    <Grid container spacing={24} alignItems="center">
      { projectImageLink &&
        <Grid item>
          <img src={projectImageLink}/>
        </Grid>
      }
      <Grid item xs={4}>
        <h1>{projectTitle}</h1>
      </Grid>

      <Grid item xs={4}>
        {
          serviceProvided.map((service) =>
            <h2 className="service">{service}</h2>
          )
        }
      </Grid>

      { /* variant === "preview" &&
        <Grid item>
          <p>{projectBlurb}</p>
        </Grid>
      */ }

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
