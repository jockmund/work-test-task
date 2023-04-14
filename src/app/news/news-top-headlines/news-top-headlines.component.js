angular.module('newsTopHeadlines').component('newsTopHeadlines', {
    template: `<div>
                    <div class="m-5 text-4xl">Top Headlines</div>
                    <filter-line on-filter="$ctrl.clickFilter(country, category)"></filter-line>
                    <news-list news-list="$ctrl.news"></news-list>
                </div>`,

    controller: function NewsTopHeadlinesController() {
        const self = this
        this.$onInit = function () {
            this.type = "top-headlines"
            const params = {
                country: "us",
                category: "",
            }
            this.filterNews({type: this.type, params: params})
        }

        this.clickFilter = function (country, category) {
            const params = {
                country: country,
                category: category,
            }

            this.filterNews({type: this.type, params: params})
        }
    },
    bindings: {
        news: "=",
        filterNews: "&",
    },
})