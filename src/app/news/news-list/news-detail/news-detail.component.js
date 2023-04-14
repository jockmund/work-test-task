angular.module('newsDetail').component('newsDetail', {
    template: `<li class=" flex flex-col border border-b-gray-400 m-8 rounded-lg">       
                    <div class="bg-slate-500/50 min-h-12 content-center rounded-t-lg p-3 pl-10 text-xl font-medium">
                        {{$ctrl.news.title}}
                    </div>
                    <div class="flex m-3 justify-between px-3">
                        <p class="max-w-8xl text-lg mr-3">{{$ctrl.news.description}}</p>
                        <div class="shrink-0 mr-5 max-h-44 rounded-lg border">
                            <news-image image-url="$ctrl.imageUrl"></news-image>
                        </div>
                    </div>
                    <button ng-click="$ctrl.btnClick()" class="ml-6 h-10 mb-8 bg-indigo-500 w-24 hover:bg-indigo-500/40 rounded-lg text-xl">See..</button>
                </li>`,
    controller: function NewsDetailController($http) {
        const self = this
        this.imageUrl = ""

        /**
         * Проверяем корректность ссылки на фотографию для текущей новости
         * @param obj
         */
        this.$onChanges = function (obj) {
            this.checkImgUrl = function () {
                if (obj.news.currentValue.urlToImage === null) {
                    self.imageUrl = "https://aisol.org/img/no-image.png"

                } else {
                    self.imageUrl = obj.news.currentValue.urlToImage
                }
            }

            this.checkImgUrl()
        }

        this.btnClick = function () {
            window.open(this.news.url, '_blank')
        }

    },
    bindings: {
        news: '<',
    },
})
