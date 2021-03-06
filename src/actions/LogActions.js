import { GET_LOGS, SET_LOADING, LOGS_ERRORS, ADD_LOG, DELETE_LOG, SET_CURRENT, CLEAR_CURRENT, UPDATE_LOG, SEARCH_LOGS } from "./types";


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
      payload: err.response.statusText,
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
        type: SEARCH_LOGS,
        payload: data
      })
    } catch(err) {
      dispatch({
        type: LOGS_ERRORS,
        payload: err.response.statusText
      })
    }
}

export const updateLog = log => async (dispatch) => {
  try {
    const res = await fetch(`/logs/${log.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(log)

    })
    const data = await res.json();
    dispatch({
      type: UPDATE_LOG,
      payload: data
    })
  } catch(err) {    
    dispatch({
      type: LOGS_ERRORS,
      payload: err.response.statusText
    })
  }
}

export const searchLog = (text) =>  async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`/logs?q=${text}`);
    const data = await res.json();
    dispatch({
      type: GET_LOGS,
      payload: data,
    });

  } catch (err) {
    dispatch({
      type: LOGS_ERRORS,
      payload: err.response.statusText,
    });
  }
}

export const deleteLog = (id) => async (dispatch) => {
    try {
      await fetch(`/logs/${id}`, {
        method: 'DELETE'
      });

      dispatch({
        type: DELETE_LOG,
        payload: id,
      })
    } catch(err) {
      dispatch({
        type: LOGS_ERRORS,
        payload: err.response.statusText
      })
    }
}

export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log
  }
}

export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  }
}

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
