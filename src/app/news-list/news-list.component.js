import angular from "angular";
require("./news-list.module")

angular.module('newsList').component('newsList', {
    template: `<ul>
                    <li ng-repeat="item in $ctrl.news">
                        <span>{{item.title}}</span>
                        <p>{{item.description}}</p>
                    </li>
                </ul>`,
    // templateUrl: "./news-list.template.html",
    controller: function NewsListController() {
        this.news = [
            {
                title: '123',
                description: '123'
            },
            {
                title: '456',
                description: '456'
            },
        ];
    },
})