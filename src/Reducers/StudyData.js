import {
    STUDY,
    CLEAR_STUDY,
    COUNT,
  } from "../Constants/constant";
  
  const initialState = {
    Data: [
      { date: null, college: null, courseName: null, title: null },
    ],
    Count: 1,
  };
  
  export default function (state = initialState, action) {
    if (action) {
      switch (action.type) {
        case STUDY:
          return {
            ...state,
            Data: action.payload,
          };
        case COUNT:
          return {
            ...state,
            Count: action.payload,
          };
  
        case CLEAR_STUDY:
          return {};
        default:
          return state;
      }
    }
  }


  