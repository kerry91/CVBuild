import {
    STUDY,
    COUNT,
    PROJECTS_COUNT,
    JOBS_COUNT,
    CUSTOM_COUNT,
    PROFILE,
    PROJECTS,
    JOBS,
    CUSTOM,
  } from "../Constants/constant";
  
  export const StudyCount = (count) => (dispatch) => {
    dispatch({
      type: COUNT,
      payload: count,
    });
  };
  
  export const JobsCount = (count) => (dispatch) => {
    dispatch({
      type: JOBS_COUNT,
      payload: count,
    });
  };

  export const CustomCount = (count) => (dispatch) => {
    dispatch({
      type: CUSTOM_COUNT,
      payload: count,
    });
  };

  export const ProjectsCount = (count) => (dispatch) => {
    dispatch({
      type: PROJECTS_COUNT,
      payload: count,
    });
  };

    
  export const SaveStudyData = (data) => (dispatch) => {
    dispatch({
      type: STUDY,
      payload: data,
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
  
  