import { LOGIN } from '../constants/actionTypes';

export default function authReducer(state = {}, action) {
    if (action.type === LOGIN) {
        return {
            ...state,
            user: action.payload
        };
    };

    return state;
};
