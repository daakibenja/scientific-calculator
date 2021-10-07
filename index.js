var display = document.querySelector('.screen')
var expr = document.getElementById('input');
var output = document.getElementById('result');
var operators = ['!', '%', '^', '*', '(', ')', '-', '+', '+', 'x', '/', '<', '>'];
var functions = ['tan', 'cos', 'sin', 'arcsin', 'arccos', 'arctan', 'e', 'sqrt', 'abs','log','ln'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var messages = [];

function bracketsMatch(expr = []){
    var open = 0;
    var closing = 0;
    for (var i = 0; i < expr.length; i++){
        if (expr[i]==='(') {
            // console.log('found',expr[i],'opening');
            open++;
        }
        else if (expr[i] === ')') {
            // console.log('found', expr[i], 'closing');
            closing++;
        }
    }
    // console.log(open,closing);
    if (open == closing) {
        // console.log('matching');
        return 0;
    }
    else if (open > closing) {
        return 1;
    }
    else if (open < closing) {
        return -1;
    }
}

function calculate(e) {
    var entered = expr.innerText;
    if (bracketsMatch(entered) == 0) {
        var tokens = tokenize(entered);
        var parsed = parser(tokens);

        parsed = computeFns(parsed);
        var postifix = infixToPostfix(parsed);
        var answer = evaluatePostfix(postifix);
    }
    else {
        answer = 'brackets mismatch';
    }

    output.innerText = answer;

    console.log(expr.innerText);
    if (e.key == "Enter") {
        e.preventDefault();
    }
}
document.body.addEventListener('clickp', (e) => { alert('fuck')});
     // event.preventDefault();
    // e.preventDefault();
    
    // console.log('yes');
    // output.innerText = evaluatePostfix(infixToPostfix(parser(tokenize(expr.value))));
    
// });

function integral(input, x) {
    var res = 0;
    for (var i = 0; i < input.length; i++) {
        power = i + 1;
        res += ((input[i] * Math.pow(x, power)) / power);
    }
    return res;
}

function quadratic() {
    // program to solve quadratic equation
    let root1, root2;

    // take input from the user
    let a = prompt("Enter the first number: ");
    let b = prompt("Enter the second number: ");
    let c = prompt("Enter the third number: ");

    // calculate discriminant
    let discriminant = b * b - 4 * a * c;

    // condition for real and different roots
    if (discriminant > 0) {
        root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

        // result
        console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
    }

    // condition for real and equal roots
    else if (discriminant == 0) {
        root1 = root2 = -b / (2 * a);

        // result
        console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
    }

    // if roots are not real
    else {
        let realPart = (-b / (2 * a)).toFixed(2);
        let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

        // result
        console.log(
            `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
        );
    }
}









function precedence(operator) {
    switch (operator) {
        case "(":
            return 4;
        case "^":
            return 3;
        case "*":
        case "/":
            return 2;
        case "+":
        case "-":
            return 1;
        default:
            return 0;
    }
}

function evaluatePostfix(pfixArray = []) {
    var evalStack = []
    for (var i = 0; i < pfixArray.length; i++) {
        var elem = pfixArray[i];
        if (!isNaN(Number(elem))) {
            elem = Number(elem);
        }
        // console.log(evalStack, elem);
        if (operators.includes(elem)) {
            
            switch (elem) {
                case '+':
                    if (evalStack.length>=2) {
                        var second = evalStack.pop();
                        var first = evalStack.pop();
                        evalStack.push(first + second);
                    }
                    else if (evalStack.length==1) {
                        // alert('wrong syntax');
                        // console.log('syntax wrong *')
                    }
                    break;
                case '-':
                    if (evalStack.length >= 2) {
                        var second = evalStack.pop();
                        var first = evalStack.pop();
                        evalStack.push(first - second);
                    }
                    else if (evalStack.length == 1) {
                        var popped = evalStack.pop();
                        evalStack.push((popped * -1));
                    }
                    else if (evalStack.length == 0) {
                        // alert('wrong syntax');
                        // console.log('syntax wrong *')
                    }
                    break;
                case '/':
                    if (evalStack.length >= 2) {
                        var second = evalStack.pop();
                        var first = evalStack.pop();
                        evalStack.push(first / second);
                    }
                    else if (evalStack.length == 1) {
                        // console.log('the / missing an operand');

                    }
                    else if (evalStack.top == 0) {
                        // alert('wrong syntax');
                        console.log('syntax wrong *')
                    }
                    break;
                case '*':
                    if (evalStack.length >=2) {
                        var second = evalStack.pop();
                        var first = evalStack.pop();
                        evalStack.push(first * second);
                    }
                    else if (evalStack.length == 1) {
                        // console.log('thee * operator expects two, one supplied');
                    }
                    else if (evalStack.length == 0) {
                        // alert('wrong syntax');
                        console.log('syntax wrong *');
                    }
                    break;
                case '^':
                    if (evalStack.length >=2) {
                        var second = evalStack.pop();
                        var first = evalStack.pop();
                        evalStack.push(Math.pow(first,second));
                    }
                    else if (evalStack.length == 1) {
                        // var popped = evalStack.pop();
                        // console.log('syntax wrong *')
                        // evalStack.push((popped * -1));
                    }
                    else if (evalStack.length == 0) {
                        // alert('wrong syntax');
                        // console.log('syntax wrong *')
                    }
                    break;
            }
        }
        else {
            evalStack.push(Number(elem));
        }
    }
    return evalStack.join('');
}
function infixToPostfix(expression = []) {
    var pfixString = [];
    var infixStack = new Stack();
    expression.unshift('(');
    expression.push(')');
    // Helper function to get the precedence of the operator


    for (var i = 0; i < expression.length; i++) {
        // console.log(infixStack);
        var c = expression[i];
        if (c === '(') {
            infixStack.push(c);
        }
        else if (isLetter(c) || !isNaN(Number(c))) {
            if (c && c != '(') {
                pfixString.push(c);
            }
        } else if (c === "+" || c === "-" || c === "*" || c === "/" || c === "^") {
            while (c != "^" && !infixStack.isEmpty() && (precedence(c) <= precedence(infixStack.peek())) && infixStack.peek() != '(') {
                var popped = infixStack.pop();
                if (popped === '(') {
                    infixStack.push('(');
                    break;
                }
                if (popped && popped != '(') {
                    pfixString.push(popped);
                }
            }
            
            infixStack.push(c);
            // console.log(infixStack.__elements, pfixString);
        }
        else if (c === ')') {
            // console.log(infixStack);
            while (c != "(" && !infixStack.isEmpty()) {
                c = infixStack.pop()
                if (c && c != '(') {
                    pfixString.push(c);
                }

            }
        }
    }
    while (!infixStack.isEmpty()) {
        if (c && c != '(') {
            pfixString.push(c);
        }
    }
    return pfixString;
}


//Retrieve tokens from the input string
function tokenize(str) {
    var result = [];

    //remove white space
    str.replace(/\s+/g, '');

    //split the str into an array of the individual characters
    str = str.split('');

    //categorize the elements into tokens
    str.forEach(function (char, idx) {
        if (isDigit(char)) {
            result.push(new Token("Literal", char));
        } else if (isLetter(char)) {
            result.push(new Token("Variable", char));
        } else if (isOperator(char)) {
            result.push(new Token("Operator", char));
        } else if (isLeftParenthesis(char)) {
            result.push(new Token("Left Parenthesis", char));
        } else if (isRightParenthesis(char)) {
            result.push(new Token("Right Parenthesis", char));
        } else if (isComma(char)) {
            result.push(new Token("Function Argument Separator", char));
        }
        else if (isDot(char)) {
            result.push(new Token('Point', char));
        }
    });
    
    return result;
}
function degToRad(angle) {
    var result = Math.round((angle * Math.PI / 180)*1e10)/1e10;
    // console.log('Dege ' + angle + '  rads ' + result);
    return result;
}
function computeFns(parsed = []) {
    var newParsed = [];
    for (var i = 0; i < parsed.length; i++){
        var token = parsed[i];
        if (isLetter(token[0])&&token.length>1) {
            if (!functions.includes(token)) {
                messages.push('Unknown function ' + token);
                return messages;
            }
            else {
                switch (token) {
                    case 'cos':
                        var argument = parsed[i + 2];
                        i = i + 3;
                        var result = Math.cos(degToRad(Number(argument)));
                        newParsed.push(Math.round(result*1e10)/1e10);
                        break;
                        
                    case 'sin':
                        var argument = parsed[i + 2];
                        i = i + 3;
                        var result = Math.sin(degToRad(Number(argument)));
                        newParsed.push(Math.round(result * 1e10) / 1e10);
                        break;
                    case 'tan':
                        var argument = parsed[i + 2];
                        // console.log(argument);
                        i = i + 3;
                        var result = Math.tan(degToRad(Number(argument)));
                        newParsed.push(Math.round(result * 1e10) / 1e10);
                        break;
                    case 'arccos':
                        var argument = parsed[i + 2];
                        i = i + 3;
                        var result = Math.acos(argument);
                        newParsed.push(Math.round(result * 1e10) / 1e10);
                        break;
                    case 'arctan':
                        var argument = parsed[i + 2];
                        i = i + 3;
                        var result = Math.atan(Number(argument));
                        newParsed.push(Math.round(result * 1e10) / 1e10);
                        break;
                    case 'arcsin':
                        var argument = parsed[i + 2];
                        i = i + 3;
                        var result = Math.asin(Number(argument));
                        newParsed.push(Math.round(result * 1e10) / 1e10);
                        break;
                    case 'log':
                        var argument = parsed[i + 2];
                        i = i + 3;
                        var result = Math.log10(Number(argument));
                        // alert(result);
                        newParsed.push(Math.round(result * 1e10) / 1e10);
                        break;
                    
                    case 'ln':
                        var argument = parsed[i + 2];
                        i = i + 3;
                        var result = Math.log(Number(argument));
                        // alert(result);
                        newParsed.push(Math.round(result * 1e10) / 1e10);
                        break;

                        
                }
            }
        }
        else {
            newParsed.push(token);
        }
    }
    return newParsed;
}
//Parse for numbers and give them meaning

function parser(tokens = []) {
    //array to hold result 
    var result = [];

    //buffer to hold individual components such that we can 
    //categorize them into numbers, functions, parameters etc
    var buffer = {
        literal: [],
        operator: [],
        decimal: [],
        variable: [],
        param:[]
    }

    var errors = {

    }

    //Helper to know which buffer is currently active
    //such that we can easily associate a group of tokens
    //to some class eg variable, param or float etc
    var active = {
        literal: 0,
        operator: 0,
        decimal: 0,
        param:0
    }

    //look throught the tokens one by one
    tokens.forEach(function (token, index) {
        // console.log(token.value);
        //use the token type to group similar tokens
        switch (token.type) {
            //for a point first check if we are working on function params
            //if yes push to the params buffer and break else push the point to
            //the literal buffer
            case 'Point':
                if (active.param) {
                    buffer.param.push(token.value);
                    break;
                }
                buffer.literal.push(token.value);
                break;
            
            //still check if we are working on function params
            //if yes push and break else push it to the literal buffer
            case 'Literal':
                if (active.param) {
                    buffer.param.push(token.value);
                    break;
                }
             
                buffer.literal.push(token.value);

                break;
            
            //still check if we are looking for params and act as usual
            //else first join the literal buffer together and push it to result
            case 'Variable':
                if (active.param) {
                    buffer.param.push(token.value);
                    break;
                }
                
                if (buffer.literal.length >= 1) {
                    
                    result.push(buffer.literal.join(''));
                    result.push('*');
                    buffer.literal = [];
                }
                //push it on both the result and buffer... we shall pop the out
                result.push(token.value);
                buffer.variable.push(token.value);
                break;
            case 'Operator':
                
                if (active.param) {
                    buffer.param.push(token.value);
                    break;
                }
                if (buffer.literal[0]) {
                    result.push(buffer.literal.join(''));
                    buffer.literal = [];
                }
                
                result.push(token.value);
                break;
            case 'Left Parenthesis':
                if (buffer.variable.length > 1) {
                    var i = 0;
                    for (; i < buffer.variable.length; i++){
                        result.pop();
                    }
                    result.push(buffer.variable.join(''));
                    buffer.variable = [];
                    active.param = 1;
                }
                if (buffer.literal[0]) {

                    result.push(buffer.literal.join(''));
                    buffer.literal = [];
                }
                result.push(token.value);
                break;
            case 'Right Parenthesis':
                
                if (active.param) {
                    active.param = 0;
                    result.push(buffer.param.join(''));
                    buffer.param = [];
                }
                if (buffer.literal[0]) {
                    result.push(buffer.literal.join(''));
                    buffer.literal = [];
                }
                result.push(token.value);
                break;
            case 'Function Argument Separator':
                result.push(token.value);
                break;
        }

    });
    if (buffer.literal) {
        result.push(buffer.literal.join(''));
    }
    // console.log(buffer.variable);
    return result;
}

class Error{
    constructor(type, description) {
        this.type = type;
        this.desc = description;
        this.help;
    }
    getHelp() {
        
    }
}
function isComma(ch) { return (ch === ","); }
function isDot(ch) { return (ch === ".");}
function isDigit(ch) { return /\d/.test(ch); }
function isLetter(ch) { return /[a-z]/i.test(ch); }
function isOperator(ch) { return /\+|-|\*|\/|\^/.test(ch); }
function isLeftParenthesis(ch) { return (ch === "("); }
function isRightParenthesis(ch) { return (ch == ")"); }


class Token {
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }
}

class Stack {
    constructor() {
        this.__elements = [];
        this.top = -1;

    }

    isEmpty() {
        if (this.top === -1) {
            return 1;
        }
        else {
            return 0;
        }
    }
    pop() {
        this.top = this.top - 1;
        return this.__elements.pop();

    }
    push(item) {
        this.__elements.push(item);
        this.top = this.top + 1;
    }
    show() {
        console.log(this.__elements);
    }
    peek() {
        return this.__elements[this.top];
    }

}