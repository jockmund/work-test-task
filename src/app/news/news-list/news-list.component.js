angular.module('newsList').component('newsList', {
    template: `<ul>
                    <p ng-if="$ctrl.checkNews()" class="text-2xl m-8">Unfortunately, there is no news with this request!</p>
                    <news-detail ng-repeat="item in $ctrl.newsList" news="item"></news-detail>
                </ul>`,
    controller: function NewsListController() {
        /**
         * Возвращается логическое значение проверки пустой ли список сновостей
         * @returns {boolean}
         */
        this.checkNews = function () {
            return !!(this.newsList && this.newsList.length === 0)
        }
    },
    bindings: {
        newsList: '<',
    }
})