angular.module("pagination").component("pagination", {
    template: `<div class="flex justify-center">
                    <pagination-detail on-click="$ctrl.clickBtn(btn)" cur-page="$ctrl.curPage" ng-repeat="btn in $ctrl.pagArray" value="btn"></pagination-detail>
                </div>`,
    controller: function PaginationController() {
        this.$onInit = function () {
            this.curPage = 1
            this.pageSize = 5
            this.maxPagesToShow = Math.ceil(100 / this.pageSize)
            this.pagArray = this.createArray()
        }

        const self = this

        /**
         * При изменении списка новостей на новый с другими параметрами, создаем новый массив с элементами пагинации
         * @param changesObj
         */
        this.$onChanges = function (changesObj) {
            if ("arrayLength" in changesObj && this.isPageChange) {
                this.curPage = 1
                this.pagArray = this.createArray()
                this.isPageChange = false
            }
        }

        /**
         * Создаем массив с элементами пагинации для определенного количества страниц
         * @returns {string[]} - Массив с элементами пагинации
         */
        this.createArray = function () {
            const length = this.arrayLength
            let resArray = ["<<", "<"]
            function getArray(length) {
                for (let i = 2; i < length + 1; i++)
                    resArray.push(i - 1)
            }
            if (length > this.pageSize * this.maxPagesToShow)
                getArray(this.maxPagesToShow / 2 + 1)
            else{
                const newLength = Math.ceil(length / this.pageSize)
                getArray(newLength + 1)
            }
            resArray.push(">")
            return resArray
        }

        /**
         * Изменяем элементы массива пагинации
         * @param type - Знак + или -, в зависимости от которого значения будут либо уменьшаться, либо увеличиваться на единицу
         */
        this.changeArray = function (type) {
            if (this.arrayLength / this.pageSize < this.maxPagesToShow / 2 + 1)
                return

            const maxPages = Math.ceil(this.arrayLength / this.pageSize)
            for (let i = 2; i < this.pagArray.length - 1; i++) {
                if (type === "+") {
                    const res = this.pagArray[i] + 1
                    if (res > maxPages)
                        return

                    this.pagArray[i] = res
                }
                else {
                    const res = this.pagArray[i] - 1
                    if (res === 0)
                        return

                    this.pagArray[i] = res
                }
            }
        }

        /**
         * Определяем какая кнопка была нажата и в соответствии с этим изменяем массив с элементами пагинации
         * @param btn - Нажатая кнопка в пагинации
         */
        this.clickBtn = function (btn) {
            let resPage
            switch (btn) {
                case "<<":
                    this.onClick({number: 1})

                    this.curPage = 1
                    this.pagArray = this.createArray()
                    break
                case ">":
                    resPage = this.curPage + 1
                    if (resPage > this.maxPagesToShow) {
                        alert("Only 100 news available!")
                        return
                    }
                    if (resPage > Math.ceil(this.arrayLength / this.pageSize))
                        return
                    this.curPage = resPage
                    this.changeArray("+")

                    this.onClick({number: this.curPage})
                    break
                case "<":
                    resPage = this.curPage - 1
                    if (resPage <= 0)
                        return

                    this.curPage = resPage
                    this.changeArray("-")
                    this.onClick({number: this.curPage})
                    break
                default:
                    const num = Number(btn)
                    if (num > this.curPage) {
                        if (num > this.maxPagesToShow) {
                            alert("Only 100 news available!")
                            return
                        }
                        this.curPage = num
                        this.changeArray("+")
                    } else if (num < this.curPage) {
                        this.curPage = num
                        this.changeArray("-")
                    }
                    this.onClick({number: btn})
            }
        }
    },
    bindings: {
        onClick: "&",
        arrayLength: "<",
        isPageChange: "=",
    }

})