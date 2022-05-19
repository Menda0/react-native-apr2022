
export const initialState = {
    message: "Hello WOrld Mathias",
    counter: 0
}

export const reducer = (state=initialState, action) => {
    switch(action.type){
        case ACTION_TYPES.INCREMENT_COUNTER:
            return {...state, counter: state.counter+1}
        case ACTION_TYPES.SET_MESSAGE:
            const {message} = action.payload
            return {...state, message}
        default:
            return state
    }
}

export const ACTION_TYPES = {
    SET_MESSAGE: "MESSAGES/SET_MESSAGE",
    INCREMENT_COUNTER: "MESSAGES/INCREMENT_COUNTER"
}

export const actions = {
    setMessage: (message) => {
        return {
            type: ACTION_TYPES.SET_MESSAGE,
            payload: {
                message
            }
        }
    },
    incrementCounter: () => {
        return {
            type: ACTION_TYPES.INCREMENT_COUNTER
        }
    }
}