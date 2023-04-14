angular.module("filterLine").component("filterLine", {
    template: `<div class="m-8 flex h-10">
                    <div class="flex text-2xl mr-3">Filters:</div>
                    <selector sel-value="$ctrl.country" sel-list="$ctrl.selectorCountries" title="Country"></selector>
                    <selector sel-value="$ctrl.category" sel-list="$ctrl.selectorCategories" title="Category"></selector>
                    <button class="bg-indigo-500 w-24 hover:bg-indigo-500/40 rounded-lg ml-3 text-xl" ng-click="$ctrl.clickFilter()">Filter</button>
                </div>`,

    controller: function FilterLineController($http) {
        const self = this
        /**
         * Инициализируем начальные значения, а именно список категорий и городов для select из json файлов
         */
        this.$onInit = function () {
            const selCountry = require("../../../../selectors-data/selectorsCountry.json")
            const selCategory = require("../../../../selectors-data/selectorsCategory.json")
            this.selectorCountries = selCountry
            this.selectorCategories = selCategory
            this.country = ""
            this.category = ""
        }

        /**
         * Вызываем событие родительского компонента для обновления новостей, передавая текущий выбранный город и категорию
         */
        this.clickFilter = function () {
            if (!!!this.country && !!!this.category)
                return

            this.onFilter({country: this.country, category: this.category})
        }
    },
    bindings: {
        onFilter: "&",
    }

})