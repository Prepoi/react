Описание проекта

Это приложение на React с TypeScript демонстрирует полный цикл CRUD-операций (Create, Read, Update, Delete) для управления персонажами. В качестве эмуляции работы с API используется локальныый JSON Server.

🛠 Технологии

React (v18+)
TypeScript
JSON Server (имитация работы с API)
React Router (навигация)
Bootstrap (стилизация карусели)
Vite (сборка проекта)

✨ Функционал

Получение списка персонажей (GET)
Добавление нового персонажа (POST)
Редактирование существующего персонажа (PUT)
Удаление персонажа (DELETE)
Интерактивная карусель для просмотра

🚀 Установка и запуск

Клонируйте репозиторий:
git clone https://github.com/Prepoi/react/tree/2bb8717c1cfd29fbd27a312ea84a981654a6af7e/project/my-react-app
cd my-react-app

Установите зависимости:
npm install
Запустите JSON Server (в отдельном терминале):
json-server --watch db.json --port 3000

Запустите React-приложение:
npm run dev

Откройте в браузере:
http://localhost:5173

Для остановки проекта:
q + enter

📂 Структура проекта
src/
├── assets/
│   ├── background_top.png
│   ├── bg_trailer.png
│   ├── characters_leon.png
│   ├── ps4-Photoroom.png
│   ├── ps5-Photoroom.png
│   ├── steam-Photoroom.png
│   ├── xbox-Photoroom.png
│   ├── about_up.png
│   ├── about_down.png
│   ├── about_img_1.png
│   ├── about_img_2.png
│   ├── about_img_3.png
├── pages/
│   ├── about/
│   │   ├── about.tsx
│   │   ├── index.ts
│   ├── character/
│   │   ├── character.tsx  # Компонент управления персонажами
│   │   ├── index.ts
│   ├── location/
│   │   ├── location.tsx
│   │   ├── index.ts
│   ├── top/
│   │   ├── Top.tsx
│   │   ├── index.ts
│   ├── trailer/
│   │   ├── trailer.tsx
│   │   ├── index.ts
├── navigate/
│   └── routes.tsx
├── App.tsx            # Главный компонент
└── App.css
db.json                # База данных JSON Server

🌐 API Endpoints
JSON Server предоставляет следующие endpoints:

GET /characters - получить всех персонажей

POST /characters - создать нового персонажа

PUT /characters/:id - полностью обновить персонажа

PATCH /characters/:id - частично обновить персонажа

DELETE /characters/:id - удалить персонажа

Пример структуры данных персонажа:

{
  "characters": [
    {
      "id": "1",
      "name": "Leon S. Kennedy",
      "description": "Leon S. Kennedy, a rookie cop when the Raccoon City Incident took place six years ago, has become an agent working directly under the President. Having gone through many different missions since the incident, Leon has matured significantly.",
      "image": "src/assets/character_leon.png"
    },
    ...
  ]
}

📝 Лицензия
Этот проект распространяется под лицензией MIT.

Автор: островский Иван Павлович
Группа: ПИЭ-31
Год: 2025