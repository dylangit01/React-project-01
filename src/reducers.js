import {CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAILED} from "./constants";

// Below is the single source of the truth
const initialStateSearch = {
    searchField: ''
};

// Below codes have to follow two principles: one is never modify the state, only create new state, and second one is the changes using pure functions
export const searchRobots = (state = initialStateSearch, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            // Below codes means assign a new object, copy everything of state, and change the searchField to action.payload
            // I spend hours to find this bug that I wrote with capital S for beginning: "SearchField", that makes the app is not working
            return Object.assign({}, state, {searchField: action.payload});
        // Another way to write above codes are:
        // return {...state, searchField: action.payload};
        default:
            return state;
    }
};

const initialStateRobots ={
    isPending: false,
    robots: [],
    error: ''
};

export const requestRobots = (state = initialStateRobots, action = {}) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return {...state, isPending: true};
        case REQUEST_ROBOTS_SUCCESS:
            return {...state, robots: action.payload, isPending: false};
        case REQUEST_ROBOTS_FAILED:
            return {...state, error: action.payload, isPending: false};
        default:
            return state;
    }
};
