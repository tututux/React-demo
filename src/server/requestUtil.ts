import axios, { AxiosRequestConfig } from "axios";
import deploy from "config";
import { getToken } from "utils/util";

// 创建实例时设置配置的默认值
const requestUtil = axios.create({
  baseURL: deploy.SERVER_URL,
  timeout: 60000,
  // headers: {}
});

// 添加请求拦截器
requestUtil.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    /// 设置请求头 Authorization
    if (config.headers["Authorization"] === undefined) {
      const token = getToken();
      if (Boolean(token)) {
        config.headers["Authorization"] = token;
      } else {
        delete config.headers["Authorization"];
      }
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
requestUtil.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    return response.data;
  },
  (error) => {
    // 对响应错误做点什么
    // let response: { code: any; data: any; message: any; status: any };

    return Promise.reject(error);
  }
);

export default requestUtil;
