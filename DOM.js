let headingElement = document.getElementById("main-heading");
console.log(headingElement.innerHTML);
let newText= prompt("Введите новый заголовок");
headingElement.innerHTML = newText;

let newPost = prompt("Введите новый заголовок:");
$("#main-heading").text(newPost);

$("h1").text("Погода на сегодня в Минске!").fadeOut(3000).fadeIn(2000);

$("h2").text("Сейчас тут что то будет !").slideUp(4000).slideDown(1000);

$("h3").text("ТУТ КОМАНДА!").hide(1000).show(4000);

for (let i = 0; i < 5; i++) {
    let hobby = prompt("Назови одно из своих любимых хобби!");
     $("body").append("<h2>" + hobby + "</h2>");
    }
 let counter = 1;
let printMessage = function () {
 console.log("Ты смотришь в консоль уже " + counter + " сек");
 counter++ ;
};
setInterval(printMessage, 1000);

let topOffset = 300;
let moveHeading = function () {
     $("#main-heading").offset({ left: topOffset });
     topOffset--;
     if (topOffset < 0) {
         topOffset = 300;
        }
};
setInterval(moveHeading, 30);
