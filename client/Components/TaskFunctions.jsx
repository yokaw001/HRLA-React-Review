import axios from 'axios';

export const getList = () => {
    return axios
        .get('/todo', {
            headers: { "Content-Type": "application/json" }
        })
        .then(res => {
            return res.data
        })
}

export const addToList = term 