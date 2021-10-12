import {
    SET_TEXT,
    SET_TYPE
} from '../types';

// Cada reducer tiene su state
const initialState = {
    textString: "",
    type: "all"
}

export default function textReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TEXT:
            return {
                ...state,
                textString: action.payload
            }
        case SET_TYPE:
            return{
                ...state,
                type: action.payload
            }
        default:
            return state;
    }
}