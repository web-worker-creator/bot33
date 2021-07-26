// ==UserScript==
// @name         GoogleBot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @match        https://gufo.me/dict/bse/%D0%93%D0%BE%D0%B1%D0%BE%D0%B9/*
// @icon         https://www.google.com/s2/favicons?domain=tampermonkey.net
// @grant        none
// ==/UserScript==
let sites = {
    "%D0%93%D0%BE%D0%B1%D0%BE%D0%B9":["Гобой", "Флейта","Как звучит кларнет","Валторна","Фагот"],
    "crushdrummers.ru":["барабанное шоу", "Заказать барабанщиков", "Барабанщики на праздник Москва"]
}
let site = Object.keys(sites)[getIntRandom(0, Object.keys(sites).length)];
let worlds = sites[site];
let yandexInput = document.getElementsByName("text")[0];
let word = worlds[getIntRandom(0, worlds.length)]
let buttn = document.getElementsByClassName("button mini-suggest__button button_theme_search button_size_search i-bem button_js_inited")[0];
if(buttn != undefined){
    document.cookie = "site="+site;
    let i = 0;
    let timerId = setInterval(()=>{
        yandexInput.value += word[i++];
        if(i==word.length){
        clearInterval(timerId);
            buttn.click();
        }
    }, 1000);
} else if(location.hostname == "yandex.ru"){
    let site = getCookie('site');
    let links= document.links;
    let pgnext = document.getElementsByClassName("link link_theme_none link_target_serp pager__item pager__item_kind_next i-bem")[0];
    let goToTheNextPage = true;
    let currentPage = +document.querySelector("pager__item pager__item_current_yes pager__item_kind_page").innerText;
    for(let i=0; i<links.length; i++){
        let link = links[i];
        if(link.href.indexOf(site) != -1){
            link.target = "_self";
            setTimeout(function(){
                link.click();
            },2000);
            goToTheNextPage = false;
            break;
        }
    }
  if(goToTheNextPage && currentPage<7) setTimeout(function(){ pgnext.click();}, 1800);
   else if(goToTheNextPage) location.href = "https://yandex.ru/";
}else{
    let links = document.links;
    let index = getIntRandom(0,links.length)
    setInterval(()=>{
        console.log("клик по сайту")
        if (links[index].href.indexOf(location.pathname) != -1 )
            links[index].click();
        else location.href = "https://yandex.ru/";
    },3000);

    console.log("Мы больше не на яндексе");
}
function getIntRandom(min,max){
    return Math.floor(Math.random()*(max-min)-min);
}

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
