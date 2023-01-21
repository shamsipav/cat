## Level I

### Q1: Расскажите, чем, на ваш взгляд, отличается хорошая верстка от плохой с точки зрения:
 - пользователя; 
 - менеджера проекта;
 - дизайнера;
 - верстальщика; 
 - клиентского программиста;
 - серверного программиста.

Для **пользователя** хорошая верстка - это когда страница в процессе взаимодействия ведет себя так, как это интуитивно ожидается. Ничего не "убегает" от курсора, корректно отображаются изображения, не появляется пугающий горизонтальный скроллбар, страница полностью адаптирована под любые устройства и браузеры пользователя.

Для **менеджера проекта** хорошая верстка - это отсутствие нареканий на работу верстальщика от других членов команды разработки, соблюдение сроков, в остальном - всё так же, как и с точки зрения пользователя.

Для **дизайнера** хорошая верстка - это полное соответствие макету.

Для **верстальщика** хорошая верстка - это, помимо соответствия макету, полное соответствие верстки адаптивности (или отзывчивости), валидности и семантики, кроссбраузерности и кроссплатформенности.

Для **клиентского программиста** хорошая верстка заключается в том, что в нее с легкостью можно внедрить клиенсткую логику. Будет здорово, если ничего не сломается после вывода большого количества объектов с backend'а на frontend. Хорошая верстка в данном случае - это когда верстальщик учёл все возможные варианты изменения контента на странице.

По моему мнению, **серверный программист** маловероятно будет зависеть от контента на странице, но думаю возможен вариант, когда данные отправляются с формы напрямую в backend. В этом случае важно, чтобы атрибуты "name" для полей ввода были заполнены корректно.

### Q2: Опишите основные особенности верстки крупных многостраничных сайтов, дизайн которых может меняться в процессе реализации и поддержки. Расскажите о своем опыте верстки подобных сайтов: какие методологии, инструменты и технологии вы применяли на практике.

Для верстки крупных многостраничных сайтов важно использовать компонентный подход. С появлением JS-фреймворков использование такого подхода стало гораздо проще.
В недавнем прошлом использовал связку **GULP + SCSS + БЭМ**. Сейчас же, с помощью **Svelte.js** или **React.js**, удобно и быстро создавать универсальные компоненты для различных повторяющихся элементов на странице (с изолированными стилями), а также масштабировать их в процессе реализации и поддержки.

### Q3: Опишите основные особенности верстки сайтов, которые должны одинаково хорошо отображаться как на любом современном компьютере, так и на смартфонах и планшетах под управлением iOS и Android. Расскажите о своем опыте верстки подобных сайтов: какие инструменты и технологии вы применяли, как проверяли результат на различных устройствах, какие именно устройства требовалось поддерживать.

Для поддержки кроссплатформенности и кроссбраузерности, по моему мнению, необходимо использовать префиксы (в проектах я использую **Autoprefixer**, как правило, он доступен из коробки), проверять поддержку браузерами **CSS**-свойств в сервисе **Can I use**, а также тестировать верстку напрямую на разных устройствах (к примеру, с помощью сервиса **Browserstack**). Для устройств с разной шириной экрана необходимо добиться лучшей адаптивности или отзывчивости.

### Q4: Расскажите, какие инструменты помогают вам экономить время в процессе написания, проверки и отладки кода.

В первую очередь использование удобной среды разработки: я использую **Visual Studio Code** (с различными плагинами) и **WebStorm** от JetBrains. Удобно использовать сниппеты, чтобы каждый раз не писать одинаковые конструкции. Сильно экономит время использование линтера: я использую **ESLint**, он помогает держать код "чистым", а также "ругается" на ошибки, которые не смог исправить автоматически.

### Q5: Вам нужно понять, почему страница отображается некорректно в Safari на iOS и в IE на Windows. Код писали не вы, доступа к исходникам у вас нет. Ваши действия? Сталкивались ли вы с подобными проблемами на практике?

В таком случае я буду использовать инструменты разработчика для **Safari** и **IE**. В первую очередь посмотрю **CSS**-свойства у проблемных элементов, проверю поддерживает ли их каждый браузер через сервис **Can I use**, после этого попытаюсь их скорректировать/заменить на другие и посмотрю, что получилось.

### Q6: Дизайнер отдал вам макет, в котором не показано, как должны выглядеть интерактивные элементы при наведении мыши. Ваши действия?

Если нет возможности связаться с дизайнером и уточнить этот момент, то буду руководствоваться базовыми принципами **User Experience** и собственным опытом. Реализую минимальное, но достаточное интерактивное взаимодействие с элементами в соответствии с тематикой макета: к примеру, добавлю opacity при наведени или слегка изменю цвет фона или границы элемента.

### Q7: Какие ресурсы вы используете для развития в профессиональной сфере? Приведите несколько конкретных примеров (сайты, блоги и так далее). 

Вот список распространенных ресурсов, которые я использую для развития:
- Официальная документация (к примеру, для [Svelte.js](https://ru.svelte.dev/) или [React.js](https://ru.reactjs.org/));
- Stack Overflow;
- YouTube;
- GitHub.

**Какое направление развития вам более близко: JS-программирование, HTML/CSSверстка или что-то ещё?**

Мне более близко направление **Frontend**-разработки. Я несколько месяцев работаю со **Svelte.js (Svelte Kit)**, параллельно изучаю **React.js**.

**Какие ещё области знаний, кроме тех, что непосредственно относятся к работе, вам
интересны?**

В университете для реализации web-приложений активно используется стек **C#** + **ASP.NET Core MVC** + **Microsoft SQL Server (Entity Framework)**. Мне нравится использовать этот стек для выполнения практических/курсовых/квалификационных работ, связанных с расчетами металлургических агрегатов.

### Q8: Расскажите нам о себе и предоставьте несколько ссылок на последние работы, выполненные вами. 

Меня зовут Павел Шамсимухаметов, мне 22 года. Я работаю в Уральском Федеральном университете и обучаюсь в магистратуре по направлению "Информационные системы и технологии" (занятия вечерние, поэтому это не мешает уделять время работе). Очень хочу работать в команде, где каждый занимается своим делом и помогает друг другу развиваться. 

Ответственно подхожу к любой работе, умею продуктивно распределять время на рабочие задачи, соблюдаю сроки. Стремлюсь к саморазвитию в своей специализации, изучаю новые технологии, применяю полученные знания на реальных проектах.

Вот несколько моих последних работ:
- [x] [Карьера в Метавселенной](https://metaverse‑career.ru/) ‑ реализация сайта для молодежной конференции в сфере IT на базе Уральского федерального университета 
- :hammer_and_wrench: Svelte (SvelteKit)
- [x] [Ключевая ставка](https://econstaff.urfu.ru/) ‑ реализация сайта для дня открытых дверей Института экономики и управления УрФУ 
- :hammer_and_wrench: Svelte (SvelteKit)
- [x] Разработка админ‑панели для сайта [Эндаумент Фонда УрФУ](https://endowment.urfu.ru/)
- :hammer_and_wrench: Svelte (SvelteKit) + Node.js + PostgreSQL
- [x] Разработка админ‑панели для сайта приёмной кампании [Института новых материалов и технологий УрФУ](https://inmt-priem.urfu.ru/)
- :hammer_and_wrench: Svelte (SvelteKit) + Node.js + PostgreSQL
