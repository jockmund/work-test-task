import NewsApi from "../../../api/newsApi";

angular
    .module("core.news")
    .factory('News', function ($resource) {
        const newsApi = new NewsApi()

        return function getNews(path, body) {
            switch (path) {
                case "everything":
                    newsApi.changeFullUrl(path, body)
                    break
                case "top-headlines":
                    newsApi.changeFullUrl(path, body)
                    break
            }

            return $resource(newsApi.fullUrl, {}, {
                get: {
                    method: "GET",
                    headers: newsApi.options.headers,
                }
            })
        }

    })
