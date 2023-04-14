angular.module("searchLine").component("searchLine", {
    template: `<div class="m-8 flex h-10">
                    <div class="flex text-2xl mr-3">Search:</div>
                    <input ng-model="$ctrl.query" ng-keyup="$ctrl.pressEnter($event)" class="border p-2 rounded-lg" placeholder="Enter your query"/>
                    <button ng-click="$ctrl.clickBtn()" class="bg-indigo-500 w-24 hover:bg-indigo-500/40 rounded-lg ml-3 text-xl">Search</button>
                </div>`,
    controller: function SearchLineController() {
        this.query = ""

        /**
         * Вызываем событие родительского компонента для обновления новостей, передавая текущую строку с введенной новостью
         */
        this.clickBtn = function () {
            if (!!!this.query)
                return

            this.onSearch({query: this.query})
        }

        this.pressEnter = function (event) {
            if (event.keyCode !== 13)
                return

            this.clickBtn()
        }
    },
    bindings: {
        onSearch: "&",
    },
})