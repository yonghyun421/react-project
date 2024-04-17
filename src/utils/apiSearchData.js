import axios from "axios"

const SEARCH_DATA_API_KEY = process.env.REACT_APP__API_KEY;

const api = axios.create({
  baseURL: 'https://newsapi.org/v2',
  timeout: 1000,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${SEARCH_DATA_API_KEY}`
  }
})

// 요청 인터셉터 추가하기
axios.interceptors.request.use((config) => 
     config
  , (error) => 
     Promise.reject(error)
  )

// 응답 인터셉터 추가하기
axios.interceptors.response.use((response) => 
     response
  , (error) => 
     Promise.reject(error)
  )

export default apiSearchData