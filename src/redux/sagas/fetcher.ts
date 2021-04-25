import axios, {AxiosRequestConfig} from 'axios'

const fetcher = async (options: AxiosRequestConfig) => {
    const response = await axios({
        baseURL: process.env.REACT_APP_API,
        headers: {
            Authorization: localStorage.getItem("token"),
            ...options.headers,
        },
        ...options,
    })
    return response
}

export default fetcher;