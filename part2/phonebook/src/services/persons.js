import axios from "axios";


const apiBaseUrl = process.env.REACT_APP_API_BASE_URL || '';

const baseurl = `${apiBaseUrl}/api/persons`

// Read the data
const getAll = () => {
  const request = axios.get(baseurl)
  return request.then(response => response.data)
} 

// create new data
const create = (newObject) => {
  const request = axios.post(baseurl, newObject)
  return request.then(response => response.data)
}

// update person 
const update =  (newObject, id) => {
  const request = axios.put(`${baseurl}/${id}`, newObject)
  return request.then(response=>response.data)
}

// delete selected data
const remove = (id) =>{
  return axios.delete(`${baseurl}/${id}`)
}

export default { getAll, create, remove, update }