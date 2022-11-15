import React from "react";
import { SaveCustomData, ModifyCustomCount } from "../../Actions";
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

const CustomForm = (props) => {
  const classes = useStyles();

  const handleChange = (index) => (event) => {
    const { name, value } = event.target;
    const list = [...props.CustomFormData.Data];
    console.log(index + 1, list.length);
    if (index + 1 > list.length) {
      while (index + 1 != list.length) {
        list.push({
          sectiontitle: null,
          customtitle: null,
          customdate: null,
          customdescription: null,
        });
      }
    }
    list[index][name] = value;
    props.SaveCustomData(list);
    localStorage.setItem('customData', JSON.stringify(list));
  };

  const Deleteducation = () => {
    const list = [...props.CustomFormData.Data];
    list.pop();
    props.SaveCustomData(list);
    props.ModifyCustomCount(props.CustomFormData.Count - 1);
  };

  const AddEducation = () => {
    const list = [...props.CustomFormData.Data];
    list.push({
      sectiontitle: null,
      customtitle: null,
      customdate: null,
      customdescription: null,
    });
    props.SaveCustomData(list);
    props.ModifyCustomCount(props.CustomFormData.Count + 1);
  };

  let Form = [];
  for (let i = 0; i < props.CustomFormData.Count; i++) {
    Form.push(
      <div className={classes.instance}>
        <Grid container spacing={3}>
          <Grid item md={12} xs={12} sm={12}>
            <TextField
              fullWidth
              name={`sectiontitle`}
              defaultValue={
                props.CustomFormData.Data && props.CustomFormData.Data[i]
                  ? props.CustomFormData.Data[i].sectiontitle
                  : ""
              }
              label="Section Title"
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
                props.CustomFormData.Data && props.CustomFormData.Data[i]
                  ? props.CustomFormData.Data[i].customtitle
                  : ""
              }
              name={`customtitle`}
              label="Title"
              onChange={handleChange(i)}
              multiline={2}
              variant="standard"
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <TextField
              fullWidth
              name={`customdate`}
              defaultValue={
                props.CustomFormData.Data && props.CustomFormData.Data[i]
                  ? props.CustomFormData.Data[i].customdate
                  : ""
              }
              label="Date"
              onChange={handleChange(i)}
              variant="standard"
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <TextField
              fullWidth
              name={`customdescription`}
              defaultValue={
                props.CustomFormData.Data && props.CustomFormData.Data[i]
                  ? props.CustomFormData.Data[i].customdescription
                  : ""
              }
              label="Description"
              onChange={handleChange(i)}
              variant="standard"
            />
          </Grid>
        </Grid>
        <Divider />
      </div>
    );
  }

  return (
    <>
      <form autoComplete="off" noValidate>
        <Card elevation={12}>
          <CardHeader subheader="Add your Custom" />
          <form>{Form.map((instance) => instance)}</form>
          <div className={classes.footer}>
            <Button
              disabled={props.CustomFormData.Count < 2}
              className={classes.deleteButton}
              onClick={Deleteducation}
              variant="contained"
              color="primary"
            >
              Delete
            </Button>
            <Button
              className={classes.addButton}
              onClick={AddEducation}
              variant="contained"
              color="primary"
            >
              ADD Custom
            </Button>
          </div>
        </Card>
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  CustomFormData: state.Custom,
});

export default connect(mapStateToProps, { SaveCustomData, ModifyCustomCount })(
  CustomForm
);
