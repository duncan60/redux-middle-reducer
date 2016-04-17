import * as types from 'constants/ActionTypes';


let fetchSuccessed = (data) => {
    return {
        type: types.FETCH_SUCCESSED,
        data
    };
};

let fetchFailed = () => {
    return {
        type: types.FETCH_FAILED
    };
};

let fetchPending = () => {
    return {
        type     : types.FEATCH_PENDING,
        isPending: true
    };
};

export const setSay = (say) => {
    return {
        type: types.SET_SAY,
        say
    };
};

export function fetchAPI() {
    return {
        types   : [fetchSuccessed, fetchFailed, fetchPending],
        fetchAPI: {
            path  : 'https://api.github.com',
            method: 'GET'
        }
    };
}