const axios = require('axios');

class Data {
    constructor() {
        this.backend = 'http://localhost:8080'
    }

    getAllData() {
        return new Promise((res,rej) =>  {
            axios.get(`${this.backend}/tempData.json`)
            .then((response) => {
                res(response.data);
            }).catch((err) => {
                rej(err);
            });
        })
    }
}

export default (new Data());