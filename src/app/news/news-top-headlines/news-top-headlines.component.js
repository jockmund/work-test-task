import NewsApi from "../../../api/newsApi";

angular.module('newsTopHeadlines').component('newsTopHeadlines', {
    template: `<div>
                    <div class="m-5 text-4xl">Top Headlines</div>
                    <p>
                        Sort by:
                        <select ng-model="$ctrl.orderCountry">
                            <option value="show" selected hidden>Страна</option>
                            <option value=""></option>
                            <option value="ru">Россия</option>
                            <option value="us">США</option>
                        </select>
                        <select ng-model="$ctrl.orderCategory">
                            <option value="show" selected hidden>Категория</option>
                            <option value=""></option>
                            <option value="business">Бизнес</option>
                            <option value="entertainment">Развлечения</option>
                        </select>
                        <button ng-model="$ctrl.btn1" ng-click="$ctrl.clickBtn()">{{"Filter"}}</button>
                    </p>
                    <ul>
                        <p ng-if="$ctrl.news.length === 0">К сожалению, с таким запросом новостей нет!</p>
                        <li ng-repeat="item in $ctrl.news" class=" flex flex-col border border-solid border-b-gray-400 m-8 rounded-lg">
                            <div class="bg-slate-500/50 h-12 content-center">{{item.title}}</div>
                            <div class="flex m-3 justify-between px-3">
                                <p>{{item.description}}</p>
                                <div ng-switch="item.urlToImage" class="">
                                    <img class="w-40 h-40" ng-switch-when="" ng-src="file!../../../public/No-Image-Placeholder.svg.png" alt=""/>
                                    <img class="w-40 h-40" ng-switch-default ng-src="{{item.urlToImage}}" alt=""/>
                                </div>
                            </div>

                        </li>
                    </ul>
                </div>`,
    // templateUrl: "news-list/news-top-headlines/news-top-headlines.template.html",
    controller: function NewsTopHeadlinesController($http) {
        var self = this

        this.pageSize = 5

        const newsApi = new NewsApi('top-headlines', "GET", {
            country: "us",
            pageSize: this.pageSize,
        })
        $http.get(newsApi.fullUrl, newsApi.options).then(function (response) {
            self.news = response.data["articles"];
        });

        this.clickBtn = function () {
            if (!!!this.orderCountry && !!!this.orderCategory)
                return

            newsApi.changeFullUrl({
                country: this.orderCountry ? this.orderCountry : "",
                category: this.orderCategory ? this.orderCategory : "",
                pageSize: this.pageSize,
            })

            $http.get(newsApi.fullUrl, newsApi.options)
                .then(function (response) {
                    if (response.data.status) {
                        self.news = response.data["articles"];
                    }
                })
                .catch(err => {
                });

        }
    },
})