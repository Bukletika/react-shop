import { optionsProductApi } from './utils';

class ProductApi {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  /* Проверить ответ сервера */
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject("Произошла ошибка");
  }

  /* Получить продукты с сервера */
  getProducts() {
    return fetch(`${this._url}/product`, {
      headers: {
        ...this._headers,
      }
    })
    .then(this._checkResponse);
  }

  /* Получить список категорий с свервера */
  getCategories() {
    return fetch(`${this._url}/brand`, {
      headers: {
        ...this._headers,
      }
    })
    .then(this._checkResponse);
  }

}

const productApi = new ProductApi(optionsProductApi);

export default productApi;
