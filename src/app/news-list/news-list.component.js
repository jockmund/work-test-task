import angular from "angular";
import NewsApi from "../../api/newsApi";

require("./news-list.module")

angular.module('newsList').component('newsList', {
    template: `<div>
                    Search: <input ng-model="$ctrl.query" />
                    <p>
                        Sort by:
                        <select ng-model="$ctrl.orderCountry">
                            <option value="custom" disabled selected hidden>Страна</option>
                            <option value="ru">Россия</option>
                            <option value="us">США</option>
                        </select>
                        <select ng-model="$ctrl.orderCategory">
                            <option value="custom" disabled selected hidden>Категория</option>
                            <option value="business">Бизнес</option>
                            <option value="entertainment">Развлечения</option>
                        </select>
                        <button ng-model="$ctrl.btn1" ng-click="$ctrl.clickBtn()">{{"Filter"}}</button>
                    </p>
                    <ul>
                        <li ng-repeat="item in $ctrl.news">
                            <h3>{{item.title}}</h3>
                            <span>{{item.author}}</span>
                            <p>{{item.description}}</p>
                            <img ng-src="{{item.urlToImage}}" alt="{{item.title}}"/>
                        </li>
                    </ul>
                </div>`,
    // templateUrl: "./news-list.template.html",
    controller: function NewsListController($http) {
        var self = this

        this.pageSize = 5
        const newsApi = new NewsApi('top-headlines', "GET", {
            country: "ru",
            pageSize: this.pageSize,
        })
        $http.get(newsApi.fullUrl, newsApi.options).then(function (response) {
            console.log(response.data["articles"])
            self.news = response.data["articles"];
        });

        this.orderCountry = "Страна"
        this.orderCategory = "Категория"

        this.query = "t68t6t"

        this.clickBtn = function () {
            newsApi.changeFullUrl({
                country: this.orderCountry ? this.orderCountry : "",
                category: this.orderCategory ? this.orderCategory : "",
                pageSize: this.pageSize,
            })

            $http.get(newsApi.fullUrl, newsApi.options)
                .then(function (response) {
                    console.log(response.data["articles"])
                    if (response.data.status) {
                        self.news = response.data["articles"];
                    }
                })
                .catch(err => {
                });

        }
    },
})