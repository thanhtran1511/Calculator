let listButtons = document.querySelectorAll('.buttons button')
let lastReturn = document.querySelector('.screen .last')
let newReturn = document.querySelector('.screen .new')

let firstNumber = null
let newNumber = null
let calculator = '+'

function reloadScreen() {
    lastReturn.innerText = firstNumber ? firstNumber + calculator : ''
    newReturn.innerText = newNumber ? newNumber : ''
}
reloadScreen()

listButtons.forEach(button => {
    button.addEventListener('click', ()=> {
        let value = button.innerText
        console.log(value)

        switch (value) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                newNumber = newNumber ? newNumber + value : value
                break
            case '.':
                newNumber = newNumber ? newNumber + value : '0.'
                break
            case '±':
                newNumber = -1 * newNumber
                break
            case '%':
                newNumber = 0.01 * newNumber
                break
            case '+':
            case '-':
            case 'x':
            case '÷':
                if(newNumber) {
                    if(firstNumber) {
                        applyCalculator()
                    }
                    calculator = value
                    firstNumber = newNumber
                    newNumber = null
                }
                break
            case '=':
                applyCalculator()
                break
            case 'AC':
                firstNumber = null
                newNumber = null
                calculator = '+'
                break
            default:
                break
        }
        reloadScreen()
    })
}) 
function applyCalculator() {
    switch (calculator) {
        case '÷':
            newNumber = (firstNumber / newNumber).toFixed(4)
            break
        case 'x':
            newNumber = firstNumber * newNumber
            break
        case '-':
            newNumber = firstNumber - newNumber
            break
        case '+':
            newNumber = Number(firstNumber) + Number(newNumber)
            break
    }
}