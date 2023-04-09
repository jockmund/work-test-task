angular.module('selector').component('selector', {
    template:  `<select ng-model="$ctrl.selValue" class="mx-5 w-36 rounded-lg">
                    <option value="show" selected hidden>{{$ctrl.title}}</option>
                    <option value=""></option>
                    <selector-detail ng-repeat="item in $ctrl.selList" sel="item"></selector-detail>
                </select>`,
    controller: function SelectorController() {
    },
    bindings: {
        selValue: '<',
        selList: '=',
        title: '=',
    },
})