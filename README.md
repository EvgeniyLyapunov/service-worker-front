# service-worker-front

[![Build status](https://ci.appveyor.com/api/projects/status/1kot5r8l3n0tlw2o?svg=true)](https://ci.appveyor.com/project/EvgeniyLyapunov/service-worker-front)

[👀 you can see it here](https://evgeniylyapunov.github.io/service-worker-front/)

Мини-веб-приложение, которое по кнопке "обновить" обращается к мини-сервису [👀 see it here](https://github.com/EvgeniyLyapunov/servise-worker-back)
Получает данные и выводит их на страницу. Сервер отдаёт данные с задержкой от 0 до 5 секунд. Первое обращение, которое включает так же запуск сервиса, занимает около минуты.

При первом запуске приложение создаёт кэш, и при дальнейшей работе изпользует скелетон и фолбэк-картинку из кэша.
Собственно, на этом идея и функционал всё! 🔥🔥🔥
