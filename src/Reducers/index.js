import { combineReducers } from "redux";
import StudyData from "./StudyData";
import ProfileData from "./ProfileData";
import ProjectsData from "./ProjectsData";
import JobsData from "./JobsData";
import CustomData from "./CustomData";

export default combineReducers({
  Study: StudyData,
  Profile: ProfileData,
  Jobs: JobsData,
  Custom: CustomData,
  Project: ProjectsData,
});
