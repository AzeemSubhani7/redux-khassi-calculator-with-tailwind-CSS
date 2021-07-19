import { actionsTypes } from "./actionsType";

export const inputAction = (input) => {
    return {
        type: actionsTypes.INPUT,
        payload: input
    }
}

export const addOperatorAction = () => {
    return {
        type: actionsTypes.OPERATOR_ADD
    }
}

export const minusOperatorAction = () => {
    return {
        type: actionsTypes.OPERATOR_MINUS
    }
}

export const divideOperatorAction = () => {
    return {
        type: actionsTypes.OPERATOR_DIVIDE
    }
}

export const timesOperatorAction = () => {
    return {
        type: actionsTypes.OPERATOR_TIMES
    }
}