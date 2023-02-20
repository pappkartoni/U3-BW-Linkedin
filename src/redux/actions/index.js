const profileUrl = "https://striveschool-api.herokuapp.com/api/profile/me";
const options1 = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzM2EzZDgzODFmYzAwMTNmZmZhZDYiLCJpYXQiOjE2NzY4ODQ1NDIsImV4cCI6MTY3ODA5NDE0Mn0.yy7dqsjX4YYSOfQOfYOZsSdFYZqn9oQ_CAzHWsa775s",
  },
};

export const FETCH_PROFILE = "GET_PROFILE";
export const FETCH_PROFILE_LOADING = "FETCH_PROFILE_LOADING";
export const FETCH_PROFILE_ERROR = "FETCH_PROFILE_ERROR";
export const GET_ALL_PROFILES = "GET_ALL_PROFILES"

export const fetchProfiles = () => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch(profileUrl, options1);
      if (response.ok) {
        const profileData = await response.json();
        console.log("profileData", profileData);
        dispatch({
          type: FETCH_PROFILE,
          payload: profileData,
        });
        dispatch({
          type: FETCH_PROFILE_LOADING,
          payload: false,
        });
      } else {
        dispatch({
          type: FETCH_PROFILE_LOADING,
          payload: false,
        });
        dispatch({
          type: FETCH_PROFILE_ERROR,
          payload: true,
        });
      }
    } catch (err) {
      dispatch({
        type: FETCH_PROFILE_LOADING,
        payload: false,
      });
      dispatch({
        type: FETCH_PROFILE_ERROR,
        payload: true,
      });
    }
  };
};


export const getAllProfiles = () => {
  return async (dispatch, getState) => {
    
  }
}