require('../public/style.css')

require("../../node_modules/angular/angular")
require("../../node_modules/angular-route/angular-route")
require("../../node_modules/angular-resource/angular-resource")

// Модуль и функционал Сервиса для получения списка новостей с сервера
require('./core/news/news.module')
require('./core/news/news.service')

// Модуль и компонент Одной кнопки из 11 в пагинации элемента в пагинации
require('./news/news-page/pagination/paginationDetail/paginationDetail.module')
require('./news/news-page/pagination/paginationDetail/paginationDetail.component')

// Модуль и компонент Пагинации
require('./news/news-page/pagination/pagination.module')
require('./news/news-page/pagination/pagination.component')

// Модуль и компонент Одной новости
require("./news/news-page/news-list/news-detail/news-detail.module")
require("./news/news-page/news-list/news-detail/news-detail.component")

// Модуль и компонент Списка новостей
require("./news/news-page/news-list/news-list.module")
require("./news/news-page/news-list/news-list.component")

// Модуль и компонент Одной опции select
require("./news/news-top-headlines/selectors/selectorDetail/selector-detail.module")
require("./news/news-top-headlines/selectors/selectorDetail/selector-detail.component")

// Модуль и компонент Целого select
require("./news/news-top-headlines/selectors/selector.module")
require("./news/news-top-headlines/selectors/selector.component")

// Модуль и компонент страницы с Самыми популярными новостями
require("./news/news-top-headlines/news-top-headlines.module")
require("./news/news-top-headlines/news-top-headlines.component")

// Модуль и компонент страницы со Всеми новостями
require("./news/news-everything/news-everything.module")
require("./news/news-everything/news-everything.component")

// Модуль и конфигурация Приложения
require("./app.module")
require("./app.component")