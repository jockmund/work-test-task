import NewsApi from "../../../api/newsApi";

import placeholderImage from "../../../public/No-Image-Placeholder.png"

angular.module('newsTopHeadlines').component('newsTopHeadlines', {
    template: `<div>
                    <div class="m-5 text-4xl">Top Headlines</div>
                    <div class="m-8 flex">
                        <div class="flex text-2xl mr-3">Filters:</div>
                        <select ng-model="$ctrl.orderCountry" class="mx-5 w-36 rounded-lg">
                            <option value="show" selected hidden>Страна</option>
                            <option value=""></option>
                            <option value="ru">Россия</option>
                            <option value="us">США</option>
                        </select>
                        <select ng-model="$ctrl.orderCategory" class="mx-5 w-36 rounded-lg">
                            <option value="show" selected hidden>Категория</option>
                            <option value=""></option>
                            <option value="business">Бизнес</option>
                            <option value="entertainment">Развлечения</option>
                        </select>
                        <button class="bg-indigo-500 w-24 hover:bg-indigo-500/40 rounded-lg ml-3 text-xl" ng-click="$ctrl.clickBtn()">{{"Filter"}}</button>
                    </div>
                    <ul>
                        <p ng-if="$ctrl.news.length === 0" class="text-2xl m-8">Unfortunately, there is no news with this request!</p>
                        <li ng-repeat="item in $ctrl.news" class=" flex flex-col border border-b-gray-400 m-8 rounded-lg">
                            <div class="bg-slate-500/50 h-12 content-center rounded-t-lg p-3 pl-10 text-xl font-medium">{{item.title}}</div>
                            <div class="flex m-3 justify-between px-3 ">
                                <p class="max-w-4xl text-lg">{{item.description}}</p>
                                <div ng-switch="item.urlToImage" class="mr-5 rounded-lg border">
                                    <img class="w-40 h-40 p-1" ng-switch-when="" ng-src="{{placeholderImage}}" alt=""/>
                                    <img class="w-40 h-40 p-1" ng-switch-default ng-src="{{item.urlToImage}}" alt=""/>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>`,
    // templateUrl: "news/news-top-headlines/news-top-headlines.template.html",
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