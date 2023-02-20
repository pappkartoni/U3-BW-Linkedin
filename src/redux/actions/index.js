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
