angular.module('newsList').component('newsList', {
    template:  `<ul>
                    <p ng-if="$ctrl.news.length === 0" class="text-2xl m-8">Unfortunately, there is no news with this request!</p>
                    <li ng-repeat="item in $ctrl.news" class=" flex flex-col border border-b-gray-400 m-8 rounded-lg">
                        
                    </li>
                </ul>`,
    controller: function NewsListController($http) {

    }
})