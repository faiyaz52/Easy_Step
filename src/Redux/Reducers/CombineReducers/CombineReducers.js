import {combineReducers} from 'redux'
import { workExpereinceReducer } from '../workExp'
import {educationsReducer} from '../education'

export default combineReducers ({
    workExp:workExpereinceReducer,
    education:educationsReducer
    
})
