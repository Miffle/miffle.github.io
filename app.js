let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";
let first_candle_price = 500;
let second_candle_price = 500;
let third_candle_price = 500;
let fourth_candle_price = 500;
let fifth_candle_price = 500;
let sixth_candle_price = 500;
let items = [];
let item1 = 0
let item2 = 0
let item3 = 0
let item4 = 0
let item5 = 0
let item6 = 0
let cost_item1 = 0
let cost_item2 = 0
let cost_item3 = 0
let cost_item4 = 0
let cost_item5 = 0
let cost_item6 = 0
let totalCost = 0
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let min_btn1 = document.getElementById("min_btn1");
let min_btn2 = document.getElementById("min_btn2");
let min_btn3 = document.getElementById("min_btn3");
let min_btn4 = document.getElementById("min_btn4");
let min_btn5 = document.getElementById("min_btn5");
let min_btn6 = document.getElementById("min_btn6");
let lable1 = document.getElementById("count1");
let lable2 = document.getElementById("count2");
let lable3 = document.getElementById("count3");
let lable4 = document.getElementById("count4");
let lable5 = document.getElementById("count5");
let lable6 = document.getElementById("count6");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let img5 = document.getElementById("img5");
let img6 = document.getElementById("img6");
let disc1 = document.getElementById("disc1")
let disc2 = document.getElementById("disc2")
let disc3 = document.getElementById("disc3")
let disc4 = document.getElementById("disc4")
let disc5 = document.getElementById("disc5")
let disc6 = document.getElementById("disc6")
function MainButtonShow(cost) {
    totalCost += cost;
    tg.MainButton.setText(`????????????! ${totalCost} ???`)
    if (tg.MainButton.isVisible !== true) {
        tg.MainButton.show();
    }
    if (totalCost === 0){
        tg.MainButton.hide();
    }
}
function blurOpacity(img, disc){
    img.classList.toggle('blur');
    disc.classList.toggle('opacity')
}
function SetText(text, item, cost) {
    text.innerText = `${item} ???? / ${cost} ???`;
}
function countCheck(item){
    if(item > 0){
        return true
    }
}
img1.addEventListener("click", function (){
    blurOpacity(img1, disc1)
})

img2.addEventListener("click", function (){
    blurOpacity(this, disc2)
})
img3.addEventListener("click", function (){
   blurOpacity(this, disc3)
})
img4.addEventListener("click", function (){
    blurOpacity(this, disc4)
})
img5.addEventListener("click", function (){
    blurOpacity(this, disc5)
})
img6.addEventListener("click", function (){
    blurOpacity(this, disc6)
})
disc1.addEventListener("click", function (){
   blurOpacity(img1, this)
})
disc2.addEventListener("click", function (){
   blurOpacity(img2, this)
})
disc3.addEventListener("click", function (){
   blurOpacity(img3, this)
})
disc4.addEventListener("click", function (){
   blurOpacity(img4, this)
})
disc5.addEventListener("click", function (){
   blurOpacity(img5, this)
})
disc6.addEventListener("click", function (){
   blurOpacity(img6, this)
})
btn1.addEventListener("click", function () {
    item1 += 1;
    cost_item1 = first_candle_price * item1;
    SetText(lable1, item1, cost_item1);
    MainButtonShow(first_candle_price);
});

btn2.addEventListener("click", function () {
    item2 += 1;
    cost_item2 = second_candle_price * item2;
    SetText(lable2, item2, cost_item2);
    MainButtonShow(second_candle_price);

});

btn3.addEventListener("click", function () {
    item3 += 1;
    cost_item3 = third_candle_price * item3;
    SetText(lable3, item3, cost_item3);
    MainButtonShow(third_candle_price);

});

btn4.addEventListener("click", function () {
    item4 += 1;
    cost_item4 = fourth_candle_price * item4;
    SetText(lable4, item4, cost_item4);
    MainButtonShow(fourth_candle_price);

});

btn5.addEventListener("click", function () {
    item5 += 1;
    cost_item5 = fifth_candle_price * item5;
    SetText(lable5, item5, cost_item5);

    MainButtonShow(fifth_candle_price);

});

btn6.addEventListener("click", function () {
    item6 += 1;
    cost_item6 = sixth_candle_price * item6;
    SetText(lable6, item6, cost_item6);
    MainButtonShow(sixth_candle_price);

});

min_btn1.addEventListener('click', function () {
    if (countCheck(item1)) {
        item1 -= 1;
        cost_item1 = first_candle_price * item1;
        SetText(lable1, item1, cost_item1);
        MainButtonShow(first_candle_price * (-1));
    }

})
min_btn2.addEventListener('click', function () {
   if (countCheck(item2)) {
        item2 -= 1;
        cost_item2 = second_candle_price * item2;
        SetText(lable2, item2, cost_item2);
        MainButtonShow(second_candle_price * (-1));
    }

})
min_btn3.addEventListener('click', function () {
   if (countCheck(item3) === true) {
        item3 -= 1;
        cost_item3 = third_candle_price * item3;
        SetText(lable3, item3, cost_item3);
        MainButtonShow(third_candle_price * (-1));
    }

})
min_btn4.addEventListener('click', function () {
    if (countCheck(item4)) {
        item4 -= 1;
        cost_item4 = fourth_candle_price * item4;
        SetText(lable4, item4, cost_item4);
        MainButtonShow(fourth_candle_price * (-1));
    }

})
min_btn5.addEventListener('click', function () {
    if (countCheck(item5)) {
        item5 -= 1;
        cost_item5 = fifth_candle_price * item5;
        SetText(lable5, item5, cost_item5);
        MainButtonShow(fifth_candle_price * (-1));
    }

})
min_btn6.addEventListener('click', function () {
    if (countCheck(item6)) {
        item6 -= 1;
        cost_item6 = sixth_candle_price * item6;
        SetText(lable6, item6, cost_item6);
        MainButtonShow(sixth_candle_price * (-1));
    }

})

Telegram.WebApp.onEvent("mainButtonClicked", function () {
    if (countCheck(item1)) {
        items.push(`???????????? ???1 - ${item1} ????.`)
    }
    if (countCheck(item2)) {
        items.push(`???????????? ???2 - ${item2} ????.`)
    }
    if (countCheck(item3)) {
        items.push(`???????????? ???3 - ${item3} ????.`)
    }
    if (countCheck(item4)) {
        items.push(`???????????? ???4 - ${item4} ????.`)
    }
    if (countCheck(item5)) {
        items.push(`???????????? ???5 - ${item5} ????.`)
    }
    if (countCheck(item6)) {
        items.push(`???????????? ???6 - ${item6} ????.`)
    }

    items.push(`?????????? ?????????? = ${totalCost}`);
    tg.sendData(items)
});
