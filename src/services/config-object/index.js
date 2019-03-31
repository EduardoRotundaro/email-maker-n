import { API_URL } from '../../assets/js/constants'

export default config = (method, url, data) => {
    let configObject = {
        method: method,
        url: `${API_URL}${url}`
    }
    if(data.body) configObject.data = data.body
    if(data.token) configObject.headers = { Authorization: data.token }
    if(data.params) configObject.params = data.params

    return configObject
}