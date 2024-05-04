GitHub Pages: https://lifeisperfect.github.io/js-basic-lesson-17/

Данный репозиторий является учебным проектом сайта прогноза погоды.

В ходе своей работы сайт взаимодействует со следующими сторонними сервисами через их API:

- [yandex-geocoder-api](https://yandex.ru/maps-api/products/geocoder-api) - для конвертации поискового запроса пользователя в географические координаты;
- [openweather](https://openweathermap.org) - для получения информации о погоде по заданным географическим координатам;
- [yandex-static-map](https://yandex.ru/maps-api/products/static-api) - для получения изображения с фрагментом карты по географическим координатам;

Для проекта была использована методология БЭМ. Выделяется 5 БЭМ-блоков, соответствующих основным структурным элементам страницы:

- search-input - строка запроса для указания интересующей местности;
- search-button - кнопка поиска;
- weather - информация о погоде в интересующей местности;
- map - часть страницы, содержащая карту интересующей местности;
- history - история пользовательских запросов;

Стркутура файлов в репозитории соответствует указанным выше БЭМ-блокам: JS- и CSS-код каждого БЭМ-блока располагается в отдельной поддиректории.

Для хранения истории запросов используется localStorage.

Актуальный статус прохождения линтера и тестов (пока отсутствуют) в master-ветке: [![PR Sanity Check](https://github.com/LifeIsPerfect/js-basic-lesson-17/actions/workflows/sanity-check.yml/badge.svg)](https://github.com/LifeIsPerfect/js-basic-lesson-17/actions/workflows/sanity-check.yml)