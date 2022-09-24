const plusButton = document.querySelector('.plus-button')
const minusButton = document.querySelector('.minus-button')

const numberDisplay = document.querySelector('.counter-text')

function increaseBasketNum(){
    const currentNum = numberDisplay.innerHTML
    let toNum = parseInt(currentNum)
    toNum++
    numberDisplay.innerHTML = toNum
}
function decreaseBasketNum(){
    const currentNum = numberDisplay.innerHTML
    let toNum = parseInt(currentNum)
    if(toNum > 1){
        toNum--
        numberDisplay.innerHTML = toNum
    }
}

plusButton.addEventListener('click', increaseBasketNum)
minusButton.addEventListener('click', decreaseBasketNum)