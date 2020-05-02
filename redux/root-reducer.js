import {combineReducers} from 'redux'

import {searchReducer} from './reducers/search'

const rootReducer = combineReducers({
    search: searchReducer
})

export default rootReducer;