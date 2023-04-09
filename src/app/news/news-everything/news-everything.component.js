import NewsApi from "../../../api/newsApi";
import placeholderImage from "../../../public/No-Image-Placeholder.png"

angular.module('newsEverything').component('newsEverything', {
    template: `<div>
                    <div class="m-5 text-4xl ">Everything</div>
                    <div class="m-8 flex h-10">
                        <div class="flex text-2xl mr-3">Search:</div>
                        <input ng-model="$ctrl.query" ng-keyup="$ctrl.pressEnter($event)" class="border p-2 rounded-lg" placeholder="Enter your query"/>
                        <button ng-click="$ctrl.clickBtn()" class="bg-indigo-500 w-24 hover:bg-indigo-500/40 rounded-lg ml-3 text-xl">Search</button>
                    </div>
                    <news-list news-list="$ctrl.news"></news-list>
                    <div ng-if="$ctrl.isPagination">
                        <pagination></pagination>
                    </div>
                </div>`,
    controller: function NewsEverythingController(News) {
        const self = this
        this.isPagination = false

        this.pageSize = 5

        this.changeNews = function (body) {
            News("everything", body).get(function (data) {
                self.news = data["articles"]

                self.isPagination = data["articles"].length !== 0
            })
        }

        this.changeNews({
            q: "today",
            pageSize: this.pageSize,
        })

        this.pressEnter = function (event) {
            if (event.keyCode === 13)
                this.clickBtn()
        }

        this.clickBtn = function () {
            if (!!!this.query)
                return

            this.changeNews({
                q: this.query,
                pageSize: this.pageSize,
            })
        }
    }
})