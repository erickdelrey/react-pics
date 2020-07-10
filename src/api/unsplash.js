import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID HG5djZraRTdgPkoPFSPlz3sIc3Z5OMsMW7hup_qj_Bs'
    }
});