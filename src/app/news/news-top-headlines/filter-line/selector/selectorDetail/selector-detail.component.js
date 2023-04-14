angular.module('selectorDetail').component('selectorDetail', {
    template: `<option value="$ctrl.option.value">{{$ctrl.option.name}}</option>`,
    controller: function SelectorDetailController() {
    },
    bindings: {
        option: '<',
    }
})