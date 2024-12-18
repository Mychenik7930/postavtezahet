import Swiper from "swiper";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const burger = document.querySelector(".burger");
const test_menu = document.querySelector(".test_menu");

const close__button = document.querySelector(".close__button");
const lang = document.querySelectorAll(".aside__menu--lang li a");
const menu = document.querySelectorAll(".aside__menu--list li a");

const message = document.querySelector(".message");
const message_burger = document.querySelector(".message_burger");
const message_tablet = document.querySelector(".message_tablet");
const message_menu = document.querySelector(".message_menu");
const message_menu_close = document.querySelector(".message_menu_close");

const call = document.querySelector(".call");
const call_burger = document.querySelector(".call_burger");
const call_tablet = document.querySelector(".call_tablet");
const call_menu = document.querySelector(".call_menu");
const call_menu_close = document.querySelector(".call_menu_close");

const subtitle_1 = document.querySelector(".subtitle_1")
const subtitle = document.querySelector(".subtitle")
const subtitle_readmore = document.querySelector(".subtitle__readmore--list")
const opened = document.querySelector (".opened")
const subtitle_text = document.querySelector (".subtitle__readmore--text")
const strelka = document.querySelector (".subtitle__readmore--list--icon")



message.addEventListener("click", () => {              
  message_menu.classList.add("message_menu_open");

  message_menu_close.addEventListener("click", () => {
    message_menu.classList.remove("message_menu_open");
  });
});

message_burger.addEventListener("click", () => {              
  message_menu.classList.add("message_menu_open");

  message_menu_close.addEventListener("click", () => {
    message_menu.classList.remove("message_menu_open");
  });
});

message_tablet.addEventListener("click", () => {              
  message_menu.classList.add("message_menu_open");

  message_menu_close.addEventListener("click", () => {
    message_menu.classList.remove("message_menu_open");
  });
});

call.addEventListener("click", () => {              
  call_menu.classList.add("call_menu_open");

  call_menu_close.addEventListener("click", () => {
    call_menu.classList.remove("call_menu_open");
  });
});

call_burger.addEventListener("click", () => {          
  call_menu.classList.add("call_menu_open");

  call_menu_close.addEventListener("click", () => {
    call_menu.classList.remove("call_menu_open");
  });
});

call_tablet.addEventListener("click", () => {              
  call_menu.classList.add("call_menu_open");

  call_menu_close.addEventListener("click", () => {
    call_menu.classList.remove("call_menu_open");
  });
});

burger.addEventListener("click", () => {
  test_menu.classList.add("test_menu_open");

  close__button.addEventListener("click", () => {
    test_menu.classList.remove("test_menu_open");
  });
});

lang.forEach((item) => {
  item.addEventListener("click", (b) => {
    lang.forEach((bl) => {
      bl.classList.remove("lang_active");
    });
    item.classList.add("lang_active");
  });
});

menu.forEach((item) => {
  item.addEventListener("click", (b) => {
    menu.forEach((bl) => {
      bl.classList.remove("active");
    });
    item.classList.add("active");
  });
});

Swiper.use([Pagination]);
const swiper = new Swiper(".swiper", {
  slidesPerView: "auto", // сколько слайдов показывать
  spaceBetween: 16,
  observer: true, // проверка находится ли элемент в области видимости
  breakpoints: {
    1119: {
      enabled: false,
    }, // значение когда нужно сломать swiper
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },
});