angular.module('newsList').component('newsList', {
    template:  `<ul>
                    <p ng-if="$ctrl.newsList.length === 0" class="text-2xl m-8">Unfortunately, there is no news with this request!</p>
                    <news-detail ng-repeat="item in $ctrl.newsList" news="item"></news-detail>
                </ul>`,
    controller: function NewsListController() {
    },
    bindings: {
        newsList: '<'
    }
})