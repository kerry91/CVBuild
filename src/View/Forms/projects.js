import React from "react";
import { SaveProjectData, ProjectsCount } from "../../Actions";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardHeader,
  Divider,
  Grid,
  Paper,
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

const ProjectForm = (props) => {
  const classes = useStyles();

  const handleChange = (index) => (event) => {
    const { name, value } = event.target;
    const list = [...props.projectFormData.Data];
    console.log(index + 1, list.length);
    if (index + 1 > list.length) {
      while (index + 1 != list.length) {
        list.push({ projectName: null, techStack: null, description: null });
      }
    }
    list[index][name] = value;
    props.SaveProjectData(list);
    localStorage.setItem('projectsData', JSON.stringify(list));
  };

  const DeleteProjects = () => {
    const list = [...props.projectFormData.Data];
    list.pop();
    props.SaveProjectData(list);
    props.ProjectsCount(props.projectFormData.Count - 1);
  };

  const AddProjects = () => {
    const list = [...props.projectFormData.Data];
    list.push({ projectName: null, techStack: null, description: null });
    props.SaveProjectData(list);
    props.ProjectsCount(props.projectFormData.Count + 1);
  };

  let Form = [];
  for (let i = 0; i < props.projectFormData.Count; i++) {
    Form.push(
      <div className={classes.instance}>
        <Grid container spacing={3}>
          <Grid item md={4} xs={12}>
            <TextField
              fullWidth
              name={`projectName`}
              defaultValue={
                props.projectFormData.Data && props.projectFormData.Data[i]
                  ? props.projectFormData.Data[i].projectName
                  : ""
              }
              label="Project Name"
              onChange={handleChange(i)}
              variant="standard"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              fullWidth
              defaultValue={
                props.projectFormData.Data && props.projectFormData.Data[i]
                  ? props.projectFormData.Data[i].description
                  : ""
              }
              name={`description`}
              label="Description"
              onChange={handleChange(i)}
              multiline={2}
              variant="standard"
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              fullWidth
              name={`github`}
              defaultValue={
                props.projectFormData.Data && props.projectFormData.Data[i]
                  ? props.projectFormData.Data[i].github
                  : ""
              }
              label="GitHub Link (optional)"
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
          <CardHeader subheader="Add your project details" />
          <form>{Form.map((instance) => instance)}</form>
          <div className={classes.footer}>
            <Button
              disabled={props.projectFormData.Count < 2}
              className={classes.deleteButton}
              onClick={DeleteProjects}
              variant="contained"
              color="primary"
            >
              Delete
            </Button>
            <Button
              className={classes.addButton}
              onClick={AddProjects}
              variant="contained"
              color="primary"
            >
              ADD Project
            </Button>
          </div>
        </Card>
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  projectFormData: state.Project,
});

export default connect(mapStateToProps, {
  SaveProjectData,
  ProjectsCount,
})(ProjectForm);
