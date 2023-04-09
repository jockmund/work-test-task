import NewsApi from "../../../api/newsApi";

const selCountry = require("../../../selectors-data/selectorsCountry.json")
const selCategory = require("../../../selectors-data/selectorsCategory.json")
// import "../../../selectors-data/selectorsCategory.json"
// import "../../../selectors-data/selectorsCountry.json"


angular.module('newsTopHeadlines').component('newsTopHeadlines', {
    template: `<div>
                    <div class="m-5 text-4xl">Top Headlines</div>
                    <div class="m-8 flex h-10">
                        <div class="flex text-2xl mr-3">Filters:</div>
                        <selector sel-value="$ctrl.orderCountry" sel-list="$ctrl.selectorCountries" title="'Country'"></selector>
                        <selector sel-value="$ctrl.orderCategory" sel-list="$ctrl.selectorCategories" title="'Category'"></selector>
                        <button class="bg-indigo-500 w-24 hover:bg-indigo-500/40 rounded-lg ml-3 text-xl" ng-click="$ctrl.clickBtn()">Filter</button>
                    </div>
                    <news-list news-list="$ctrl.news"></news-list>
                    <div ng-if="$ctrl.isPagination">
                        <pagination></pagination>
                    </div>
                </div>`,

    controller: function NewsTopHeadlinesController(News) {
        const self = this
        this.isPagination = false

        this.orderCountry = ""
        this.orderCategory = ""
        this.selectorCountries = selCountry
        this.selectorCategories = selCategory

        this.pageSize = 5

        this.changeNews = function (body) {
            News("top-headlines", body).get(function (data) {
                self.news = data["articles"]
                self.isPagination = true
            })
        }

        this.changeNews({
            country: "us",
            pageSize: this.pageSize,
        })


        this.clickBtn = function () {
            if (!!!this.orderCountry && !!!this.orderCategory)
                return

            this.changeNews({
                country: this.orderCountry ? this.orderCountry : "",
                category: this.orderCategory ? this.orderCategory : "",
                pageSize: this.pageSize,
            })

            if (this.news.length === 0)
                this.isPagination = false

        }
    },
})