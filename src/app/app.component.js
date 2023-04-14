angular.module('newsFeedApp')
    .config(['$routeProvider',
        function config($routeProvider) {
            $routeProvider.when('/newsTopHeadlines', {
                template: `<news-top-headlines news="$ctrl.news" filter-news="$ctrl.changeNews(type, params)"></news-top-headlines>`
            }).when('/newsEverything', {
                template: `<news-everything  news="$ctrl.news" search-news="$ctrl.changeNews(type, params)"></news-everything>`
            }).otherwise('/newsTopHeadlines')
        }
    ])
    .component('newsFeedApp', {
        template: `<div class="mx-5 mt-5">
                        <div class="flex border-2">
                            <div ng-class="{'bg-cyan-100/50 border-4': $ctrl.isTopHeadlines}" class="h-32 w-64 text-center hover:shadow-lg hover:bg-cyan-100/50 hover:border-solid text-xl">
                                <a class="py-12 block h-full" href="#!/newsTopHeadlines">Top Headlines</a>
                            </div>
                            <div ng-class="{'bg-cyan-100/50 border-4': $ctrl.isEverything}" class="h-32 w-64 text-center align-middle hover:shadow-lg hover:bg-cyan-100/50 hover:border-solid text-xl">
                                <a class="py-12 block h-full" href="#!/newsEverything">Everything</a>
                            </div>
                        </div>
                        <div ng-view></div>
                        <div ng-if="$ctrl.isPagination">
                            <pagination on-click="$ctrl.changePage(number)" array-length="$ctrl.totalResults" is-page-change="$ctrl.isPageChange"></pagination>
                        </div>
                    </div>`,
        controller: function NewsFeedAppController($rootScope, News) {
            this.$onInit = function () {
                this.pageSize = 5
                this.curPage = 1
                this.curPageType = ""
                this.curParams = {}
                this.totalResults = 0
                this.isPagination = false
                this.isPageChange = false
            }

            const self = this

            /**
             * Вешаем обработчик событий на переход между роутами
             */
            $rootScope.$on('$routeChangeStart', function (event, current) {
                if (current.$$route === undefined)
                    return

                const curPath = current.$$route.originalPath

                if (curPath === "/newsTopHeadlines") {
                    self.isTopHeadlines = true
                    self.isEverything = false
                } else {
                    self.isTopHeadlines = false
                    self.isEverything = true
                }
            })

            /**
             * Отправление запроса на сервер и изменение данных в зависимости от результата
             * @param type - Тип новостей: Everything или Top-headlines
             * @param params - Параметры для запроса новостей с сервера
             */
            this.changeNews = function (type, params) {
                this.curPageType = type

                if (JSON.stringify(this.curParams) !== JSON.stringify(params)) {
                    this.curPage = 1
                    this.curParams = params
                    this.isPageChange = true
                    this.news = undefined
                    this.isPagination = false
                }

                const body = {
                    pageSize: this.pageSize,
                    page: this.curPage,
                    ...params
                }

                News(type, body).get(function (data) {
                    self.news = data["articles"]
                    self.totalResults = data["totalResults"]
                    self.isPagination = self.totalResults !== 0
                })
            }

            /**
             * Изменение текущих новостей в зависимости от номера страницы
             * @param number - Номер страницы
             */
            this.changePage = function (number) {
                this.curPage = number
                this.changeNews(this.curPageType, this.curParams)
                setTimeout(() => window.scrollBy(0, -10000), 500)
            }

        }
    })