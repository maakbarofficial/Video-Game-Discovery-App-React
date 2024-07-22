import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'e7ef339912f047d1833fe72f636c0975'
    }
})