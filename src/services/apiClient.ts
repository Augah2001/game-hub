import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: '94afe1d2f0404e24b86f48c1c3d755c9'
    }
})

