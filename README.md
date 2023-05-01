## Тестовое задание

### Обзор:
+ [Описание ТЗ](#descr-task);
+ [Запуск проекта в ide](#start);
+ [Стек технологий](#stack);
+ [Результат](#result);
+ [Изображения проекта](#image);

### <a name="descr-task"></a> 📋 1. Описание ТЗ:
 + Написать SPA (Single Page Application) при помощи библиотеки React.
  + Стилистика и внешнее оформление на усмотрение.
  + Реализовать создание задачи (задавать имя, статус, дата создания).
  + Сохранение состояния задачи по нажатию на чекбокс / кнопку. 
  + Сохранение состояния приложения после перезагрузки страницы браузера.
  + Реализовать фильтрацию по статусу задачи и приоритету.

#### 2. Основные критерии оценки:
  + Приложение должно быть написано на React.
  +	Язык программирования TypeScript.
  + Использовать стейт менеджер Redux Toolkit.
  + Не использовать дополнительные библиотеки по типу Lodash.

#### 3. Дополнительный критерий (необязательный):
  + Реализовать и подключить собственный API (JSON-server).
  + Реализовать сохранение фильтрации.

### <a name="start"></a> 🛠️ Запуск проекта в ide:
Команды:
  + `yarn` - установит все зависимости.
  + `yarn server` - запускает локальную БД db.json.
  + `yarn start` - запускает приложение в режиме разработки.
  + `yarn build` - собирает файлы проекта в один каталог.


### <a name="stack"></a> 🚀 Стек технологий:
    Vite - инструмент сборки фронтенд-приложений
    TypeScript - типизированный ЯП
    ReactJs v18 - JavaScript библиотека
    Redux Toolkit - стейт менеджер
    React Hooks - хуки
    React Router dom - библиотека маршрутизации
    Axios - выполнение HTTP-запросов
    ESLint - инструмент анализа кода
    Tailwind CSS - CSS-фреймворк для стилизации
    JSON-server - локальный REST API
    Yarn - пакетный менеджер

### <a name="result"></a> 🎉 Результат:
  + Стилистика ✅
  + Получение, добавление, редактирование, удаление задач ✅
  + Фильтрация задач ✅
  + TypeScript ✅
  + RTK, createAsyncThunk ✅
  + Дополнительно:
    + JSON-server ✅
    + Сохранение параметров фильтрации в URL ✅
    + http сервисы (методы GET, POST, PATCH, DELETE) ✅
    + Доступность (управление сайтом с помощью клавиатуры, клавиша tab) ✅
    + ESlint ✅
    + Структура папок и файлов ✅


### <a name="image"></a> 🖼️ Изображение
<p align="center">
  <img src="https://github.com/AlexDyatlov/To-Do-List/blob/main/src/assets/interface.png">
</p>