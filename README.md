# Вычислитель отличий


### Hexlet tests and linter status:
[![Actions Status](https://github.com/Pajzer/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Pajzer/frontend-project-46/actions)

[![my-check](https://github.com/Pajzer/frontend-project-46/actions/workflows/main.yml/badge.svg)](https://github.com/Pajzer/frontend-project-46/actions/workflows/main.yml)

[![Maintainability](https://api.codeclimate.com/v1/badges/68f3144ff1094c329628/maintainability)](https://codeclimate.com/github/Pajzer/frontend-project-46/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/68f3144ff1094c329628/test_coverage)](https://codeclimate.com/github/Pajzer/frontend-project-46/test_coverage)


### Описание

Вычислитель отличий – программа, определяющая разницу между двумя структурами данных.
Возможности утилиты:
- Поддержка разных входных форматов: yaml, json
- Генерация отчета в виде plain text, stylish и json


### Установка

make install

## Пример использования


### Сравнение плоских json файлов

Команда:

   ```sh
   gendiff __fixtures__/file1.json __fixtures__/file2.json
   ```
[![asciicast](https://asciinema.org/a/TmJMnQmHO9cAI2q4RdJ7VTmtm.svg)](https://asciinema.org/a/TmJMnQmHO9cAI2q4RdJ7VTmtm)


### Сравнение плоских yaml файлов

Команда:

   ```sh
   gendiff __fixtures__/file1.yml __fixtures__/file2.yml
   ```
[![asciicast](https://asciinema.org/a/2WcjQMu6YxvXMgyjvurPIt2p4.svg)](https://asciinema.org/a/2WcjQMu6YxvXMgyjvurPIt2p4)

### Рекурсивное сравнение

[![asciicast](https://asciinema.org/a/rNlPbuyxzdhvOnPIGHMTeh0cJ.svg)](https://asciinema.org/a/rNlPbuyxzdhvOnPIGHMTeh0cJ)


### Плоский формат

Команда:

   ```sh
   gendiff -f plain __fixtures__/file1.yml __fixtures__/file2.yml
   ```
[![asciicast](https://asciinema.org/a/tUcNdLVjBlqJTYhKhfzllF4rM.svg)](https://asciinema.org/a/tUcNdLVjBlqJTYhKhfzllF4rM)


 ### Вывод в json

Команда:

   ```sh
   gendiff -f json __fixtures__/file1.yml __fixtures__/file2.yml
   ```
[![asciicast](https://asciinema.org/a/Yv4W9z3IGarVo6cKE73KSlmH1.svg)](https://asciinema.org/a/Yv4W9z3IGarVo6cKE73KSlmH1)   