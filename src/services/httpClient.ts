import axios from "axios";

// console.log(i18n);

const httpClient = axios.create({
  baseURL: "https://api.admin.dust.games/",
  headers: {
    "Content-Type": "application/json",
    // токен
    Authorization: "Bearer " + localStorage.getItem("access_token")
  }
});

// Отлавливаем ошибки
const errorInterceptor = (error: any) => {
  const errors = error.response.data;

  if (errors.errors) {
    const array = Object.values(errors.errors);
    const errorsText = array.join(". ");

    return Promise.reject({ status: error.response.status, error: errorsText });
  } else if (errors.message) {
    return Promise.reject({ status: error.response.status, error: error.response.data.message });
  } else {
    return Promise.reject({ status: error.response.status, error: errors });
  }
};

// Отлавливаем хорошие ответы
const responseInterceptor = (response: any) => {
  return response.data;
};

httpClient.interceptors.response.use(responseInterceptor, errorInterceptor);

export default httpClient;
