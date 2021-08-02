import {combineReducers, Action} from 'redux'
import welcome_msg from './welcome_msg'

export default combineReducers({
    sample_val: (state:number=0,action: Action) => {
        return state
    },
    welcome_msg: welcome_msg
})
