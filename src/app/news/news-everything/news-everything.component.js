angular.module('newsEverything').component('newsEverything', {
    template: `<div>
                    <div class="m-5 text-4xl ">Everything</div>
                    <search-line on-search="$ctrl.clickBtn(query)"></search-line>
                    <news-list news-list="$ctrl.news"></news-list>
                </div>`,
    controller: function NewsEverythingController() {
        const self = this
        this.$onInit = function () {
            this.type = "everything"
            const params = {
                q: "today"
            }
            this.searchNews({type: this.type, params: params})
        }

        this.clickBtn = function (query) {
            const params = {
                q: query
            }

            this.searchNews({type: this.type, params: params})
        }
    },
    bindings: {
        news: "<",
        searchNews: "&",
    },
})