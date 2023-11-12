import axios, {AxiosRequestConfig, Method} from "axios";
import {API_URL} from '@env'
import { store } from "../store";

const instace = axios.create({
    baseURL: API_URL,
    timeout: 30000
})

export const api = async (endpoint: string, method: Method, body?: any, params?: any, newHeaders?: any) => {
    const token = store.getState().auth.token
    let headers: any = newHeaders? newHeaders : {'Content-type': 'application/json'}
    
    if(token) {
        headers['Authorization'] = `Bearer ${token}` 
    }

    let request: AxiosRequestConfig<any> = {
        url: endpoint,
        method: method,
        headers: headers,
        params: params,
    }

    if(body){
        request = {...request, data: body} 
    }

    return instace.request(request)

   
}

const post = async(endpoint: string, body: any, newHeaders?: any) => {
    return api(endpoint, "POST", body, newHeaders)
}

const put = async(endpoint: string, body: any, newHeaders?: any) => {
    return api(endpoint, "PUT", body, newHeaders)
}

const get = async(endpoint: string, params?: any, newHeaders?: any) => {
    return api(endpoint, "GET", null, params, newHeaders)
}

const _delete = async(endpoint: string, params?: any, newHeaders?: any) => {
    return api(endpoint, "DELETE", null, params, newHeaders)
}

export {post, put, get, _delete}