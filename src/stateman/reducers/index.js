import { combineReducers } from 'redux';
import { generalReducer } from './general';
import { postReducer } from './post';

export default combineReducers({
    general: generalReducer,
    postsData: postReducer
});