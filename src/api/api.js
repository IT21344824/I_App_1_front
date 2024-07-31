import axios from 'axios';

export default function callApi(endpoint, method = 'GET', body) {
    return axios({
        method: method,
        url: `https://669e4ca49a1bda368006290c.mockapi.io/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err);
    });
}
