import { GET_POSTS } from "../actionTypes" 

const initialState = {
    page: 1,
    posts: []
}

const postReducer = (state = initialState, action) => {

    switch (action.type) {
      case GET_POSTS: 
        return {
          ...state,
          posts: action.payload.data,
          page: action.payload.page
        }
      default: return state;
    }
  }

export {postReducer}