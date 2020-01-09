import formdetails from '../apis/formdetails';

export const createFormDetails = formValues =>  async dispatch => {
    const response = await formdetails.post('/details', formValues);
    dispatch({type: 'CREATE_DETAILS', payload: response.data});
};

export const fetchResults = () => async dispatch => {
    const response = await formdetails.get('/details');
    dispatch({type: 'FETCH_DETAILS', payload: response.data});
}

