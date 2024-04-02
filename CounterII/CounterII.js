/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

function createCounter(init) {
    let counter = init;
    return {
        increment: function() {
            return ++counter;
        },
        decrement: function() {
            return --counter;
        },
        reset: function(){
            counter = init;
            return counter;
        }
    }
}


  const counter = createCounter(5)
  counter.increment(); // 6
  counter.reset(); // 5
  counter.decrement(); // 4
 