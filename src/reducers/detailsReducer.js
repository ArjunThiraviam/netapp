import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_DETAILS':
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case 'CREATE_DETAILS':
            return { ...state, [action.payload.id]: action.payload };
        default:
            return state;
    }
}