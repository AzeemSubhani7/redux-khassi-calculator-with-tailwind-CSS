import { actionsTypes } from "./actionsType"

// Making initial state
const INITIAL_STATE = {
    value: [],
    result: 0
}

const addState = (array) => {
    let total = 0;
    array.forEach(element => {
        total = total + element
    });
    return total;
}

const minusState = (array) => {
    let total = 0;
    array.forEach(element => {
        total = element - total
    });
    return total;
}

const divideState = (array) => {
    let total = 1;
    array.forEach(element => {
        total = element / total
    });
    return total;
}

const timesState = (array) => {
    let total = 1;
    array.forEach(element => {
        total = total * element
    });
    return total;
}

export const valueReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionsTypes.INPUT: 
            return {...state, value: [...state.value, action.payload]}
        case actionsTypes.OPERATOR_ADD:
            return {...state, result: addState(state.value)}
        case actionsTypes.OPERATOR_MINUS:
            return {...state, result: minusState(state.value)}
        case actionsTypes.OPERATOR_DIVIDE:
            return {...state, result: divideState(state.value)}
        case actionsTypes.OPERATOR_TIMES:
            return {...state, result: timesState(state.value)}
        default:
            return state;
    }
}

