const profileUrl = "https://striveschool-api.herokuapp.com/api/profile/me";
const updateProfileUrl = "https://striveschool-api.herokuapp.com/api/profile/";
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

export const GET_ALL_PROFILES = "GET_ALL_PROFILES";
export const UPDATE_PROFILE = "UPDATE_PROFILE";

export const GET_ALL_EXPERIENCES = "GET_ALL_EXPERIENCES"
export const CREATE_EXPERIENCE = "CREATE_EXPERIENCE"
export const UPDATE_EXPERIENCE = "UPDATE_EXPERIENCE"
export const DELETE_EXPERIENCE = "DELETE_EXPERIENCE"
export const GET_SINGLE_EXPERIENCE = "GET_SINGLE_EXPERIENCE"


export const fetchOwnProfile = () => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch(profileUrl, options1);
      if (response.ok) {
        const profileData = await response.json();

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
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        options1
      );

      if (res.ok) {
        const data = await res.json();

        dispatch({
          type: GET_ALL_PROFILES,
          payload: data,
        });
      } else {
        throw new Error(res.status);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const changeTitle = (title) => {
  return async (dispatch) => {
    const res = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/",
      {
        method: "PUT",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzM2EwYjgzODFmYzAwMTNmZmZhZDQiLCJpYXQiOjE2NzY4ODQ0OTEsImV4cCI6MTY3ODA5NDA5MX0.yA75f4gTC4Tg50Avv9Woxkh1_7a-_zCz7_wMRBHm-Ts",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
        }),
      }
    );
    const data = await res.json();
    console.log(data);
  };
};
export const updateOwnProfile = (content) => {
  return async (dispatch, getState) => {
    dispatch({ type: UPDATE_PROFILE });
    try {
      let response = await fetch(updateProfileUrl, {
        method: "PUT",
        body: JSON.stringify(content),
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzM2EzZDgzODFmYzAwMTNmZmZhZDYiLCJpYXQiOjE2NzY4ODQ1NDIsImV4cCI6MTY3ODA5NDE0Mn0.yy7dqsjX4YYSOfQOfYOZsSdFYZqn9oQ_CAzHWsa775s",
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const MyData = await response.json();
        dispatch({
          type: UPDATE_PROFILE,
          payload: MyData,
        });
        console.log("updatedDataaction", MyData);
      } else {
        console.log("Error fetching Data!");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

/* Experience related Actions */

export const getAllExperiences = (userId) => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzM2EzZDgzODFmYzAwMTNmZmZhZDYiLCJpYXQiOjE2NzY4ODQ1NDIsImV4cCI6MTY3ODA5NDE0Mn0.yy7dqsjX4YYSOfQOfYOZsSdFYZqn9oQ_CAzHWsa775s",
          },
        }
      );

      if (res.ok) {
        const data = await res.json();
        console.log("exp", data);
        dispatch({
          type: GET_ALL_EXPERIENCES,
          payload: data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const createExperience = (userId, data) => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`,
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzM2EzZDgzODFmYzAwMTNmZmZhZDYiLCJpYXQiOjE2NzY4ODQ1NDIsImV4cCI6MTY3ODA5NDE0Mn0.yy7dqsjX4YYSOfQOfYOZsSdFYZqn9oQ_CAzHWsa775s",
            "Content-Type": "application/json",
          },
        }
      );

      if (res.ok) {
        const data = await res.json(); //is this actually an object?

        dispatch({
          type: CREATE_EXPERIENCE,
          payload: data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateExperience = (userId, expId, data) => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`,
        {
          method: "PUT",
          body: JSON.stringify(data),
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzM2EzZDgzODFmYzAwMTNmZmZhZDYiLCJpYXQiOjE2NzY4ODQ1NDIsImV4cCI6MTY3ODA5NDE0Mn0.yy7dqsjX4YYSOfQOfYOZsSdFYZqn9oQ_CAzHWsa775s",
            "Content-Type": "application/json",
          },
        }
      );

      if (res.ok) {
        const data = await res.json(); //is this actually an object?

        dispatch({
          type: UPDATE_EXPERIENCE,
          payload: data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getSingleExperience = (userId, expId) => {
    console.log(userId, expId)
    return async (dispatch) => {
        try {
            const res = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`, {
                method: "GET",
                headers: {Authorization:  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzM2EzZDgzODFmYzAwMTNmZmZhZDYiLCJpYXQiOjE2NzY4ODQ1NDIsImV4cCI6MTY3ODA5NDE0Mn0.yy7dqsjX4YYSOfQOfYOZsSdFYZqn9oQ_CAzHWsa775s"}
            })

            if (res.ok) {
                const data = await res.json() //is this actually an object?

                dispatch({
                    type: GET_SINGLE_EXPERIENCE,
                    payload: data
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const deleteExperience = (userId, expId) => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzM2EzZDgzODFmYzAwMTNmZmZhZDYiLCJpYXQiOjE2NzY4ODQ1NDIsImV4cCI6MTY3ODA5NDE0Mn0.yy7dqsjX4YYSOfQOfYOZsSdFYZqn9oQ_CAzHWsa775s",
          },
        }
      );

      if (res.ok) {
        const data = await res.json(); //is this actually an object? what does delete return?

        dispatch({
          type: DELETE_EXPERIENCE,
          payload: data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
