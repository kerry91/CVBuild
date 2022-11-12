import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ProfileForm from "./profileForm";
import EducationForm from "./education";
import Skills from "./skills";
import Social from "./social";
import Project from "./projects"
import Resume from "../Resume/index"

import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  button: {
    marginRight: theme.spacing(1)
  },
  completed: {
    display: "inline-block"
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

function getSteps() {
  return [
    "Details",
    "Study",
    "Jobs",
    "Projects",
    "Custom"
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <ProfileForm />;
    case 1:
      return <EducationForm  />;
    case 2:
      return <Skills />;
    case 3:
      return <Project />;
    case 4:
      return <Social />;
    default:
      return "Unknown step";
  }
}

 const  ResumeForm = (props) =>  {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps();



  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };


  const handleComplete = () => {
    let flag = true;
    console.log(activeStep)
    const action = getSteps()[activeStep]
   
    if(flag){
      const newCompleted = completed;
      newCompleted[activeStep] = true;
      setCompleted(newCompleted);
      handleNext();
    }
    
  };

  const handleReset = () => {
    window.location.reload(false);
  };

  const handleEdit = () => {
    setCompleted({});
    setActiveStep(0)
  }

  return (
    <div className={classes.root}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton
              color="secondary"
              onClick={handleStep(index)}
              completed={completed[index]}
            >
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - your resume is ready!!
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
            <Button onClick={handleEdit}>Edit</Button>
            <Resume />
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                variant="contained"
                color="primary"
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                Next
              </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleComplete}
                  >
                    {completedSteps() === totalSteps() - 1
                      ? "Finish"
                      : "Save and Continue"}
                  </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({

  educationFormData: state.Education,
  profileData : state.Profile,
  projectFormData: state.Project,
  SkillsFormData: state.Skills,
  SocialFormData: state.Social

});

export default connect(mapStateToProps, {})(ResumeForm);
