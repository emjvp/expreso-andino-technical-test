import axios from "axios";


const api = axios.create({

    baseURL: "https://expreso-andino-technical-test.onrender.com/api"

});


export default api;