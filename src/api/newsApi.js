const API_KEY = "d5c179e47e4741faa2d615aa7318cc5f"

class NewsApi {
    constructor() {
        this.token = API_KEY
        this.baseUrl = `https://newsapi.org/v2/`
        this.options = this.createOptions("GET")
        this.fullUrl = ""
    }

    /**
     * Создаем опции для запроса на сервер, включая токен авторизации
     * @param method - Метод
     * @returns {{headers: {Authorization: string, accept: string}, method}}
     */
    createOptions(method) {
        const options = {
            method,
            headers: {
                accept: "application/json",
                "Authorization": `Bearer ${this.token}`,
            }
        }

        return options
    }

    /**
     * Генерируем полный url, на основе переданных параметров
     * @param path - Тип страницы новостей, а именно everything или top-headlines
     * @param body - Параметры запроса
     */
    changeFullUrl(path, body) {
        this.fullUrl = this.baseUrl + path + this.createParamsPath(body)
    }

    /**
     * Генерируем часть url, содержащую параметры
     * @param body - Параметры запроса
     * @returns {string}
     */
    createParamsPath(body) {
        if (!body)
            return ""

        let path = "?"
        let count = 0
        for (const param in body) {
            if (body[param] === "") {
                count++
                continue
            }

            path += `${param}=${body[param]}`

            if (count < Object.keys(body).length - 1)
                path += `&`

            count++
        }

        return path
    }
}

export default NewsApi