angular.module("pagination").component("pagination", {
    template: `<div class="flex">
                    <pagination-detail ng-repeat="btn in $ctrl.array" value="btn"></pagination-detail>
                </div>`,
    controller: function PaginationController() {
        this.array = ["<<", "1", "2", "3", "4", "5", "6", "7", "8", "9", ">>"]
    },

})