// бургер
let burger = document.querySelector(".burger");

let burger__menu = document.querySelector(".burger__menu");

burger.addEventListener("click" , function(){
  burger__menu.classList.remove("turned-off")
});

let burger__closer = document.querySelector(".burger__closer");

burger__closer.addEventListener("click" , function(){
  burger__menu.classList.add("turned-off")

});
// слайдер
const swiper = new Swiper (".swiper-container" , {
  slidesPerView:1,

  pagination: {
    el: '.swiper-pagination',
    type:'bullets',
    clickable: true ,
  },

});
// табы
const firstParams = {
  tabsClass: "js-tab",
  wrap: "js-tabs-wrap",
  content: "js-tab-content",
  active: "active"
};

function setTabs(params) {
  const tabBtns = document.querySelectorAll(`.${params.tabsClass}`);

  function onTabClick(e) {
    e.preventDefault();
    const path = e.target.dataset.path;
    const wrap = e.target.closest(`.${params.wrap}`);
    const currentContent = wrap.querySelector(`.${params.content}[data-target="${path}"]`);
    const contents = wrap.querySelectorAll(`.${params.content}`);

    contents.forEach((el) => {
      el.classList.remove(params.active);
    });

    currentContent.classList.add(params.active);
    
    tabBtns.forEach((el) => {
      el.classList.remove(params.active);
    });
    
    this.classList.add(params.active);
  }

  tabBtns.forEach(function (el) {
    el.addEventListener("click", onTabClick);
  });
}

setTabs(firstParams);
// поиск
let search = document.querySelector(".header__btn")
let searchMenu = document.querySelector(".search__menu")
let searchcloser = document.querySelector(".search__close")

search.addEventListener("click" , function(){
  searchMenu.classList.remove("turned-off-search")
})
searchcloser.addEventListener("click" , function(){
  searchMenu.classList.add("turned-off-search")
})
// аккордеон
let accordion__btn1 = document.querySelector(".faq__btn__1")
let accordion__text1 = document.querySelectorAll(".item__text__1") 

accordion__btn1.addEventListener("click" , function (){
  accordion__btn1.classList.toggle("active")
  accordion__text1.forEach(function (element) {
    element.classList.toggle("turned-off-text")
  })
})