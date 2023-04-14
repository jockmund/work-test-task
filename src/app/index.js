require('../public/style.css')

require("../../node_modules/angular/angular")
require("../../node_modules/angular-route/angular-route")
require("../../node_modules/angular-resource/angular-resource")

// Модуль и функционал Сервиса для получения списка новостей с сервера
require('./core/news/news.module')
require('./core/news/news.service')

// Модуль и компонент Одной кнопки в пагинации
require('./news/pagination/pagination-detail/pagination-detail.module')
require('./news/pagination/pagination-detail/pagination-detail.component')

// Модуль и компонент Пагинации
require('./news/pagination/pagination.module')
require('./news/pagination/pagination.component')

// Модуль и компонент Фотографии в новости
require("./news/news-list/news-detail/news-image/news-image.module")
require("./news/news-list/news-detail/news-image/news-image.component")

// Модуль и компонент Одной новости
require("./news/news-list/news-detail/news-detail.module")
require("./news/news-list/news-detail/news-detail.component")

// Модуль и компонент Списка новостей
require("./news/news-list/news-list.module")
require("./news/news-list/news-list.component")

// Модуль и компонент Одной опции select
require("./news/news-top-headlines/filter-line/selector/selectorDetail/selector-detail.module")
require("./news/news-top-headlines/filter-line/selector/selectorDetail/selector-detail.component")

// Модуль и компонент Целого select
require("./news/news-top-headlines/filter-line/selector/selector.module")
require("./news/news-top-headlines/filter-line/selector/selector.component")

// Модуль со строкой фильтрации на странице с Самыми популярными новостями
require("./news/news-top-headlines/filter-line/filter-line.module")
require("./news/news-top-headlines/filter-line/filter-line.component")

// Модуль со строкой ввода на странице со Всеми новостями
require("./news/news-everything/search-line/search-line.module")
require("./news/news-everything/search-line/search-line.component")

// Модуль и компонент страницы с Самыми популярными новостями
require("./news/news-top-headlines/news-top-headlines.module")
require("./news/news-top-headlines/news-top-headlines.component")

// Модуль и компонент страницы со Всеми новостями
require("./news/news-everything/news-everything.module")
require("./news/news-everything/news-everything.component")

// Модуль и конфигурация Приложения
require("./app.module")
require("./app.component")