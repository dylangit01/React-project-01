import {CHANGE_SEARCH_FIELD} from "./constants";

// Below is the single source of the truth
const initialState = {
    iniSearchField: ''
};

// Below codes have to follow two principles: one is never modify the state, only create new state, and second one is the changes using pure functions
export const searchRobots = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            // Below codes means assign a new object, copy everything of state, and change the searchField to action.payload
            // I spend hours to find this bug that I wrote with capital S for beginning: "SearchField", that makes the app is not working
            return Object.assign({}, state, {iniSearchField: action.payload});
            // Another way to write above codes are:
            // return {...state, searchField: action.payload};
        default:
            return state;
    }
};

