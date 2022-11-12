import React, { useState, useEffect } from "react";
import { SaveProfileData } from "../../actions"; 
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

  Typography
} from "@material-ui/core";
import { connect } from "react-redux";



const useStyles = makeStyles((theme) => ({
root: {
  padding: "10px"
}
 
  
}));



const ProfileForm = (props) => {
  const classes = useStyles();

  const {profileData} = props

  const handleChange = (event) => {
    const {name , value} = event.target;
    const prevdata = profileData.Data

    if( name == "url" ){
      if(event.target.files.length > 0){
        prevdata[name] = URL.createObjectURL(event.target.files[0])
        prevdata["FileName"] =  event.target.files[0].name;
      
      }
    }else{
     prevdata[name] = value;
    }
    props.SaveProfileData(prevdata)

  };

  const RemoveImage = () => {
    const prevdata = profileData.Data;
    prevdata["url"] = null
    prevdata["FileName"] =  null

    props.SaveProfileData(prevdata)
  }


  


  return (
    <>
      <form autoComplete="off" noValidate>
        <Card className={classes.root}>
          <CardHeader subheader="Add your profile details" />
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="name"
                defaultValue={profileData.Data?  profileData.Data.name : ""}
                label="Name"
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="jobtitle"
                defaultValue={profileData.Data?  profileData.Data.jobtitle : ""}
                label="Job Title"
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                type="email"
                defaultValue={profileData.Data?  profileData.Data.email : null}
                name="email"
                label="Email"
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                type="number"
                name="number"
                defaultValue={profileData.Data?  profileData.Data.number : null}
                label="Number"
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="website"
                defaultValue={profileData.Data?  profileData.Data.website : null}
                label="Website (optional)"
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="linkedin"
                defaultValue={profileData.Data?  profileData.Data.linkedin : null}
                label="LinkedIn (optional)"
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                id="outlined-multiline-flexible"
                multiline
                rows={4}
                name="psummary"
                defaultValue={profileData.Data?  profileData.Data.psummary : null}
                label="Personal Summary"
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Card>
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  profileData : state.Profile
});

export default connect(mapStateToProps, {SaveProfileData})(ProfileForm);
