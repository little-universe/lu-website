import "./styles.scss"
import Router from 'next/router'
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
    projectDescription,
    onExit
  }) =>
    <div className={ variant === "preview" ? "project preview" : "project" }>
      <Grid container alignItems="center">
        { projectImageLink &&
          <Grid item>
            <img src={projectImageLink}/>
          </Grid>
        }
        <Grid item md={6} xs={12}>
         { variant === "preview" ?
         <a onClick={() => onExit(() => Router.push(`${url}`))}>
            <h1 className="project-title">{projectTitle}</h1>
          </a>
          :
          <h1>{projectTitle}</h1>
        }
        </Grid>

        { variant === "preview" &&
          <Grid item md={6} xs={12}>
            { serviceProvided.map((service) =>
              <h2 className="service">{service}</h2>
            )}
          </Grid>
        }


        { variant != "preview" &&
          <>
            <Grid container className="project-blurb">
              <Grid item md={6} xs={12}>
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
              <Grid item md={8} xs={12}>
                <p>{projectDescription}</p>
              </Grid>
            </Grid>
          </>
        }
      </Grid>
    </div>
