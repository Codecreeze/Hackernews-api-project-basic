import { GET_POSTS, SET_LOADING } from "./actionTypes"
import { api } from "../services/api"

const PER_PAGE = 10

const getPosts = (page, oldData) => {
  console.log(page, oldData)
    return async (dispatch) => {
      page = page || 1
      oldData = oldData || []
      dispatch({type: SET_LOADING, payload: true})
      // dispatch({type: GET_POSTS, payload: {data: resp.data.slice( (page * 10), (page * 10)+PER_PAGE  ), page: page}})
      let posts = await api.getStories()
      posts = posts.data.slice( (page * 10), (page * 10)+PER_PAGE )
      console.log('posts ', posts, page)
     for(var i = 0; i < posts.length; i++){
        let id = posts[i]
        let d = await api.getItem(id)
        oldData.push(d.data)
      }
      dispatch({type: GET_POSTS, payload: {data: oldData , page: page+1}})
      dispatch({type: SET_LOADING, payload: false})
    }
  }

const loading = (_s) => {
  return {
    type: SET_LOADING,
    payload: !!_s
  }
}


export {
  getPosts, 
  loading
}