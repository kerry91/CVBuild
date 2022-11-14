import { findAncestor } from "typescript";
import {
    JOBS,
    CLEAR_JOBS,
    MODIFY_JOBS_COUNT,
  } from "../Constants/constant";
  const initialState = {
    Data: [
      {
        Jobsdate: null,
        Jobstitle: null,
        Jobsdescription: null,
        Jobscompany: null,
      },
    ],
    Count: 1,
  };
  
  export default function (state = initialState, action) {
    if (action) {
      switch (action.type) {
        case JOBS:
          return {
            ...state,
            Data: action.payload,
          };
        case MODIFY_JOBS_COUNT:
          return {
            ...state,
            Count: action.payload,
          };
        case CLEAR_JOBS:
          return {};
        default:
          return state;
      }
    }
  }
  
