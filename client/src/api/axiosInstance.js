import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api',
  withCredentials: true,
});

let accessToken = '';

function setAccessToken(newToken) {
  accessToken = newToken;
}

// Интерсептор для запросов: добавляем токен и логируем его
axiosInstance.interceptors.request.use((config) => {
  if (!config.headers.Authorization) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  // Логирование токена для отладки
  console.log("Access Token in Request:", config.headers.Authorization);
  return config;
});

// Интерсептор для ответов: обновляем токен, если требуется
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const prevRequest = error.config;
    if (error.response.status === 403 && !prevRequest.sent) {
      console.log("Token expired. Trying to refresh.");
      try {
        const response = await axios.get('/api/tokens/refresh', { withCredentials: true });
        const newAccessToken = response.data.accessToken;
        setAccessToken(newAccessToken); // Обновляем глобально токен

        prevRequest.sent = true;
        prevRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axiosInstance(prevRequest);
      } catch (refreshError) {
        console.error("Failed to refresh token:", refreshError);
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export { setAccessToken };
export default axiosInstance;
