import "./styles.scss"
import Router from 'next/router'
import Grid from '@material-ui/core/Grid'
import { Icon } from 'react-icons-kit'

import {ic_arrow_forward} from 'react-icons-kit/md/ic_arrow_forward'

export default ({
    variant = "full",
    url,
    website,
    serviceProvided,
    projectTitle,
    projectBlurb,
    projectImageLink,
    nextProjectLink,
    projectDescription
  }) =>
    <>
      { variant === "preview" ?
        <div className="project preview">
          <div className="project-link" onClick={() => Router.push(`${url}`)}>
            <Grid container alignItems="center">
              { projectImageLink &&
                <Grid item>
                  <img src={projectImageLink}/>
                </Grid>
              }

              <Grid item md={6} xs={12}>
                <h1 className="project-title">{projectTitle}</h1>
              </Grid>

              <Grid item md={6} xs={12}>
                { serviceProvided.map((service) =>
                  <h2 className="service">{service}</h2>
                )}
              </Grid>
            </Grid>
          </div>
        </div>

        :

        <div className="project">
          <h1 className="project-title">{projectTitle}</h1>
          { website && <a href={website} target="__blank" className="website-link">Visit this project <Icon size={12} icon={ic_arrow_forward} /></a> }

          <Grid container direction="column">
            {
              serviceProvided.map((service) =>
              <p className="service">{service}</p>
            )}
          </Grid>

          <Grid container className="project-description">
            <Grid item md={12} xs={12}>
              <p>{projectDescription}</p>
            </Grid>
          </Grid>
        </div>
      }
    </>
