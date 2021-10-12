import {
    SET_TEXT,
    SET_TYPE
} from '../types';

// Colocar texto a buscar
export function colocarTextoAction(text) {
    return (dispatch) => {
        dispatch(setTextString(text));
    }
}

const setTextString = (text) => ({
    type: SET_TEXT,
    payload: text
});

// Colocar el tipo a buscar
export function colocarTipoAction(type) {
    return (dispatch) => {
        dispatch(setTypeString(type));
    }
}

const setTypeString = (type) => ({
    type: SET_TYPE,
    payload: type
});