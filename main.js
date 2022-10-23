import './style.css'
import anime from 'animejs/lib/anime.es.js';

let menu = document.getElementById('menu');
let listEl = document.getElementsByClassName('nav-el');
let btnListEl = document.getElementsByClassName('btn-list-el');
let links = document.getElementsByClassName('link');
let list = document.getElementById('nav-list');
let btnList = document.getElementById('nav-list-btn');
let header = document.getElementById('header');
let body = document.getElementsByTagName('body');
let menuState = false;
let burger1 = document.getElementById('burger1');
window.addEventListener('resize', (e) => {

    if (window.innerWidth < 939) {
        //console.log(body[0]);
        menuState = false;
        anime({targets: '#nav-list-btn', width: 0, height: 0, duration: 3000});
        anime(
            {targets: '.btn-list-el', translateX: 90, translateY: -200, duration: 3000}
        )
        setTimeout(() => {
            btnList.style.display = 'none';
        }, 300)
    }
})
menu.addEventListener('click', () => {
    menuState = !menuState;
    if (menuState) {
        btnList.style.display = 'initial';
        // burger1.style.position = 'absolute'; anime({     targets: 'burger1',
        // width: 35,     duration: 3000 });
        anime({targets: '#nav-list-btn', width: 500, height: 500, duration: 3000});
        anime(
            {targets: '.btn-el1', translateX: -200, translateY: 30, rotate: -15, duration: 5000}
        );
        anime(
            {targets: '.btn-el2', translateX: -180, translateY: 70, rotate: -20, duration: 5000}
        );
        anime(
            {targets: '.btn-el3', translateX: -150, translateY: 110, rotate: -25, duration: 5000}
        );
        anime(
            {targets: '.btn-el4', translateX: -130, translateY: 140, rotate: -30, duration: 5000}
        );
        anime(
            {targets: '.btn-el5', translateX: -100, translateY: 170, rotate: -35, duration: 5000}
        );
        anime(
            {targets: '.btn-el6', translateX: -70, translateY: 190, rotate: -40, duration: 5000}
        );

    }
    if (!menuState) {

        anime({targets: '#nav-list-btn', width: 0, height: 0, duration: 3000});
        anime(
            {targets: '.btn-list-el', translateX: 90, translateY: -200, duration: 3000}
        )
        setTimeout(() => {
            btnList.style.display = 'none';
        }, 300)

    }

})
