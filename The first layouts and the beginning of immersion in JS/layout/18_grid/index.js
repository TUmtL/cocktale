let burger = document.querySelector(".header__btn");

let burger__menu = document.querySelector(".header__nav");

burger.addEventListener("click" , function(){
  burger__menu.classList.toggle("header__nav__off")
});

let burger__closer = document.querySelector(".closser");

burger__closer.addEventListener("click" , function(){
  burger__menu.classList.toggle("header__nav__off")

});