import React, { useRef } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import { useReactToPrint } from "react-to-print";

import { Paper, Grid, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  ParentResumePaper: {
    margin: "auto",
    textAlign: "center",
    padding: "15px",
    maxWidth: "100%",
  },

  ParentResumeModel: {
    margin: "auto",
    padding: "15px",
    maxWidth: "900px",
    borderColor: "purple",
  },
  ParentJobsection: {
    textAlign: "left",
  },
  header: {
    textAlign: "left",
  },
  content: {
    textAlign: "left",
    margin: "8px 3px",
  },
}));

const ResumeModel = (props) => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const classes = useStyles();

  return (
    <div>
      <Button color="primary" variant="contained"  onClick={handlePrint}>
        Print CV
      </Button>
      <br/>
      <br/>
      <Paper className={classes.ParentResumeModel} elevation={24}>
        <div
          ref={componentRef}
          elevation={1}
          className={classes.ParentResumePaper}
        >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="h4" component="h2">
                    {props.profileData.Data
                      ? props.profileData.Data.name
                      : null}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1">
                    {props.profileData.Data
                      ? props.profileData.Data.jobtitle
                      : null}
                  </Typography>
                    <Typography varient="p">
                      {props.profileData.Data
                        ? props.profileData.Data.email
                        : null}{" "}
                    </Typography>
                    <Typography varient="p">
                      {props.profileData.Data
                        ? props.profileData.Data.number
                        : null}
                    </Typography>
                    <Typography varient="p">
                      {props.profileData.Data
                        ? props.profileData.Data.website
                        : null}{" "}
                    </Typography>
                    <Typography varient="p">
                      {props.profileData.Data
                        ? props.profileData.Data.linkedin
                        : null}{" "}
                    </Typography>
                    <Typography varient="p">
                      {props.profileData.Data
                        ? props.profileData.Data.psummary
                        : null}{" "}
                    </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Grid container spacing={3}>
                  <Grid item xs={12}>
                      <div className={classes.header}>
                        <Typography variant="h5" component="h2">
                          Job History
                        </Typography>
                        <Divider />
                        {props.JobsFormData.Data &&
                          props.JobsFormData.Data.length > 0 &&
                          props.JobsFormData.Data.map((instance) => (
                            <div className={classes.content}>
                              <Typography variant="h6" component="h2">
                                {instance.Jobsdate
                                  ? instance.Jobsdate
                                  : null}
                              </Typography>
                              <Typography variant="body2" gutterBottom>
                                {instance.Jobstitle
                                  ? instance.Jobstitle
                                  : null}
                              </Typography>
                              <Typography variant="body2" gutterBottom>
                                {instance.Jobsdescription
                                  ? instance.Jobsdescription
                                  : null}
                              </Typography>
                              <Typography variant="body2" gutterBottom>
                                {instance.Jobscompany
                                  ? instance.Jobscompany
                                  : null}
                              </Typography>
                            </div>
                          ))}
                      </div>
                    </Grid>
                    <Grid item xs={12}>
                      <div className={classes.header}>
                        <Typography variant="h5" component="h2">
                          Study History
                        </Typography>
                      </div>
                      <Divider />
                      {props.StudyFormData.Data &&
                        props.StudyFormData.Data.length > 0 &&
                        props.StudyFormData.Data.map((instance) => (
                          <div className={classes.content}>
                            <Typography variant="h6" component="h2">
                              {instance.college ? instance.college : null}
                            </Typography>
                            <Typography variant="body2">
                              {instance.date
                                ? instance.date
                                : null}
                            </Typography>
                            <Typography variant="body2">
                              {instance.courseName ? instance.courseName : null}
                            </Typography>
                            <Typography variant="body2">
                              {instance.title ? instance.title : null}
                            </Typography>
                          </div>
                        ))}
                    </Grid>
                    <Grid item xs={12}>
                      <div className={classes.header}>
                        <Typography variant="h5" component="h2">
                          Project History
                        </Typography>
                      </div>
                      <Divider />
                      {props.projectFormData.Data &&
                        props.projectFormData.Data.length > 0 &&
                        props.projectFormData.Data.map((instance) => (
                          <div className={classes.content}>
                            <Typography variant="h6" component="h2">
                              {instance.projectName
                                ? instance.projectName
                                : null}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                              {instance.description
                                ? instance.description
                                : null}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                              {instance.github ? instance.github : null}
                            </Typography>
                          </div>
                        ))}
                    </Grid>
                    <Grid item xs={12}>
                      <div className={classes.header}>
                        <Typography variant="h5" component="h2">
                          
                        </Typography>
                      </div>
                      <Divider />
                      {props.CustomFormData.Data &&
                        props.CustomFormData.Data.length > 0 &&
                        props.CustomFormData.Data.map((instance) => (
                          <div className={classes.content}>
                            <Typography variant="h6" component="h2">
                              {instance.sectiontitle
                                ? instance.sectiontitle
                                : null}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                              {instance.customtitle
                                ? instance.customtitle
                                : null}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                              {instance.customdate ? instance.customdate : null}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                              {instance.customdescription
                                ? instance.customdescription
                                : null}
                            </Typography>
                          </div>
                        ))}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Paper>
    </div>
  );
};

const mapStateToProps = (state) => ({
  StudyFormData: state.Study,
  profileData: state.Profile,
  projectFormData: state.Project,
  JobsFormData: state.Jobs,
  CustomFormData: state.Custom,
});


export default connect(mapStateToProps, {})(ResumeModel);
