 



 function tipCalculator() {
     let input = document.querySelector('.amount > div > input').value
     const sum = ((input / 100) * 15).toFixed(2)
    const HTML = `<p>${sum} $</p>`
     const tipDOM = document.querySelector('.tip > p')
     tipDOM.innerHTML = HTML;
     console.log(tipDOM.innerHTML);
     
 }

export { tipCalculator }