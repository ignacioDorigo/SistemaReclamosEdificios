import axios from 'axios';

export class EdificioService{
    baseUrl = 'http://localhost:8080/edificios/'
    getAll(){
        return axios.get(this.baseUrl + "all").then(res => res.data.data);
    }
}