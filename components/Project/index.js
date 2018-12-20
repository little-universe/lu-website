import "./styles.scss"
import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import { Icon } from 'react-icons-kit'

import {arrowUpRight2} from 'react-icons-kit/icomoon/arrowUpRight2'

export default ({
    variant = "full",
    url,
    serviceProvided,
    projectTitle,
    projectBlurb,
    projectImageLink,
    nextProjectLink,
    projectDescription
  }) =>
  <div className={ variant === "preview" ? "project preview" : "project" }>
    <Grid container alignItems="center">
      { projectImageLink &&
        <Grid item>
          <img src={projectImageLink}/>
        </Grid>
      }

      <Grid item xs={4}>
       { variant === "preview" ?
        <Link href={url}>
          <h1 className="project-title">{projectTitle}</h1>
        </Link>
        :
        <h1>{projectTitle}</h1>
      }
      </Grid>

      { variant === "preview" &&
        <Grid item xs={4}>
          { serviceProvided.map((service) =>
            <h2 className="service">{service}</h2>
          )}
        </Grid>
      }

      { variant != "preview" &&
        <Grid container direction="column">
        {
          serviceProvided.map((service) =>
          <h2 className="service">{service}</h2>
        )}
        </Grid>
      }

      { variant === "preview" &&
        <Grid item xs={4} className="preview-arrow-wrapper">
          <Link href={url}>
            <Icon className="preview-arrow" icon={arrowUpRight2} />
          </Link>
        </Grid>
      }

      <Grid item xs={4} />

      { variant === "full" &&
        <>
          <Grid container className="project-description">
            <Grid item xs={8}>
              <p>{projectDescription}</p>
            </Grid>
          </Grid>

          <Grid container>
            <Link href={nextProjectLink}><h2 className="next-project-link">Next Project</h2></Link>
          </Grid>
        </>
      }
    </Grid>
  </div>
