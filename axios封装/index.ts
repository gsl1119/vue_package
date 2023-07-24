import { BASE_URL, TIME_OUT } from "./config";
import HYRequest from "./request";

// 初始化一个请求示例
const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
});

// 另外的请求
export const hyRequest2 = new HYRequest({
  baseURL: "http://127.0.0.1:8080",
  timeout: 8000,

  interceptors: {
    requestSuccessFn: (config) => {
      return config;
    },
    requestFailureFn: (err) => {
      return err;
    },
    responseSuccessFn: (res) => {
      return res;
    },
    responseFailureFn: (err) => {
      return err;
    },
  },
});

export default hyRequest;
