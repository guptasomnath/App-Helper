import axios, { AxiosRequestConfig, AxiosError } from "axios";

export const httpRequest = async <T = undefined, E = undefined>(config: AxiosRequestConfig) => {
  let error: AxiosError<E> | undefined = undefined;
  let data: T | undefined = undefined;
  

  try {
    const response = await axios.request<T>(config);
    data = response.data;
  } catch (error) {
    error = error;
  }

  return { error, data };
};
