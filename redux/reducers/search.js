// Actions types
export const SHOW_SEARCH = 'SHOW_SEARCH';
export const HIDE_SEARCH = 'HIDE_SEARCH';

// Actions creators
export const showSearch = () => ({type: SHOW_SEARCH})
export const hideSearch = () => ({type: HIDE_SEARCH})

// Initial state
const initialState = {showSearch: false}

// Reducer
export const searchReducer = (state = initialState, action) => {

    switch(action.type) {
        case SHOW_SEARCH:
            return {
                ...state,
                showSearch: true
            }
        case HIDE_SEARCH:
            return {
                ...state,
                showSearch: false
            }
        default:
            return state
    }
}
