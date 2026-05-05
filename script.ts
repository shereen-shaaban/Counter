// Create a counter class that has counter value - number 
// ● Counter Class contains 3 functions one to increase the counter value , one to 
// decrease the counter value and the last one to reset counter value
// ● Create a new instance from Counter class and use the class inner functions to 
// change the counter value.
// ● Append the the counter value to the html


let value = document.querySelector(".out") ;
let increaseBtn = document.querySelector(".increase") ;

class Counter 
{
    counterValue: number;
    constructor(counterValue: number) {
        this.counterValue = counterValue;
    }

    get counter() {
        return this.counterValue;
    }
    increaseCounter():number  {
        return ++this.counterValue;
    }
    decreaseCounter():number {
        return --this.counterValue;
    }
    resetCounter():number {
         return this.counterValue = 0;
    }
}

const counter = new Counter(1);
counter.increaseCounter();
counter.decreaseCounter();
counter.resetCounter();
value!.innerHTML = counter.counter.toString();
function increase() {
    value!.innerHTML = counter.increaseCounter().toString();
}
function decrease() {
    value!.innerHTML = counter.decreaseCounter().toString();
}
function reset() {
    value!.innerHTML = counter.resetCounter().toString();
}
console.log("Hello, TypeScript!");