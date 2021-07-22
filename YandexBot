// ==UserScript==
// @name         GoogleBot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @icon         https://www.google.com/s2/favicons?domain=tampermonkey.net
// @grant        none
// ==/UserScript==
let worlds = ["Гобой", "Флейта","Как звучит кларнет","Валторна","Фагот"];
let yandexInput = document.getElementsByName("text")[0];
yandexInput.value= worlds[getIntRandom(0, worlds.length)];
let buttn = document.getElementsByClassName("button mini-suggest__button button_theme_search button_size_search i-bem button_js_inited")[0];
setTimeout(function(){
    buttn.click();
},1700);
let linux = document.getElementsByClassName("Link Link_theme_normal OrganicTitle-Link OrganicTitle-Link_wrap Typo Typo_text_l Typo_line_m organic__url link i-bem link_js_inited")[0];
if(linux != undefined){
    setTimeout(function(){
        linux.click();
    },1500);
}else{
    let links= document.links;
    let pgnext = document.getElementsByClassName("link link_theme_none link_target_serp pager__item pager__item_kind_next i-bem link_js_inited");
    let goToTheNextPage = true;
    for(let i=0; i<links.length; i++){
        let link = links[i];
        if(link.href.indexOf("https://wikipedia.pp.ru/%D0%92%D0%B0%D0%BB%D1%82%D0%BE%D1%80%D0%BD%D0%B0") != -1){
            setTimeout(function(){
                link.click();
            },2000);
            goToTheNextPage = false;
            break;
        }
    }
   if(goToTheNextPage) setTimeout(function(){ pgnext.click();}, 1800);
}
function getIntRandom(min,max){
    return Math.floor(Math.random()*(max-min)-min);
}
