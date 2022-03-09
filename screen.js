/**
 * @author Benjamin Daaki <richarddaaki4@gmail.com>
 * @copyright CodeLord Calculator Inc
 * @version 1.0.0
 * @license MIT
 * 
*/


/**
 * This is the screen of the claculator.
 * It has all the methods and properties of the
 * claculator screen.
 */
class Screen{
    /**
     * 
     * @param {HTMLElement} el the html element where the screen should be rendered
     * 
     */
    constructor(el){
        this.input = [];
        this.output = [];
        this.displayIndicators = [];
        this.menu = [];
        this.config = {
            'scrollable':false,
            'theme':'b/w',
            'fontColor':'black',
            'backgroundColor':'white',
            'icons':'off',
            'mode':'normal',
            'touchable':false,
            'resizeable':false,
            'animation':false

        };
        this.styles = {};
        this.htmlDiv = el;
        

    }
    processOutput() {
        
    }
    processInput(){

    }


} 