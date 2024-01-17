# __Diploma__ 
___

## __Project *Barbershop BORODINSKI*__
___


### 
__Тема диплома:__<br/>

__"Интернет-магазин Barbershop BORODINSKI (HTML + CSS + JavaScript), который должен соответствовать следующим требованиям:__

- *Стандарты вёрстки: HTML5, CSS3, прогрессивное улучшение.*<br/>
- *Сетка: определена в макете.*<br/>
- *Адаптивность вёрстки: нет.*<br/>
- *Используемые фреймворки: нет.*<br/>
- *Кроссбраузерность: IE10+, Chrome, Firefox, Opera, Safari.*<br/>
- *Типографика: частично определена в макете (прочее — на усмотрение разработчика).*<br/>
- *Используемый шрифт: PT Sans Narrow (есть в папке с макетом и на Google Fonts).*<br/>


***Пояснения для учащихся:***
- *Часть макетов не включена в задание, дабы не усложнять его. Когда упомянуты страницы или элементы, отсутствующие в макетах, даны пояснения «макета нет, не делать». Такие элементы (модальное окно с фотографией, страница новостей и прочие) верстать не нужно.*<br/>
- *В макетах есть скрытые слои с всплывающими окнами. Такие слои в блоке слоёв фотошопа выделены красным цветом.*<br/>
- *Макеты верстаются постепенно, не нужно сразу выполнять все требования.*<br/>
<br/>

~~~css
html,
body {
  min-width: 960px;
  margin: 0;
  padding: 0;
  background-color: black;
  background-image: url(/img/bg2.jpg);
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  font-family: "PT Sans Narrow", "Arial", sans-serif;
  text-transform: uppercase;

/* Увеличение фото и изменение из ч/б в цветное при наведении курсора */

.info-color-foto {
  text-align: center;
  transition: filter .7s ease-in-out;
  -webkit-filter: grayscale(99%); 
  filter: grayscale(99%); 
}

.info-color-foto:hover {
  -webkit-filter: grayscale(0%); 
  filter: grayscale(0%); 
  transform: scale(1.016)
}

/* Увеличение карты при наведении курсора в контактах */

.scale-map {
  transition: 1s;        /* Время эффекта */
 }
 .scale-map:hover {
  transform: scale(1.3); /* Увеличиваем масштаб */
 }
}

/* Всплывающая форма */
/* Анимация появление всплывающей формы */
@keyframes bounce {
  0%   {
    transform: translateY(-2000px);
  }
  70%  {
    transform: translateY(30px);
  }
  90%  {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
/* Анимация некорректных данных */
@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-10px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(10px);
  }
}
~~~

~~~javascript
// Всплыващая карта


var mapOpen = document.querySelector(".js-open-map");

var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-content-close");

mapOpen.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.add("modal-content-show");
});

mapClose.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (mapPopup.classList.contains("modal-content-show")) {
      mapPopup.classList.remove("modal-content-show");
    }
  }
});
~~~

**Полный код Интернет-магазина** (*HTML* + *CSS* + *JavaScript*) **находится по ссылке** [**сlick me.**](https://github.com/DarthVaderOn/Barbershop-Borodinski)

## **Скриншоты Интернет-магазина Barbershop BORODINSKI**
___
### 
- *Реализация главной страницы.*<br/>
<a href="https://ibb.co/hD4tzQS"><img src="https://i.ibb.co/xJBRT9N/image.jpg" alt="image" border="0"></a>

- *Реализация страницы информации о барбершопе.*<br/>
<a href="https://ibb.co/hsnRSCM"><img src="https://i.ibb.co/318ynks/1.jpg" alt="1" border="0"></a>

- *Реализация страницы новостной ленты.*<br/>
<a href="https://ibb.co/r3NcyGF"><img src="https://i.ibb.co/zFD7fhQ/2.jpg" alt="2" border="0"></a>

- *Реализация страницы прайс-листа барбеншопа.*<br/>
<a href="https://ibb.co/Cpc3PTQ"><img src="https://i.ibb.co/JW1w3MH/3.jpg" alt="3" border="0"></a>

- *Реализация страницы контактных данных барбеншопа.*<br/>
<a href="https://ibb.co/N9qtFXG"><img src="https://i.ibb.co/sK4bghX/4.jpg" alt="4" border="0"></a>

- *Реализация регистрации и авторизации пользователя.*<br/>
<a href="https://ibb.co/SQNv08q"><img src="https://i.ibb.co/LQSp6W4/5.jpg" alt="5" border="0"></a>

- *Реализация карты при нажатии "Как проехать".*<br/>
<a href="https://ibb.co/86WZpFR"><img src="https://i.ibb.co/WgbJwSd/6.jpg" alt="6" border="0"></a>