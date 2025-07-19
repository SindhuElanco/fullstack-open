import axios from "axios";
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request =  axios.get(baseUrl)
    return request.then(res => res.data)
}

const create = newPersonInfo => {
    return axios.post( baseUrl,newPersonInfo)
}

export default {getAll, create}