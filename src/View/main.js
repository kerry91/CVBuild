import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Form from "./Forms/index.js";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const MainPage = (props) => {
  const classes = useStyles();
  return (
    <div >
      <Form />
    </div>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(MainPage);
