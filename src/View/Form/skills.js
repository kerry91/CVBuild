import React, { useState, useEffect } from "react";
import { SaveSkillsData  , ModifySkillsCount } from "../../actions";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,

  Typography,
  Paper
} from "@material-ui/core";

import { connect } from "react-redux";


const useStyles = makeStyles((theme) => ({
  deleteButton: {
    marginRight: "1%"
  },
  addButton: {

  },
  footer: {
    padding: "1%"
  },

  instance: {
    marginBottom: "1%",
    padding: "1%"
  }
 
  
}));



const SkillsForm = (props) => {
  const classes = useStyles();

  const handleChange = (index) => (event) =>  {
    const {name , value} = event.target;
    const list = [...props.SkillsFormData.Data];
    console.log(index+1 , list.length)
    if(index+1 > list.length){
     while(index+1 != list.length){
         list.push({skillsdate: null , skillstitle : null , skillsdescription: null, skillscompany: null})
       }
    }
    list[index][name] =value;
    props.SaveSkillsData(list)
 
   };


   const Deleteducation = () => {
    const list = [...props.SkillsFormData.Data];
    list.pop()
    props.SaveSkillsData(list)
    props.ModifySkillsCount( props.SkillsFormData.Count-1)
  }
  
  const AddEducation = () => {
      const list = [...props.SkillsFormData.Data];
      list.push({skillsdate: null , skillstitle : null , skillsdescription: null, skillscompany: null});
      props.SaveSkillsData(list)
      props.ModifySkillsCount( props.SkillsFormData.Count+1)
  }



  let Form = [];
  for (let i = 0; i <  props.SkillsFormData.Count ; i++) {
    Form.push(
      <div className={classes.instance}>
        <Grid container spacing={3}>
          <Grid item md={3} xs={12}>
            <TextField
              fullWidth
              name={`skillsdate`}
              defaultValue={props.SkillsFormData.Data && props.SkillsFormData.Data[i] ? props.SkillsFormData.Data[i].skillsdate : ""}
              label="Date"
              onChange={handleChange(i)}
              variant="outlined"
              formControlProps={{
                fullWidth: true
              }}
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <TextField
              fullWidth
              defaultValue={props.SkillsFormData.Data && props.SkillsFormData.Data[i] ? props.SkillsFormData.Data[i].skillstitle: ""}
              name={`skillstitle`}
              label="Title"
              onChange={handleChange(i)}
              multiline={2}
              variant="outlined"
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <TextField
              fullWidth
              name={`skillsdescription`}
              defaultValue={props.SkillsFormData.Data && props.SkillsFormData.Data[i] ? props.SkillsFormData.Data[i].skillsdescription : ""}
              label="Description"
              onChange={handleChange(i)}
              variant="outlined"
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <TextField
              fullWidth
              name={`skillscompany`}
              defaultValue={props.SkillsFormData.Data && props.SkillsFormData.Data[i] ? props.SkillsFormData.Data[i].skillscompany : ""}
              label="Company Name"
              onChange={handleChange(i)}
              variant="outlined"
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
        <Card>
          <CardHeader subheader="Add your Jobs" />
          <form>
          {Form.map((instance) => instance)}
          </form>
          <div className={classes.footer}>
           <Button disabled={ props.SkillsFormData.Count<2} className={classes.deleteButton} onClick={Deleteducation} variant="contained" color="primary">
            Delete
          </Button>
          <Button  className={classes.addButton} onClick={AddEducation} variant="contained" color="primary">
            ADD Job
          </Button>
          </div>
        </Card>
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  SkillsFormData: state.Skills
});

export default connect(mapStateToProps, {SaveSkillsData , ModifySkillsCount })(SkillsForm);

