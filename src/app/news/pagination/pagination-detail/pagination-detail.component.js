angular.module("paginationDetail").component("paginationDetail", {
    template: `<button ng-click="$ctrl.clickPage($event)" ng-class="{'bg-indigo-500/40': $ctrl.checkValueForAddClass()}" class="p-2 bg-indigo-500 w-12 m-0.5 hover:bg-indigo-500/40 rounded-lg">{{$ctrl.value}}</button>`,
    controller: function PaginationDetailController() {
        this.checkValueForAddClass = function () {
            return this.value === this.curPage
        }

        this.clickPage = function ($event) {
            this.onClick({btn: $event.target.textContent})
        }
    },
    bindings: {
        value: "<",
        onClick: "&",
        curPage: "<",
    },
})