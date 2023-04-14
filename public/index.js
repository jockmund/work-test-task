require('./style.css')

require("angular/angular")
require("angular-route/angular-route")
require("angular-resource/angular-resource")

// Модуль и функционал Сервиса для получения списка новостей с сервера
require('../src/app/core/news/news.module')
require('../src/app/core/news/news.service')

// Модуль и компонент Одной кнопки в пагинации
require('../src/app/pagination/pagination-detail/pagination-detail.module')
require('../src/app/pagination/pagination-detail/pagination-detail.component')

// Модуль и компонент Пагинации
require('../src/app/pagination/pagination.module')
require('../src/app/pagination/pagination.component')

// Модуль и компонент Фотографии в новости
require("../src/app/news/news-list/news-detail/news-image/news-image.module")
require("../src/app/news/news-list/news-detail/news-image/news-image.component")

// Модуль и компонент Одной новости
require("../src/app/news/news-list/news-detail/news-detail.module")
require("../src/app/news/news-list/news-detail/news-detail.component")

// Модуль и компонент Списка новостей
require("../src/app/news/news-list/news-list.module")
require("../src/app/news/news-list/news-list.component")

// Модуль и компонент Одной опции select
require("../src/app/news/news-top-headlines/filter-line/selector/selectorDetail/selector-detail.module")
require("../src/app/news/news-top-headlines/filter-line/selector/selectorDetail/selector-detail.component")

// Модуль и компонент Целого select
require("../src/app/news/news-top-headlines/filter-line/selector/selector.module")
require("../src/app/news/news-top-headlines/filter-line/selector/selector.component")

// Модуль со строкой фильтрации на странице с Самыми популярными новостями
require("../src/app/news/news-top-headlines/filter-line/filter-line.module")
require("../src/app/news/news-top-headlines/filter-line/filter-line.component")

// Модуль со строкой ввода на странице со Всеми новостями
require("../src/app/news/news-everything/search-line/search-line.module")
require("../src/app/news/news-everything/search-line/search-line.component")

// Модуль и компонент страницы с Самыми популярными новостями
require("../src/app/news/news-top-headlines/news-top-headlines.module")
require("../src/app/news/news-top-headlines/news-top-headlines.component")

// Модуль и компонент страницы со Всеми новостями
require("../src/app/news/news-everything/news-everything.module")
require("../src/app/news/news-everything/news-everything.component")

// Модуль и конфигурация Приложения
require("../src/app/app.module")
require("../src/app/app.component")