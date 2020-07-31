# book-expressive-javascript
Изучение книги "Выразительный JavaScript" 3-е издание


# Раздел 1. Значения, типы и операторы

В строке переводы строки могут быть включены без экранирования
только в том случае, если строка заключена в обратные одиночные
кавычки.

Литералы шаблонов - строки закдючённые в обратные одинарные кавычки.
Отличие одинарных и двойных кавычек заключается лишь в том, какой тип
кавычек в них необходимо экранировать.

Заглавные буквы всегда "меньше" строчных "Z" < "a".

В JS есть только одно значение, которое не равно
самому себе, и это NAN.

NAN - результат безсмысленных вычеслений.

Приоритет логических операторов:
- || самый низкий приоритет
- затем &&
- потом операторы сравнения
- а затем остальные

Операторы бывают: унарными, бинарными и троичными (?)

Если будет обнаружено значение NaN, там где его не должно быть,
ищете ошибку в случайных преоразованиях типов.

0, NaN и пустая строка "" - эквивалентны false, пример:
0 || -1 даст -1, а "" || "!?" - "!?"

# Раздел 2 Структура программы

Переменные / привязки лучше представлять не как коробки, а как
щупальца: переменные не содержат значения, а захватывают их и
удерживают, как "щупальца".

var - способ объявления привязок в версиях JS до 2015 года.

Функция Number.isNaN - true, если значение содержит NaN.

Инструкции, размещаемые последовательно, одна за другой,
образуют программу выполняемую сверху вниз.

Множество определённых привязок называется окружением.

# Раздел 3 Функции

Функции не имеющие инструкции return, выозвращают undefined.

Область видимости - это часть программы, в которой видна данная
привязка. Переменная, определённая вне какой-либо функции или
блока, является глобальной и её областью видимости является
вся программа, такие переменные называются глобальными.

Исключение: когда несколько привязок (переменных) имеют одно
и то же имя - тогда код может видель только самую внутреннюю
переменную.

Множество привязок, видимых внутри блока, определяется его
положением в тексте программы. Каждая локальная область
видимости так же видит все локальные области, которые её
содержат, и все области видят глобальную область. Такой подход
называется лексической областью видимости.

Декларативный подход объявления функции:
function future() {
  return "текст";
}

Такая функция будет работать несмотря на то, что объявлена
после кода где вызывается.

СТЕК ВЫЗОВОВ

Место, где комптютер хранит контекст вызова, является стеком вызовов.
"Взорвать" стек - означает использовать всю память.

JS черезвычайно терпимо относится к кол-ву аргументов, которые вы
передаёте в функции, Если передать их слишком много, то лишние
будут игнорироваться. Если передать слишком мало, то отсутствующим
параметрам будет присвоено undefined.

ЗАМЫКАНИЕ (стр 68)

Возможность ссылаться на конкретный экземпляр локальной переменной в
пределах замкнутой области видимости - называется замыканием.
Функция, которая ссылается на переменные из окружающих ее локальных
областей видимости, называется замыканием.

При вызове тело функции видит не то окружение, где вызвана функция, а
то где она была создана.

РЕКУРСИЯ (стр 69)

Функция, вызывающая сама себя, называется рекурсивной.

Выполнение простого цикла, как правило, менее затратно, чем многократный
вызов функции, именно по этому программисту каждый раз приходится
выбирать баланс между скоростью и элегантностью кода.

Некоторые проблемы действительно проще решить с помощью рекурсии, чем
с помощью цикла. Чаще всего это проблемы, требующие изучения или обраьотки
нескольких ветвей кода, каждая из которых может, в свою очередь, разделяться
на ещё большее кол-во ветвей.

!!! Вместо того, чтобы выделять всю повторяющуюся часть программы одним
куском, попробуем представить в виде функции отдельную концепцию.

!!! Полезный принцип - не добавлять функционал, если вы не уверены, что
он вам понадобиться. Бывает заманчиво написать обобщенный "каркас" для
каждой функциональности, которая вам встретилась. Не поддавайтесь этому
желанию. Так вы не выполните реальную работу - вы будите просто писать
код, который никогда не пригодится.

Функции можно условно разделить на те, которые вызываются ради выполнения
побочных эфектов, и те которые вызываются ради возвращаемого значения.

Функции, создающие значения, лугче комбинировать разными способами, чем
функции, непосредственно выполняющие побочные эфекты.

Чистая функция - это особый вид функций, возвращающей значение. Она не
только лишена побочных эфектов, но и не зависит от побочных эфектов,
создаваемых в других частях кода, - например она не читает значения глобальных
привязов, которые могут изменяться.