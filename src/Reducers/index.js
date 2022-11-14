import { combineReducers } from "redux";
import educationData from "./educationData";
import profileData from "./profileData";
import projectsData from "./projectsData";
import JobsData from "./JobsData";
import CustomData from "./CustomData";

export default combineReducers({
  Education: educationData,
  Profile: profileData,
  Jobs: JobsData,
  Custom: CustomData,
  Project: projectsData,
});
