import addPostReducer from './postReducer'
import addCommentReducer from './addCommentReducer'
import addLikeReducer from './addLikeReducer'
import editPostReducer from './editPostReducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    postadd : addPostReducer,
    commentadd : addCommentReducer,
    likeadd : addLikeReducer,
    postedit : editPostReducer
});

export default allReducers;