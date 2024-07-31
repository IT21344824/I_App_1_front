import axios from 'axios';

export default function DBcallApi(endpoint, method = 'GET', body) {
    return axios({
        method: method,
        url: `http://localhost:5000/${endpoint}`,
        data: body,
        headers: {
            "Content-Type": "application/json",
        }
    }).catch(err => {
        console.log(err);
    });
}

