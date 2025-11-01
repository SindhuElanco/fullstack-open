import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(res => res.data);
};

const create = newPersonInfo => {
  return axios.post(baseUrl, newPersonInfo).then(res => res.data);
};

const deletePerson = id => {
  return axios.delete(`${baseUrl}/${id}`);
};

const editPerson = (id, editPersonInfo) => {
  console.log('server', editPersonInfo);
  return axios.put(`${baseUrl}/${id}`, editPersonInfo).then(res => res.data);
};
export default { getAll, create, deletePerson, editPerson };
