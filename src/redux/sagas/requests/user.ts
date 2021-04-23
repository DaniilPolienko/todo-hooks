import axios from 'axios'
const jwt = require("jsonwebtoken");
const token = localStorage.getItem("token");
axios.defaults.baseURL = process.env.REACT_APP_API;
axios.defaults.headers.common["Authorization"] = token;

export function requestGetUser(currentPage: number, filter: boolean | null, order: string) {
    return axios.request({
        method: "get",
        url: "/items",
        params: {
            page: currentPage,
            filter: filter,
            sort: order,
        },
    })
    
}