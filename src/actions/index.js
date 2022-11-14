import {
    EDUCATION,
    MODIFY_COUNT,
    MODIFY_PROJECTS_COUNT,
    MODIFY_JOBS_COUNT,
    MODIFY_CUSTOM_COUNT,
    PROFILE,
    PROJECTS,
    JOBS,
    CUSTOM,
  } from "../Constants/constant";
  
  export const SaveEducationData = (data) => (dispatch) => {
    dispatch({
      type: EDUCATION,
      payload: data,
    });
  };
  
  export const ModifyEducationCount = (count) => (dispatch) => {
    dispatch({
      type: MODIFY_COUNT,
      payload: count,
    });
  };
  
  export const ModifyJobsCount = (count) => (dispatch) => {
    dispatch({
      type: MODIFY_JOBS_COUNT,
      payload: count,
    });
  };
  export const ModifyCustomCount = (count) => (dispatch) => {
    dispatch({
      type: MODIFY_CUSTOM_COUNT,
      payload: count,
    });
  };
  export const ModifyProjectsCount = (count) => (dispatch) => {
    dispatch({
      type: MODIFY_PROJECTS_COUNT,
      payload: count,
    });
  };
  export const SaveProfileData = (data) => (dispatch) => {
    dispatch({
      type: PROFILE,
      payload: data,
    });
  };
  
  export const SaveCustomData = (data) => (dispatch) => {
    dispatch({
      type: CUSTOM,
      payload: data,
    });
  };
  
  export const SaveJobsData = (data) => (dispatch) => {
    dispatch({
      type: JOBS,
      payload: data,
    });
  };
  
  export const SaveProjectData = (data) => (dispatch) => {
    dispatch({
      type: PROJECTS,
      payload: data,
    });
  };
  
  