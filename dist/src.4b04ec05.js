parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
var e=document.querySelector("[data-question]"),t=document.querySelector("[data-text]"),n=document.querySelector(".var1"),r=document.querySelector(".var2"),c=document.querySelector(".var3"),o=document.querySelectorAll(".variant__btn"),a=document.querySelector("#circle-1"),d=document.querySelector("#circle-2"),i=document.querySelector("#circle-3"),s=document.querySelectorAll(".circle__item"),u=0,l=document.querySelector("[data-modal]"),m=document.querySelector("[data-nextBtn]"),f=document.querySelector("[data-restart]"),q=0,w=0,L=[],y=[{id:1,question:"Сколько домашних у твоей поруги",answers:["2","3","4"],correctAnswer:2},{id:2,question:"Как зовут родителей твоей ЛП",answers:["Игорь и Анна","Федя и Гриша","Андрей и Оксана"],correctAnswer:0},{id:3,question:"Какая марка машины у папы твоей ЛП",answers:["Жигули","Рено","Фольцваген"],correctAnswer:1}],S=function(){m.disabled=!0,e.textContent=y[q].question,n.innerHTML=y[q].answers[0],r.innerHTML=y[q].answers[1],c.innerHTML=y[q].answers[2],L.push(y[q].id)},v=function(){l.classList.remove("hidden"),t.textContent=0===w?"Ничего про меня не знаешь совсем =(":"Твой результат ".concat(w," правильных ответа")},g=function(){o.forEach(function(e){return e.disabled=!0})},h=function(){o.forEach(function(e){e.disabled=!1,e.classList.remove("correct","wrong")})},E=function(e){s[u].classList.add(e),u+=1},b=function(){l.classList.add("hidden"),w=0,q=0,u=0,s.forEach(function(e){return e.classList.remove("correct","wrong")}),h(),S()};window.addEventListener("load",function(){S()}),m.addEventListener("click",function(){q+=1,h(),q===y.length?v():S()}),f.addEventListener("click",function(){b()}),o.forEach(function(e){e.addEventListener("click",function(e){m.disabled=!1,Number(e.target.dataset.num)===y[q].correctAnswer?(e.target.classList.add("correct"),g(),E("correct"),w+=1):(e.target.classList.add("wrong"),g(),E("wrong"))})});
},{}]},{},["Focm"], null)
//# sourceMappingURL=/src.4b04ec05.js.map