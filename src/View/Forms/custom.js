import React from "react";
import { connect } from "react-redux";
import { SaveCustomData, CustomCount } from "../../Actions";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@material-ui/core";


const useStyles = makeStyles(() => ({
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

  const DeleteCustom = () => {
    const list = [...props.CustomFormData.Data];
    list.pop();
    props.SaveCustomData(list);
    props.CustomCount(props.CustomFormData.Count - 1);
  };

  const AddCustom = () => {
    const list = [...props.CustomFormData.Data];
    list.push({
      sectiontitle: null,
      customtitle: null,
      customdate: null,
      customdescription: null,
    });
    props.SaveCustomData(list);
    props.CustomCount(props.CustomFormData.Count + 1);
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
          <Grid item md={4} xs={12}>
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
              multiline={4}
              variant="standard"
            />
          </Grid>
          <Grid item md={4} xs={12}>
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
          <Grid item md={4} xs={12}>
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
          <CardHeader subheader="Add your custom details" />
          <form>{Form.map((instance) => instance)}</form>
          <div className={classes.footer}>
            <Button
              disabled={props.CustomFormData.Count < 2}
              className={classes.deleteButton}
              onClick={DeleteCustom}
              variant="contained"
              color="primary"
            >
              Delete
            </Button>
            <Button
              className={classes.addButton}
              onClick={AddCustom}
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

export default connect(mapStateToProps, { SaveCustomData, CustomCount })(
  CustomForm
);
