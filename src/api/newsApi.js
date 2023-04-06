const API_KEY = "561db5a909804abab0aa80a5158a6cd1"

class NewsApi {
    constructor(path, method, body) {
        this.token = API_KEY
        this.baseUrl = `https://newsapi.org/v2/${path}`
        this.options = this.createOptions(method)
        this.changeFullUrl(body)
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

    changeFullUrl(body) {
        this.fullUrl =  this.baseUrl + this.createFullPath(body)
    }

    createFullPath(body) {
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