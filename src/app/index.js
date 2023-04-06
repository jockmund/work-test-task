import angular from "angular"
require("./news-list/news-list.module")
require("./news-list/news-list.component")
require("./index.config")


angular.module('newsFeedApp', [
    'newsList'
]);