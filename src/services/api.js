import axios from "axios"

//Config
const API_BASE = `https://hacker-news.firebaseio.com/v0`

const api = {
    getStories: () => axios(`${API_BASE}/newstories.json`),
    getItem: (id) => axios(`${API_BASE}/item/${id}.json`)
}

export {api}