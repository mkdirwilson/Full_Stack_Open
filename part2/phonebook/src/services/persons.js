import axios from "axios";

const baseurl = 'http://localhost:3001/persons'

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

export default { getAll, create }