import NewsApi from "../../../api/newsApi";

angular
    .module("core.news")
    .factory('News', function ($resource) {
        const newsApi = new NewsApi()

        return function getNews(path, body) {
            newsApi.changeFullUrl(path, body)

            return $resource(newsApi.fullUrl, {}, {
                get: {
                    method: "GET",
                    headers: newsApi.options.headers,
                }
            })
        }

    })
