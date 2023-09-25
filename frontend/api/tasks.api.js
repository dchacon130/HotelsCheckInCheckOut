import axios from 'axios'

const taskApi = axios.create({ baseURL: 'http://127.0.0.1:8000/api/reservation/' });

export const getAllReservatios = () => {
    return taskApi.get('/');
};

export const getReservationById = (id) => taskApi.get(`/${id}/`);
export const createReservation = (info) => taskApi.post('/', info);
export const updateReservation = (id, info) => taskApi.put(`/${id}/`, info);
export const deleteReservation = (id) => taskApi.delete(`/${id}/`);
//export const createReservation = (data) => {
//    return axios.taskApi.post('/', info);
//};

