import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';  
import detailsReducer from './detailsReducer';

export default combineReducers({
    form: formReducer,
    details: detailsReducer
}); 