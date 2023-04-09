angular.module('selectorDetail').component('selectorDetail', {
    template: `<option value="{{$ctrl.sel.value}}">{{$ctrl.sel.name}}</option>`,
    controller: function SelectorDetailController() {

    },
    bindings: {
        sel: '<',
    }
})