import React, { useEffect  , useRef} from 'react'
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Divider from '@material-ui/core/Divider';
import { useReactToPrint } from 'react-to-print';

import { 
    Paper , 
    Grid,
    Typography,
    Button
 } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    ParentResumePaper: {
        margin: "auto",
        marginTop: "1%",
        textAlign: "left",
        padding: "15px",
        maxWidth: "1000px",
    
    },

    ParentResumeModel: {
        margin: "auto",
        marginTop: "1%",
        padding: "15px",
        maxWidth: "1000px",
        borderColor: "pink"
    
    },
    ParentSkillSection: {
        textAlign: "left"
    },
    profilePhoto: {
        textAlign: "left"
    },
    header: {
        textAlign: "left"
    },
    content: {
        textAlign: "left",
        margin: "8px 3px"
    },
  

  }));
const ResumeModel =  (props) => {
    const componentRef = useRef();

  

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
    const classes = useStyles();


return (
    <div>
         <Button color="secondary"  variant="contained" onClick={handlePrint}>Download / Preview</Button>
        <Paper className ={classes.ParentResumeModel} elevation={1}>
        <div ref={componentRef}  elevation={1} className ={classes.ParentResumePaper}>

            <Grid container spacing={3}>
                 {/* ---------------------------------------------------------------------------------------------------------------------------- */}
                {/* NAME AND ADDRESS */}
            
                <Grid item xs={9}>
                    <Grid container spacing={3}>  
                        <Grid item xs={12}>                  
                            <Typography variant="h4" component="h2">
                            {props.profileData.Data ? props.profileData.Data.name : null}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="subtitle1" >
                            {props.profileData.Data ? props.profileData.Data.jobtitle : null} 
                             </Typography>
                             <Typography variant="subtitle1" >
                           <Typography varient="p">{props.profileData.Data ? props.profileData.Data.email : null} </Typography>
                           <Typography varient="p">{props.profileData.Data ? props.profileData.Data.number : null}</Typography>
                           <Typography varient="p">{props.profileData.Data ? props.profileData.Data.website : null} </Typography> 
                           <Typography varient="p">{props.profileData.Data ? props.profileData.Data.linkedin : null} </Typography>
                           <Typography varient="p">{props.profileData.Data ? props.profileData.Data.psummary : null} </Typography>
                             </Typography>
                        </Grid>
                    </Grid>

                </Grid>
                {/* ---------------------------------------------------------------------------------------------------------------------------- */}
                
                <Grid item xs={12}>
                <Grid container spacing={3}>  

                <Grid item xs={9}>
                <Grid container spacing={3}>  
                {/* Education */}
                <Grid item xs={12}> 
                    <div className={classes.header}>
                        <Typography variant="h5" component="h2">
                             Education
                         </Typography>
                    </div>
                    <Divider />
                 
                    {props.educationFormData.Data && props.educationFormData.Data.length > 0 && 
                        props.educationFormData.Data.map(instance => 
                        <div className={classes.content}>
                        <Typography variant="h6" component="h2">
                            {instance.college ?instance.college :   null}
                       </Typography>
                       <Typography variant="body2" >
                      {instance.completionYear ? instance.completionYear :   null}
                        </Typography>
                        <Typography variant="body2">
                        {instance.courseName ?instance.courseName :   null}
                        </Typography>
                        <Typography variant="body2" >
                           {instance.title ? instance.title:   null} 
                        </Typography>
                       </div>      
                        ) }
                   
                </Grid>
                 
                <Grid item xs={12}> 
                  {/* projects */}
                <div className={classes.header}>
                        <Typography variant="h5" component="h2">
                            Projects
                         </Typography>
                    </div>
                    <Divider />

                    {props.projectFormData.Data && props.projectFormData.Data.length > 0 && 
                        props.projectFormData.Data.map(instance => 
                            <div className={classes.content}>
                            <Typography variant="h6" component="h2">
                            {instance.projectName ?instance.projectName :   null}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                            {instance.description ?instance.description :   null}
                             </Typography>
                             <Typography variant="body2" gutterBottom>
                              {instance.github ? instance.github :   null}
                             </Typography>
                            </div>             
                        )}
                </Grid>
                {/* Social */}
                <Grid item xs={12}> 
                <div className={classes.header}>
                    <Typography variant="h5" component="h2">
                                Jobs
                     </Typography>
                     <Divider />
                     {props.SkillsFormData.Data && props.SkillsFormData.Data.length > 0 && 
                        props.SkillsFormData.Data.map(instance => 
                            <div className={classes.content}>
                            <Typography variant="h6" component="h2">
                            {instance.skillsdate ?instance.skillsdate :   null}
                            </Typography>
                             <Typography variant="body2" gutterBottom>
                              {instance.skillstitle ? instance.skillstitle :   null}
                             </Typography>
                             <Typography variant="body2" gutterBottom>
                            {instance.skillsdescription ?instance.skillsdescription :   null}
                             </Typography>
                             <Typography variant="body2" gutterBottom>
                              {instance.skillscompany ? instance.skillscompany :   null}
                             </Typography>
                            </div>             
                        )}
                    </div>
                </Grid>
                </Grid>
                </Grid>
                </Grid>
                </Grid>



            </Grid>
        </div>
        </Paper>
    </div>
)
} 

const mapStateToProps = (state) => ({

    educationFormData: state.Education,
    profileData : state.Profile,
    projectFormData: state.Project,
    SkillsFormData: state.Skills,
    SocialFormData: state.Social
  
  });

export default connect(mapStateToProps, {})(ResumeModel);
