// const placeholderImage =  require("../../../../public/No-Image-Placeholder.png")

angular.module('newsDetail').component('newsDetail', {
    template:  `<li class=" flex flex-col border border-b-gray-400 m-8 rounded-lg">       
                    <div class="bg-slate-500/50 h-12 content-center rounded-t-lg p-3 pl-10 text-xl font-medium">
                        {{$ctrl.news.title}}
                    </div>
                    <div class="flex m-3 justify-between px-3 ">
                        <p class="max-w-4xl text-lg">{{$ctrl.news.description}}</p>
                        <div class="mr-5 rounded-lg border">
                            <img class="w-40 h-40 p-1" ng-src="{{$ctrl.news.urlToImage}}" alt=""/>
                        </div>
                    </div>
                </li>`,
    controller: function NewsDetailController() {

    },
    bindings: {
        news: '<'
    },
})

/*
                        <div ng-switch="$ctrl.news.urlToImage" class="mr-5 rounded-lg border">
                            <img class="w-40 h-40 p-1" ng-switch-when="" src={} alt=""/>
                            <img class="w-40 h-40 p-1" ng-switch-default ng-src="{{$ctrl.news.urlToImage}}" alt=""/>
                        </div>
 */