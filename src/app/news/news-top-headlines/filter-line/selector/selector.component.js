angular.module('selector').component('selector', {
    template:  `<select ng-model="$ctrl.selValue" class="mx-5 w-36 h-10 rounded-lg p-1 pl-2">
                    <option value="" selected hidden>{{$ctrl.title}}</option>
                    <option value=""></option>
                    <option ng-repeat="item in $ctrl.selList" value="{{item.value}}">{{item.name}}</option>
<!--                    <selector-detail ng-repeat="item in $ctrl.selList" option="item"></selector-detail>-->
<!--                    Пытался вынести опцию в отдельный компонент, но это просто не работает. Данные не выводятся((-->
                </select>`,
    controller: function SelectorController() {
    },
    bindings: {
        selValue: '=',
        selList: '<',
        title: '@',
    },
})