## 25.06

Всім привіт. Створив гіт і всіх туди додав перевіряйте мейл. Якщо не прийшло - напишіть сюди

Кожен робить собі окрему гілку і називає її так само, як ваш логін в гітхабі (в програмі - це branches -> new branch, в командній строці - git branch LOGIN, де LOGIN - це ваш логін), потім  git checkout LOGIN).
Можете заливати на гіт все на свою гілку. Коли все зробите - перемістіть таску в ready for review

### Для фронтендщиків:
Давайте блоки, які ви берете - одразу робимо їх адаптивними (бутстрап-колонки + медіа-запити) та заносимо їх в реакт
Вставляємо їх в папку frontend/scr/components. Для хедера і футера - вставляємо все в Header/index.js та Footer/index.js. Для решти контентних блоків - створив папку contentBlocks - там створюємо окремі папки за назвою блоку і туда заносимо свій блок в index.js та робимо файл index.css, де буде ваш css і в index.js імпортуємо його

### Для бекендщиків:
Можуть бути помилки, коли будемо мерджити БД при міграціях. Якщо так буде - видаляємо db.sqlite3 і робимо заново migrate - БД створиться наново (буде пуста, але структура всіх таблиць там буде. Всі міграції мають заливатись в гіт.

P.S. Проект має називатись так само, як тут перевірте про всяк випадок