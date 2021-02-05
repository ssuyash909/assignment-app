import {addPostReducer,addCommentReducer} from './postReducer'
import showCommentReducer from './showCommentReducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    postadd : addPostReducer,
    showComment :showCommentReducer,
    commentadd : addCommentReducer
});

export default allReducers;