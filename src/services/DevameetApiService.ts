import axios, {Method} from 'axios';
import {API_URL} from '@env';
import {store} from '../store';

const instance = axios.create({
  baseURL: API_URL,
  timeout: 30000,
});

export const api = async (
  endpoint: string,
  method: Method,
  body?: any,
  params?: any,
  newHeaders?: any,
) => {
  const token = store.getState().auth.token;
  let headers: any = newHeaders
    ? newHeaders
    : {'Content-Type': 'application/json'};
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  return instance.request({
    url: endpoint,
    method: method,
    data: body ? body : '',
    params: params,
    headers: headers,
  });
};

const post = async (url: string, data: any, headers?: any) => {
  return api(url, 'POST', data, headers);
};

const put = async (url: string, data?: any, headers?: any) => {
  return api(url, 'PUT', data, headers);
};

const get = async (url: string, params?: any, headers?: any) => {
  return api(url, 'GET', params, headers);
};

const _delete = async (url: string, params?: any, headers?: any) => {
  return api(url, 'DELETE', params, headers)
}

export {post, put, get, _delete};
