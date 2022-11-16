import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import ResumeModel from "./resume";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const MainPage = (props) => {
  const classes = useStyles();
  return (
    <div>
      <ResumeModel />
    </div>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(MainPage);
