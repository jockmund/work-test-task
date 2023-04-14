angular.module("newsImage").component("newsImage", {
    template: `<img class="w-40 h-40 p-1" alt="" ng-src="{{$ctrl.imgUrl}}"/>`,
    controller: function NewsImageController() {
        const self = this
        this.$onChanges = function (obj) {
            if (obj.imageUrl.currentValue !== "") {
                self.imgUrl = obj.imageUrl.currentValue
            }
        }
    },
    bindings: {
        imageUrl: "<",
        key: "=",
    }
})