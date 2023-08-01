# Домашнее задание к лекции «`ArrayBuffer`»

[![Build status](https://ci.appveyor.com/api/projects/status/y6sav9od82j952pb/branch/main?svg=true)](https://ci.appveyor.com/project/marinaustinovich/ajs-homeworks-arraybuffer/branch/main)

**Важно**: код должен проходить ESLint без ошибок.

**Важно**: тесты должны обеспечивать 100% покрытие тестируемых функций по строкам.

**Важно**: решения должны быть построены на базе [шаблона Webpack](/ci-template).

В личном кабинете на сайте [netology.ru](http://netology.ru/) в поле комментария к домашней работе вставьте ссылки на ваш GitHub-проекты.

---

## `Math (log/trig)`

### Легенда

Мощь атаки магов и демонов привела к разбалансировке игрового мира. Поэтому вы ввели для игроков несколько новых правил и возможностей:
1. Сила урона зависит от расстояния (для `Magician`, `Daemon`) - линейно падает, а именно: на ближайшую клетку 100%, на 5 клетку от себя - 60% (соответственно, на 2-ую клетку - 90%, на 3-ую - 80%, на 4-ую - 70%)
1. Возможность насылать «дурман» на магов и демонов. При это их сила атаки падает уже не только линейно, а по формуле: `attack - log2(x) * 5`, где `x` - это расстояние в клетках. `attack` рассчитывается с учётом п.1. Пример: атака 100 единиц, атакуем 2 клетку от себя, получаем вместе с дурманом: 85 (вместо 90).

### Описание

Реализуйте классы `Magician` и `Daemon` с `get/set stoned`. При этом `get/set attack` должен учитывать логику, описанную в легенде.

Подсказка: используйте класс `Math` и наследование, чтобы не дублировать код.

Не забудьте написать unit-тесты, которые обеспечивают 100% покрытие функций и классов, которые вы тестируете.

---

## `ArrayBuffer`

### Легенда

Периодически данные приходят в бинарном формате и их необходимо преобразовать в какой-либо другой формат, например, строку json, чтобы потом распарсить в объект. Для этих манипуляций в том числе можно использовать объекты, которые предоставляются Web API - `File` и `Blob`, но прямая манипуляция `ArrayBuffer` будет в разы быстрее и эффективнее.

### Описание

У вас есть функция `getBuffer()`, которая эмулирует создание объекта типа `ArrayBuffer`. Вам необходимо реализовать класс `ArrayBufferConverter` с методом `load()`, который может загружать данные (сигнатура `load(buffer)`), и методом `toString`, который умеет переводить содержимое загруженного `ArrayBuffer` в строку.
```javascript
function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return (input => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i++) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}
```

Не забудьте написать unit-тесты, которые обеспечивают 100% покрытие функций и классов, которые вы тестируете.

---
