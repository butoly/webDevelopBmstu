# Лабораторная работа №1. Изучение протокола HTTP.

### Запрос OPTIONS

Используется для описание параметров соединения

| URL                   | Status Codes           |
| :-------------------  | :-------------------   |
| http://mail.ru        | 200 OK                 |
| http://ya.ru          | 403 Forbidden          |
| www.rambler.ru        | 403 Forbidden          |
| https://www.google.ru | 405 Method Not Allowed |
| https://github.com    | 404 Not Found          |
| www.apple.com         | 200 OK                 |

>Следует заметить, что по умолчанию Postman использует автоматическое перенаправление. Поэтому в случаи mail.ru мы получаем 200 статус вместо 301

### Запрос HEAD

Используется для запроса содержимого указанного ресурса, при этом в ответе сервера отсутсвует тело.

| URL                   | Status Codes           |
| :-------------------  | :-------------------   |
| vk.com                | 418 I'm teapot         |
| www.apple.com         | 301 Moved Permanently  |
| www.msn.com           | 302 Found bnn          |

### Запрос GET

Используется для запроса содержимого указанного ресурса.

| URL                   | Status Codes           |
| :-------------------  | :-------------------   |
| www.yandex.ru         | 302 Found              |
| www.apple.com         | 301 Moved Permanently  |
| www.google.com        | 200 OK                 |

### Запрос POST

Применяется для передачи пользовательских данных заданному ресурсу.

| URL                   | Status Codes           |
| :-------------------  | :-------------------   |
| www.yandex.ru         | 302 Found              |
| www.apple.com         | 301 Moved Permanently  |
| www.google.com        | 405 Method not Allowed |

### Работа с VK API

##### Получение списка факультетов университета.

https://api.vk.com/method/database.getFaculties?university_id=ID&access_token=TOKEN&v=5.102

##### Получение Аватара пользователя

https://api.vk.com/method/users.get?users_id=ID&fields=photo_max_orig&access_token=TOKEN&v=5.102

##### Оставить пост

https://api.vk.com/method/wall.post?owner_id=ID&access_token=TOKEN&v=5.102