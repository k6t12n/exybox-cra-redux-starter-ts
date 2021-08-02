import type { AppDispatch } from 'store'

const setWelcomeMsgSuccess = (msg : string) => ({
    type: 'SET_WELCOME_MSG_SUCCESS',
    payload: {
        msg
    }
})

export const setWelcomeMsg = (msg: string) => ((dispatch : AppDispatch) => {
    dispatch(setWelcomeMsgSuccess(msg))
})
