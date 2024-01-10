var gallery = document.querySelector(".gallery");
gallery.classList.add("gallery-live");

// Добавляем управляющие элементы
// Винимание! плохая практика
// Только для быстрой демонстрации подхода

var buttons = '<button class="btn gallery-prev" type="button">Назад</button>' + 
              '<button class="btn gallery-next" type="button">Вперёд</button>';

gallery.innerHTML = gallery.innerHTML + buttons;

// Зададим начальное состояние кнопок

var prev = document.querySelector(".gallery-prev");
prev.setAttribute('disabled', 'disabled');

// Инициализация завершена
// Далее - типовой код работы галереи: обработка событий, переключение слайдов и т.д.

var next = document.querySelector(".gallery-next");
var slides = Array.from(gallery.querySelectorAll('img'));
var slideCount = slides.length;
let slideIndex = 0;


// Устанавливаем обработчики событий для кнопок
prev.addEventListener('click', showPreviousSlide);
next.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
  }
  
  // Функция для показа следующего слайда
  function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
  }
  
  // Функция для обновления отображения слайдера
  function updateSlider() {
    slides.forEach((slide, index) => {
      if (index === slideIndex) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });
  }
  
  // Инициализация слайдера
  updateSlider();