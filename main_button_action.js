let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";



Telegram.WebApp.onEvent("mainButtonClicked", function () {
    let totalCost = candle_totalCost + flowerpot_totalCost;
    const candle_names = ["Свечей \"Грейпфрут\"", "Свечей \"Лето на виноградной плантации\"", "Свечей \"Уд & Ваниль\"", "Свечей \"Свежесть манго\"", "Свечей \"Космическая ностальгия\""]
    const flowerpot_names = ["Кашпо зеленого цвета", "Кашпо розового цвета", "Кашпо фиолетового цвета", "Кашпо черного цвета", "Кашпо желтого цвета", "Поднос зеленого цвета"]
    const all_items = []

    for (let i = 0; i < candle_item.length; i++) {
        if (countCheck(candle_item[i])) {
            all_items.push(`${candle_names[i]} - ${candle_item[i]} шт.`)
        }
    }
    for (let i = 0; i < flowerpot_item.length; i++) {
        if (countCheck(flowerpot_item[i])) {
            all_items.push(`${flowerpot_names[i]} - ${flowerpot_item[i]} шт.`)
        }
    }
    if (totalCost !== 0) {
        all_items.push(`Общая сумма = ${totalCost}`);
        tg.sendData(all_items)
    } else {
        tg.showAlert("Корзина пуста. Чтобы что-то купить - надо что-то выбрать")
    }
});