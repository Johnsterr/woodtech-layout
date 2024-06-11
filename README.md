Добавить все файлы
1a) git add .
Добавить определенный файл или директорию
1b) git add styles/base.css

Сделать сам коммит
2a) git commit -m "first commit"

Объединение 1a и 2a
git commit -am "first commit"

Если нужно отправить на удаленный репо
3a) git push
Полная версия команды
3b) git push origin main

=====

Для создания ветки (название ветки без пробелов)
1) git branch "second-branch"

Для переключения на ветку
2) git checkout second-branch

Комбинация 1 и 2
git checkout -b "third-branch"

Отправить изменения по имени созданной ветки на удаленную
git push origin second-branch

=====
Для подтягивания изменений с удаленного репо (master - это название ветки)
git pull origin master

Если не подтягиваются изменения через git pull, тогда нужно сначала сделать
git fetch
и потом снова
git pull origin master
