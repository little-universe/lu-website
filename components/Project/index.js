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
    <Grid container alignItems="flex-start">
      { projectImageLink &&
        <Grid item>
          <img src={projectImageLink}/>
        </Grid>
      }

      <Grid item xs={6}>
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

      { variant === "preview" &&
        <Grid item xs={2} className="preview-arrow-wrapper">
          <Link href={url}>
            <Icon className="preview-arrow" icon={arrowUpRight2} />
          </Link>
        </Grid>
      }

      { variant != "preview" &&
        <>
          <Grid container className="project-blurb">
            <Grid item xs={8}>
              <p>{projectBlurb}</p>
            </Grid>
          </Grid>

          <Grid container direction="column">
          {
            serviceProvided.map((service) =>
            <p className="service">{service}</p>
          )}
          </Grid>

          <Grid container className="project-description">
            <Grid item xs={8}>
              <p>{projectDescription}</p>
            </Grid>
          </Grid>
        </>
      }
    </Grid>
  </div>
