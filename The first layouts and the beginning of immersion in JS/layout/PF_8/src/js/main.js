new JustValidate('.contact__form', {
  rules: {
    name: {
      required: true,
      minLength: 1,
    },
    email: {
      required: true,
      email: true
    },
  },
  messages: {
    name: {
      required: 'Вы не ввели имя',
      minLength: 'Не менее 1 букв',
    },
    email: {
      required: 'Вы не ввели e-mail',
      email: 'Введите корректный email',
    }
  }
})
new JustValidate('.about__input__wrapper', {
  rules: {
    email: {
      required: true,
      email: true
    },
  },
  messages: {
    email: {
      required: 'Вы не ввели e-mail',
      email: 'Введите корректный email',
    }
  }
})
let searchMenu = document.querySelector('.header__form')
let search = document.querySelector('.header__btn')
let headerCloser = document.querySelector('.header__closer')
let burger = document.querySelector('.burger')
let burgerMenu = document.querySelector('.header__list__wrapper')
let burgerCloser = document.querySelector('.header__list__closer')
search.addEventListener('click', function () {
  searchMenu.classList.toggle('active')
})
headerCloser.addEventListener('click', function () {
  searchMenu.classList.toggle('active')
})
burger.addEventListener('click', function () {
  burgerMenu.classList.toggle('active')
})
burgerCloser.addEventListener('click', function () {
  burgerMenu.classList.toggle('active')
})


var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init() {
  // Создание экземпляра карты и его привязка к контейнеру с
  // заданным id ("map").
  myMap = new ymaps.Map('map', {
    // При инициализации карты обязательно нужно указать
    // её центр и коэффициент масштабирования.
    center: [55.765432, 37.618999], // Москва
    zoom: 14
  }, {
    searchControlProvider: 'yandex#search'
  });

  let Placemark = new ymaps.Placemark([55.769432, 37.638999], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'images/dotmap.svg',
  });
  
  myMap.geoObjects.add(Placemark)

}
