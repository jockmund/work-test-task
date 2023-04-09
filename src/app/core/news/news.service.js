import NewsApi from "../../../api/newsApi";

angular
    .module("core.news")
    .factory('News', function ($http, $resource) {
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

            // return $http.get(newsApi.fullUrl, newsApi.options)
            //     .then(function (response) {
            //         if (response.data.status) {
            //             return response.data["articles"]
            //         }
            //     }).then(function (data) {
            //         return data
            //     }).catch(err => {
            //
            //     })

            return $resource(newsApi.fullUrl, {}, {
                get: {
                    method: "GET",
                    headers: newsApi.options.headers,
                }
            })
        }

    })
