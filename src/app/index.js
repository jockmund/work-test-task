require('../public/style.css')

require("../../node_modules/angular/angular")
require("../../node_modules/angular-route/angular-route")

require("./news/news-top-headlines/news-top-headlines.module")
require("./news/news-top-headlines/news-top-headlines.component")

require("./news/news-everything/news-everything.module")
require("./news/news-everything/news-everything.component")

angular.module('newsFeedApp', [
    'ngRoute',
    'newsTopHeadlines',
    'newsEverything'
]);

require("./index.config")