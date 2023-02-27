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
function MainButtonShow(cost) {
    totalCost += cost;
    tg.MainButton.setText(`Купить! ${totalCost} ₽`)
    if (tg.MainButton.isVisible !== true) {
        tg.MainButton.show();
    }
    if (totalCost === 0){
        tg.MainButton.hide();
    }
}
img1.addEventListener("click", function (){
    this.classList.toggle('blur');
    disc1.classList.toggle('opacity')


})
function SetText(text, item, cost) {
    text.innerText = `${item} шт / Цена ${cost}`;
}

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
    if (item1 >= 1) {
        item1 -= 1;
        cost_item1 = first_candle_price * item1;
        SetText(lable1, item1, cost_item1);
        MainButtonShow(first_candle_price * (-1));
    }

})
min_btn2.addEventListener('click', function () {
    if (item2 >= 1) {
        item2 -= 1;
        cost_item2 = second_candle_price * item2;
        SetText(lable2, item2, cost_item2);
        MainButtonShow(second_candle_price * (-1));
    }

})
min_btn3.addEventListener('click', function () {
    if (item3 >= 1) {
        item3 -= 1;
        cost_item3 = third_candle_price * item3;
        SetText(lable3, item3, cost_item3);
        MainButtonShow(third_candle_price * (-1));
    }

})
min_btn4.addEventListener('click', function () {
    if (item4 >= 1) {
        item4 -= 1;
        cost_item4 = fourth_candle_price * item4;
        SetText(lable4, item4, cost_item4);
        MainButtonShow(fourth_candle_price * (-1));
    }

})
min_btn5.addEventListener('click', function () {
    if (item5 >= 1) {
        item5 -= 1;
        cost_item5 = fifth_candle_price * item5;
        SetText(lable5, item5, cost_item5);
        MainButtonShow(fifth_candle_price * (-1));
    }

})
min_btn6.addEventListener('click', function () {
    if (item6 >= 1) {
        item6 -= 1;
        cost_item6 = sixth_candle_price * item6;
        SetText(lable6, item6, cost_item6);
        MainButtonShow(sixth_candle_price * (-1));
    }

})

Telegram.WebApp.onEvent("mainButtonClicked", function () {
    if (item1 !== 0) {
        items.push(`Свечей №1 - ${item1} шт.`)
    }
    if (item2 !== 0) {
        items.push(`Свечей №2 - ${item2} шт.`)
    }
    if (item3 !== 0) {
        items.push(`Свечей №3 - ${item3} шт.`)
    }
    if (item4 !== 0) {
        items.push(`Свечей №4 - ${item4} шт.`)
    }
    if (item5 !== 0) {
        items.push(`Свечей №5 - ${item5} шт.`)
    }
    if (item6 !== 0) {
        items.push(`Свечей №6 - ${item6} шт.`)
    }

    items.push(`Общая сумма = ${totalCost}`);
    tg.sendData(items)
});
