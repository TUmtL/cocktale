const element = document.querySelector(".selectors__select")

const choices = new Choices(element, {
  searchEnabled:false,
  itemSelectText:"",
});

ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [48.872185, 2.354224],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 7
    });

    let Placemark = new ymaps.Placemark([48.872185, 2.354224], {}, {
      iconLayout:'default#image',
      iconImageHref: 'img/Subtract.svg',
      });

  myMap.geoObjects.add(Placemark)
}

const selector = document.querySelector("input[type='tel']")
const im = new Inputmask("+7-(999)-999-99-99")
im.mask(selector)

new JustValidate('.login__form', {
  rules: {
    name: {
      required: true,
      minLength:2,
    },
    tel:{
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return  Number(phone) && phone.length === 10;
       },
    },
    email:{
      required: true ,
      email:true
    },
  },
    messages: {
      name: {
        required: 'Вы не ввели имя',
        minLength:'Не менее 2 букв',
      },
      tel: {
        required: 'Вы не ввели телефон',
        function:'Не достаточное кол.-во символов' ,
      },
      email: {
        required: 'Вы не ввели e-mail',
        email: 'Введите корректный email',
      }
  }
})
