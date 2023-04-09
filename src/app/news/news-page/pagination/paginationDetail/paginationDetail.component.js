angular.module("paginationDetail").component("paginationDetail", {
    template: `<button ng-click="$ctrl.clickPage($event)" class="p-2 bg-indigo-500 hover:bg-indigo-500/40 rounded-lg">{{$ctrl.value}}</button>`,
    controller: function PaginationDetailController() {
        this.clickPage = function ($event) {
            console.log($event.target.textContent)
        }
    },
    bindings: {
        value: "<",
    },
})