require('./style.css')

require("angular/angular")
require("angular-route/angular-route")
require("angular-resource/angular-resource")

// Модуль и функционал Сервиса для получения списка новостей с сервера
require('../app/core/news/news.module')
require('../app/core/news/news.service')

// Модуль и компонент Одной кнопки в пагинации
require('../app/news/pagination/pagination-detail/pagination-detail.module')
require('../app/news/pagination/pagination-detail/pagination-detail.component')

// Модуль и компонент Пагинации
require('../app/news/pagination/pagination.module')
require('../app/news/pagination/pagination.component')

// Модуль и компонент Фотографии в новости
require("../app/news/news-list/news-detail/news-image/news-image.module")
require("../app/news/news-list/news-detail/news-image/news-image.component")

// Модуль и компонент Одной новости
require("../app/news/news-list/news-detail/news-detail.module")
require("../app/news/news-list/news-detail/news-detail.component")

// Модуль и компонент Списка новостей
require("../app/news/news-list/news-list.module")
require("../app/news/news-list/news-list.component")

// Модуль и компонент Одной опции select
require("../app/news/news-top-headlines/filter-line/selector/selectorDetail/selector-detail.module")
require("../app/news/news-top-headlines/filter-line/selector/selectorDetail/selector-detail.component")

// Модуль и компонент Целого select
require("../app/news/news-top-headlines/filter-line/selector/selector.module")
require("../app/news/news-top-headlines/filter-line/selector/selector.component")

// Модуль со строкой фильтрации на странице с Самыми популярными новостями
require("../app/news/news-top-headlines/filter-line/filter-line.module")
require("../app/news/news-top-headlines/filter-line/filter-line.component")

// Модуль со строкой ввода на странице со Всеми новостями
require("../app/news/news-everything/search-line/search-line.module")
require("../app/news/news-everything/search-line/search-line.component")

// Модуль и компонент страницы с Самыми популярными новостями
require("../app/news/news-top-headlines/news-top-headlines.module")
require("../app/news/news-top-headlines/news-top-headlines.component")

// Модуль и компонент страницы со Всеми новостями
require("../app/news/news-everything/news-everything.module")
require("../app/news/news-everything/news-everything.component")

// Модуль и конфигурация Приложения
require("../app/app.module")
require("../app/app.component")