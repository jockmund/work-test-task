angular.module('newsFeedApp')
    .config(['$routeProvider',
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
    .component('newsFeedApp', {
        template: `<div ng-app = "newsFeedApp" class="mx-5 mt-5">
                        <div class="flex border-2">
                            <div class="h-32 w-64 text-center hover:shadow-lg hover:bg-cyan-100/50 hover:border-solid text-xl">
                                <a class="py-12 block h-full" href="#!/newsTopHeadlines">Top Headlines</a>
                            </div>
                            <div class="h-32 w-64 text-center align-middle hover:shadow-lg hover:bg-cyan-100/50 hover:border-solid text-xl">
                                <a class="py-12 block h-full" href="#!/newsEverything">Everything</a>
                            </div>
                        </div>
                        <div ng-view></div>
                    </div>`,
        controller: function NewsFeedAppController($routeParams) {
        }
    })