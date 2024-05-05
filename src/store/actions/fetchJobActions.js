export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: { data },
});

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export const fetchData = () => {
  return async (dispatch, state) => {
    if (state().fetchJob.loading) return;

    const { fetchJob } = state();
    if (
      fetchJob.totalCount &&
      fetchJob.pageNumber * fetchJob.limit >= fetchJob.totalCount
    )
      return;
    dispatch(fetchDataRequest());
    try {
      const body = JSON.stringify({
        limit: fetchJob.limit,
        offset: fetchJob.pageNumber * fetchJob.limit,
      });
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body,
      };

      const response = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        requestOptions
      );
      const data = await response.json();
      dispatch(fetchDataSuccess(data));
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};
