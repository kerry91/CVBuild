import React from "react";
import { SaveJobsData, JobsCount } from "../../Actions";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@material-ui/core";

import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  deleteButton: {
    marginRight: "1%",
  },
  addButton: {},
  footer: {
    padding: "1%",
  },

  instance: {
    marginBottom: "1%",
    padding: "1%",
  },
}));

const JobsForm = (props) => {
  const classes = useStyles();

  const handleChange = (index) => (event) => {
    const { name, value } = event.target;
    const list = [...props.JobsFormData.Data];
    console.log(index + 1, list.length);
    if (index + 1 > list.length) {
      while (index + 1 != list.length) {
        list.push({
          Jobsdate: null,
          Jobstitle: null,
          Jobsdescription: null,
          Jobscompany: null,
        });
      }
    }
    list[index][name] = value;
    props.SaveJobsData(list);
    localStorage.setItem('jobsData', JSON.stringify(list));
  };

  const DeleteJobs = () => {
    const list = [...props.JobsFormData.Data];
    list.pop();
    props.SaveJobsData(list);
    props.JobsCount(props.JobsFormData.Count - 1);
  };

  const AddJobs = () => {
    const list = [...props.JobsFormData.Data];
    list.push({
      Jobsdate: null,
      Jobstitle: null,
      Jobsdescription: null,
      Jobscompany: null,
    });
    props.SaveJobsData(list);
    props.JobsCount(props.JobsFormData.Count + 1);
  };
  

  let Form = [];
  for (let i = 0; i < props.JobsFormData.Count; i++) {
    Form.push(
      <div className={classes.instance}>
        <Grid container spacing={3}>
          <Grid item md={3} xs={12}>
            <TextField
              fullWidth
              name={`Jobsdate`}
              defaultValue={
                props.JobsFormData.Data && props.JobsFormData.Data[i]
                  ? props.JobsFormData.Data[i].Jobsdate
                  : ""
              }
              label="Date"
              onChange={handleChange(i)}
              variant="standard"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <TextField
              fullWidth
              defaultValue={
                props.JobsFormData.Data && props.JobsFormData.Data[i]
                  ? props.JobsFormData.Data[i].Jobstitle
                  : ""
              }
              name={`Jobstitle`}
              label="Title"
              onChange={handleChange(i)}
              multiline={2}
              variant="standard"
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <TextField
              fullWidth
              name={`Jobsdescription`}
              defaultValue={
                props.JobsFormData.Data && props.JobsFormData.Data[i]
                  ? props.JobsFormData.Data[i].Jobsdescription
                  : ""
              }
              label="Description"
              onChange={handleChange(i)}
              variant="standard"
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <TextField
              fullWidth
              name={`Jobscompany`}
              defaultValue={
                props.JobsFormData.Data && props.JobsFormData.Data[i]
                  ? props.JobsFormData.Data[i].Jobscompany
                  : ""
              }
              label="Company Name"
              onChange={handleChange(i)}
              variant="standard"
            />
          </Grid>
        </Grid>
        <Divider />
        <br/>
        <br/>
        <br/>
        <hr/>
      </div>
    );
  }

  return (
    <>
      <form autoComplete="off" noValidate>
      <Card elevation={12}>
          <CardHeader subheader="Add your job details" />
          <form>{Form.map((instance) => instance)}</form>
          <div className={classes.footer}>
            <Button
              disabled={props.JobsFormData.Count < 2}
              className={classes.deleteButton}
              onClick={DeleteJobs}
              variant="contained"
              color="primary"
            >
              Delete
            </Button>
            <Button
              className={classes.addButton}
              onClick={AddJobs}
              variant="contained"
              color="primary"
            >
              ADD Job
            </Button>
          </div>
        </Card>
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  JobsFormData: state.Jobs,
});

export default connect(mapStateToProps, { SaveJobsData, JobsCount })(
  JobsForm
);
