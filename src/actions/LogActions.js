import { GET_LOGS, SET_LOADING, LOGS_ERRORS, ADD_LOG } from "./types";

// export const getLogs = () => {
//     return async (dispatch) => {
//         setLoading();

//         const res = await fetch('/logs');
//         const data = await res.json();
//         console.log(data);
//         dispatch({
//             type: GET_LOGS,
//             payload: data
//         })
//     }
// }

export const getLogs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch('/logs');
    const data = await res.json();
    dispatch({
      type: GET_LOGS,
      payload: data,
    });

  } catch (err) {
    dispatch({
      type: LOGS_ERRORS,
      payload: err.response.data,
    });
  }
};

export const addLog = (log) => async (dispatch) => {
    try {
      const res = await fetch('/logs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(log)
      })
      const data = await res.json();

      dispatch({
        type: ADD_LOG,
        payload: data
      })
    } catch(err) {
      dispatch({
        type: LOGS_ERRORS,
        payload: err.response.data
      })
    }
}

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
