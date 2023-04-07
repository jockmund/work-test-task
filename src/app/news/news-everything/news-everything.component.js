import NewsApi from "../../../api/newsApi";
import placeholderImage from "../../../public/No-Image-Placeholder.png"

angular.module('newsEverything').component('newsEverything', {
    template: `<div>
                    <div class="m-5 text-4xl ">Everything</div>
                    <div class="m-8 flex">
                        <div class="flex text-2xl mr-3">Search:</div>
                        <input ng-model="$ctrl.query" ng-keyup="$ctrl.pressEnter($event)" class="border p-2 rounded-lg" placeholder="Enter your query"/>
                        <button ng-click="$ctrl.clickBtn()" class="bg-indigo-500 w-24 hover:bg-indigo-500/40 rounded-lg ml-3 text-xl">{{"Filter"}}</button>
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
                    <div ng-if="$ctrl.news.length !== 0">
                        
                    </div>
                </div>`,
    controller: function NewsEverythingController($http) {
        var self = this

        this.pageSize = 5

        const newsApi = new NewsApi("everything", "GET", {
            q: "today",
            pageSize: this.pageSize,
        })
        $http.get(newsApi.fullUrl, newsApi.options).then(function (response) {
            console.log(response.data["articles"].length)
            self.news = response.data["articles"]
        })

        this.pressEnter = function (event) {
            if (event.keyCode === 13)
                this.clickBtn()
        }

        this.clickBtn = function () {
            if (!!!this.query)
                return

            newsApi.changeFullUrl({
                q: this.query,
                pageSize: this.pageSize,
            })

            $http.get(newsApi.fullUrl, newsApi.options)
                .then(function (response) {
                    if (response.data.status) {
                        self.news = response.data["articles"]
                    }
                })
                .catch(err => {

                })
        }
    }
})