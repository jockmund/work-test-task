angular.module('newsDetail').component('newsDetail', {
    template:  `<div class="bg-slate-500/50 h-12 content-center rounded-t-lg p-3 pl-10 text-xl font-medium">{{item.title}}</div>
                    <div class="flex m-3 justify-between px-3 ">
                        <p class="max-w-4xl text-lg">{{item.description}}</p>
                        <div ng-switch="item.urlToImage" class="mr-5 rounded-lg border">
                        <img class="w-40 h-40 p-1" ng-switch-when="" ng-src="{{placeholderImage}}" alt=""/>
                        <img class="w-40 h-40 p-1" ng-switch-default ng-src="{{item.urlToImage}}" alt=""/>
                    </div>
                </div>`
})