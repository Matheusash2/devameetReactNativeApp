import axios, {AxiosRequestConfig, Method} from "axios";
import {API_URL} from '@env'
import { store } from "../store";

const instance = axios.create({
    baseURL: API_URL,
    timeout: 30000
})

export const api = async (endpoint: string, method: Method, body?: any, params?: any, newHeaders?: any) => {
    const token = store.getState().auth.token
    let headers: any = newHeaders? newHeaders : {'Content-Type': 'application/json'}
    
    if(token) {
        headers['Authorization'] = `Bearer ${token}` 
    }

    console.log(
        `executando: 
            url ${URL}${endpoint}, 
            metodo ${method}, 
            body ${JSON.stringify(body)}, 
            header ${JSON.stringify(headers)}`
      );

    let request: AxiosRequestConfig<any> = {
        url: endpoint,
        method: method,
        headers: headers,
        params: params,
    }

    if(body){
        request = {...request, data: body}
    }

    return instance.request(request)

   
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