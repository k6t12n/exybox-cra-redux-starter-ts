// import {AnyAction} from 'redux'

interface WelcomeMsgActionPayload {
    msg: string
}

interface WelcomeMsgAction {
    type: string,
    payload: WelcomeMsgActionPayload
}

const welcome_msg = (state : string = '', action : WelcomeMsgAction) => {

    switch (action.type) {
        case 'SET_WELCOME_MSG_SUCCESS':
            return action.payload.msg
        default:
            return state
    }

}

export default welcome_msg
