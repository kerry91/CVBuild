import React from "react";
import { SaveStudyData, StudyCount } from "../../Actions";
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
    alignItems: "left",
    padding: "1%",
  },

  instance: {
    marginBottom: "1%",
    padding: "1%",
  },
}));

const StudyForm = (props) => {
  const classes = useStyles();

  const handleChange = (index) => (event) => {
    const { name, value } = event.target;
    const list = [...props.StudyFormData.Data];
    console.log(index + 1, list.length);
    if (index + 1 > list.length) {
      while (index + 1 != list.length) {
        list.push({
          courseName: null,
          date: null,
          college: null,
          title: null,
        });
      }
    }
    console.log(list);
    list[index][name] = value;
    props.SaveStudyData(list);
    localStorage.setItem('studyData', JSON.stringify(list));
  };

  const DeleteStudy = () => {
    console.log("Decreasing count");
    const list = [...props.StudyFormData.Data];
    list.pop();
    props.SaveStudyData(list);
    props.StudyCount(props.StudyFormData.Count - 1);
  };

  const AddStudy = () => {
    const list = [...props.StudyFormData.Data];
    list.push({
      courseName: null,
      date: null,
      college: null,
      title: null,
    });
    props.SaveStudyData(list);
    props.studyCount(props.StudyFormData.Count + 1);
  };

  
  let Form = [];
  for (let i = 0; i < props.StudyFormData.Count; i++) {
    Form.push(
      <div className={classes.instance}>
        <Grid container spacing={3}>
          <Grid item md={3} xs={12}>
            <TextField
              fullWidth
              name={`date`}
              defaultValue={
                props.StudyFormData.Data && props.StudyFormData.Data[i]
                  ? props.StudyFormData.Data[i].date
                  : ""
              }
              label="Date"
              onChange={handleChange(i)}
              variant="standard"
              color="primary"
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <TextField
              fullWidth
              defaultValue={
                props.StudyFormData.Data && props.StudyFormData.Data[i]
                  ? props.StudyFormData.Data[i].college
                  : ""
              }
              name={`college`}
              label="College/School"
              onChange={handleChange(i)}
              variant="standard"
              color="primary"
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <TextField
              fullWidth
              name={`courseName`}
              defaultValue={
                props.StudyFormData.Data && props.StudyFormData.Data[i]
                  ? props.StudyFormData.Data[i].courseName
                  : ""
              }
              label="Course Name"
              onChange={handleChange(i)}
              variant="standard"
              color="primary"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <TextField
              fullWidth
              defaultValue={
                props.StudyFormData.Data && props.StudyFormData.Data[i]
                  ? props.StudyFormData.Data[i].title
                  : ""
              }
              name={`title`}
              label="Course Title"
              onChange={handleChange(i)}
              variant="standard"
              color="primary"
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
          <CardHeader subheader="Add your study details" />
          {Form.map((instance) => instance)}
          <div className={classes.footer}>
            <Button
              disabled={props.StudyFormData.Count < 2}
              className={classes.deleteButton}
              onClick={DeleteStudy}
              variant="contained"
              color="primary"
            >
              Delete
            </Button>
            <Button
              className={classes.addButton}
              onClick={AddStudy}
              variant="contained"
              color="primary"
            >
              ADD study
            </Button>
          </div>
        </Card>
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  StudyFormData: state.Study,
});

export default connect(mapStateToProps, {
  SaveStudyData,
  StudyCount,
})(StudyForm);
