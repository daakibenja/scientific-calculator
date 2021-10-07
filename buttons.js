// All the calculator buttons
var allButtons = [];
var keyBoard = document.querySelectorAll('.buttons');
var rows = []
var calc = new Calculator();
var currentChild = keyBoard[0].firstChild
document.addEventListener('click', (e) => {
    expr.innerText = calc.input.join('');
    switch (e.target.id) {
        case 'Shift':
            calc.shift();
            break;
        case 'Alpha':
            calc.alpha();
            break;
        case 'LeftArrow':
            calc.leftArrow();
            
            break;
        case 'RightArrow':
            calc.rightArrow();
            break;
        case 'Mode':
            calc.mode();
            break;
        case 'Second':
            calc.second();
            break;
        case 'calc':
            calc.calc();
            break;
        case 'integraldx':
            calc.integradx();
            break;
        case 'upTriangle':
            calc.upTriangle();
            break;
        case 'downTriangle':
            calc.downTriangle();
            break;
        case 'inversex':
            calc.inversex();
            break;
        case 'logxbasea':
            calc.logxbasea();
            break;
        case 'xOvery':
            calc.xOvery();
            break;
        case 'sqrtOfAny':
            calc.sqrtOfAny();
            break;
        case 'xPower2':
            calc.xPower2();
            break;
        case 'xPowerAny':
            calc.xPowerAny();
            break;
        case 'log':
            calc.log();
            break;
        case 'ln':
            calc.ln();
            break;
        case 'negative':
            calc.negative();
            break;
        case 'deg':
            calc.deg();
            break;
        case 'hyp':
            calc.hyp();
            break;
        case 'sin':
            calc.sin();
            break;
        case 'cos':
            calc.cos();
            break;
        case 'tan':
            calc.tan();
            break;
        case 'rcl':
            calc.rcl();
            break;
        case 'eng':
            calc.eng();
            break;
        case 'openBracket':
            calc.openBraket();
            break;
        case 'closeBracket':
            calc.closeBracket();
            break;
        case 'sd':
            calc.sd();
            break;
        case 'mplus':
            calc.mplus();
            break;
        case 'seven':
            calc.seven();
            break;
        case 'eight':
            calc.eight();
            break;
        case 'nine':
            calc.nine();
            break;
        case 'del':
            calc.del();
            break;
        case 'ac':
            calc.ac();
            break;
        case 'four':
            calc.four();
            break;
        case 'five':
            calc.five();
            break;
        case 'six':
            calc.six();
            break;
        case 'times':
            calc.times();
            break;
        case 'divide':
            calc.divide();
            break;
        case 'one':
            calc.one();
            break;
        case 'two':
            calc.two();
            break;
        case 'three':
            calc.three();
            break;
        case 'plus':
            calc.plus();
            break;
        case 'minus':
            calc.minus();
            break;
        case 'zero':
            calc.zero();
            break;
        case 'dot':
            calc.dot();
            break;
        case 'exp':
            calc.exp();
            break;
        case 'ans':
            calc.ans();
            break;
        case 'equals':
            calc.equals();
            break;
        default:
            console.log('no match found');
    }
    expr.innerText = calc.input.join('');
    calculate(e);
})
