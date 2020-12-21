import {combineReducers} from 'redux';

import {robotsReducer} from './robotsReducer'
import {partsReducer} from './partsReducer'

export const rootReducer = combineReducers({
    robots: robotsReducer,
    parts: partsReducer

})