angular.module('newsFeedApp').
        config(['$routeProvider',
            function config($routeProvider) {
                $routeProvider.
                    when('/newsTopHeadlines', {
                        template: `<news-top-headlines></news-top-headlines>`
                    }).
                    when('/newsEverything', {
                        template: `<news-everything></news-everything>`
                }).
                    otherwise('/newsTopHeadlines')
            }
        ])