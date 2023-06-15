import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params :{
    
        key: '66a661982d8c4604ab573270c33903a2'
    }
}
)
