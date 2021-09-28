const initialPrice = document.querySelector("#initial-price");
const stockQuantity = document.querySelector("#stock-quantity");
const currentPrice = document.querySelector("#current-price");
const outputBtn = document.querySelector("#output-btn");
const outputEl = document.querySelector("#output");

outputBtn.addEventListener('click',submitHandler);

function submitHandler(){
    var ip = Number(initialPrice.value);
    var qty = Number(stockQuantity.value);
    var curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, curr);
}

function calculateProfitAndLoss(initial, quqantity, current){
    if(initial > current){
        var loss = (initial - current ) * quqantity;
        var lossPercentage = (loss / initial) * 100;
        showOutput(
            `Hey, the loss is ${loss} and the percent is ${lossPercentage}%`
          );
    }else if (current > initial){
        var profit = (current - initial) * quqantity;
        var profitPercentage = (profit / initial) * 100;
        showOutput(
            `Hey, the profit is ${profit} and the percent is ${profitPercentage}%`
          );
    }else{
        showOutput(`No pain no gain and no gain no pain`);
         
    }
}

function showOutput(message){
    outputEl.innerHTML = message;

}