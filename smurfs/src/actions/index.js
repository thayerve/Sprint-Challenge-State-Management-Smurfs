// ACTIONS
import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';
export const POST_SMURFS_START = 'POST_SMURFS_START';
export const POST_SMURFS_SUCCESS = 'POST_SMURFS_SUCCESS';
export const POST_SMURFS_FAILURE = 'POST_SMURFS_FAILURE';

export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURFS_START });
    axios
        .get('http://localhost:3333/smurfs')
        .then(res =>
            console.log(res)
            // dispatch({ type: FETCH_QUOTE_SUCCESS, payload: res.data.quote })           
        )
        .catch(err => 
            {
                console.log("OOOOOOOoooooops", err)
                // dispatch({ type: FETCH_QUOTE_FAILURE, payload: err.response });
            });
};


export const postSmurf = newSmurf => dispatch => {
    dispatch({ type: POST_SMURFS_START });
    axios
        .post('http://localhost:3333', newSmurf)
        .then(res =>
            console.log("results from newSmurf post: ", res)
            // dispatch({ type: FETCH_QUOTE_SUCCESS, payload: res.data.quote }) 
            // console.log("res: ", res)
            // dispatch({ type: POST_SMURFS_SUCCESS, payload: res.data })          
        )
        .catch(err => 
            {
                console.log("OOOOOOOoooooops", err)
                // dispatch({ type: POST_SMURFS_FAILURE, payload: err });
            });
};