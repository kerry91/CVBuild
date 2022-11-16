import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Profile from "./profile";
import Study from "./study";
import Jobs from "./jobs";
import Custom from "./custom";
import Project from "./projects";
import Resume from "../Resume/index";

import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: "inline-block",
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Profile", "Project", "Job", "Study", "Custom"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Profile />;
    case 3:
      return <Study />;
    case 2:
      return <Jobs />;
    case 1:
      return <Project />;
    case 4:
      return <Custom />;
    default:
      return "Unknown step";
  }
}

const ResumeForm = (props) => {
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
        ? 
          steps.findIndex((i) => !(i in completed))
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

    if (flag) {
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
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper nonLinear activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton
              color="primary"
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
          <div class="resume-buttons">
            <br/>
            <Button onClick={handleReset}>
              Start Over
            </Button>
            <Button onClick={handleEdit}>
              Make Changes
            </Button>
            <br/>
            <br/>
            <Resume />
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div className="bottom-buttons">
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
};
const mapStateToProps = (state) => ({
  studyFormData: state.Study,
  profileData: state.Profile,
  projectFormData: state.Project,
  jobsFormData: state.jobs,
  customFormData: state.custom,
});

export default connect(mapStateToProps, {})(ResumeForm);
