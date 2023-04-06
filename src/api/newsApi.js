const API_KEY = "561db5a909804abab0aa80a5158a6cd1"

class NewsApi {
    constructor() {
        this.token = API_KEY
        this.baseUrl = "https://newsapi.org/v2/"
    }

    async send(path, method, body) {
        const options = this.createOptions(method)

        const params = body ? this.createParams(body) : ""

        const res = await fetch(this.baseUrl + path + params, options)
        let data

        const contentType = res.headers.get("content-type")

        if (contentType?.startsWith("application/json"))
            data = await res.json();
        else
            data = await res.text();

        return {
            status: res.ok,
            message: res.ok ? "ok" : data.message || data.detail,
            data
        }
    }

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

    createParams(body) {
        let path = "?"
        let count = 0
        for (const param in body) {
            path += `${param}=${body[param]}`
            if (count < body.length - 1)
                path += `&`

            count++
        }

        return path
    }
}

export default NewsApi