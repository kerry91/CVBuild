import {
    CUSTOM,
    CLEAR_CUSTOM,
    CUSTOM_COUNT,
  } from "../Constants/constant";

  const initialState = {
    Data: [{sectiontitle: null, customtitle: null, customdate: null, customdescription: null,}],
    Count: 1,
  };

  
  export default function (state = initialState, action) {
    if (action) {
      switch (action.type) {
        case CUSTOM:
          return {
            ...state,
            Data: action.payload,
          };
        case CUSTOM_COUNT:
          return {
            ...state,
            Count: action.payload,
          };
        case CLEAR_CUSTOM:
          return {
            Data: [],
          };
        default:
          return state;
      }
    }
  }
  

  