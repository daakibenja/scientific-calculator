class Calculator {
    constructor() {
        this.screen = {
            mode:document.getElementById('mode')
        };
        this.input = [];
        //to know of normal alpha or shift is active
        this.active = ''
        this.power = 1;
    }
    update() {
        this.screen.mode.innerText = this.active.toUpperCase();
    }
    shift() {
        if (this.active === 's') {
            this.active = '';
        }
        else {
            this.active = 's';
        }
        this.update();
    }
    alpha() {
        if (this.active === 'a') {
            this.active = '';
        }
        else {
            this.active = 'a';
        }
        this.update();
    }
    leftArrow() {
        expr.setAttribute('contenteditable', 'true');
        console.log('now content edotable');
    }
    rightArrow() {
        
    }
    mode() {
        
    }
    second() {
        
    }
    calc() {
        
    }
    integradx() {
        
    }
    upTriangle() {
        
    }
    downTriangle() {
        
    }
    inversex() {
        
    }
    logxbasea() {
        
    }
    xOvery() {
        
    }
    sqrtOfAny() {
        
    }
    xPower2() {
        this.input.push('^2');
    }
    xPowerAny() {
        this.input.push('^');
    }
    log() {
        this.input.push('log(');
    }
    ln() {
        this.input.push('ln(');
    }
    negative() {
        
    }
    deg() {
        
    }
    hyp() {
        
    }
    sin() {
        if (this.active == 's') {
            this.input.push('arcsin(');
        }
        else {
            this.input.push('sin(');
        }
        
    }
    cos() {
        this.input.push('cos(');
    }
    tan() {
        this.input.push('tan(');
    }
    rcl() {
        
    }
    eng() {
        
    }
    openBraket() {
        this.input.push('(');
    }
    closeBracket() {
        this.input.push(')');
    }
    sd() {
        
    }
    mplus() {
        
    }
    seven() {
        this.input.push(7);
    }
    eight() {
        this.input.push(8);
    }
    nine() {
        this.input.push(9);
    }
    del() {
        this.input.pop();
        
    }
    ac() {
        if (this.power == 0) {
            display.style = "background-image: none;\
            background-color: rgb(160, 197, 197);\
            border: 1px solid gray;;"
            console.log('switched on');
            this.power = 1;
        }
        if (this.active=='s'&&this.power==1) {
            display.style = "background-image: url(new.jpg);\
            background-repeat: no-repeat;\
            background-color: black;\
            border: 1px solid gray;;"
            this.power = 0;
            this.active = '';
            this.update();
            console.log('switched off');
            return 0;
        }
        else {
            this.input = [];
            console.log('input cleared');
        }
        
        
    }
    four() {
        this.input.push(4);
    }
    five() {
        this.input.push(5);
    }
    six() {
        this.input.push(6);
    }
    times() {
        this.input.push('*');
    }
    divide() {
        this.input.push('/');
    }
    one() {
        this.input.push(1);
    }
    two() {
        this.input.push(2);
    }
    three() {
        this.input.push('3');
    }
    plus() {
        this.input.push('+');
    }
    minus() {
        this.input.push('-');
    }
    zero() {
        this.input.push(0);
    }
    dot() {
        this.input.push('.');
    }
    exp() {
        
    }
    ans() {
        
    }
    equals() {
        
    }
}