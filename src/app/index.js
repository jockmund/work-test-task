import angular from "angular"
require("./news-list/news-list.module")
require("./news-list/news-list.component")

angular.module('newsFeedApp', [
    'newsList'
]);