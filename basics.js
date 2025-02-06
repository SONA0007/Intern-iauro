// concept of hoisting in javascript
// hoisting is a javascript mechanism where variables and 
// function declarations are moved to the top of their scope before code execution.

// example 1
console.log(x); // undefined
var x = 5;
// in this case, the variable x is hoisted to the top of the scope,
// so the code is interpreted as follows:
console.log("Before hoisting: ", x); // undefined

x = 15;
console.log("After hoisting: ", x); // 15
// in this case, the variable x is hoisted to the top of the scope

function fibFactory(num) {
    return (function fib(n) {
      if (n < 2){
        return n
      }
      return fib(n - 1) + fib (n - 2)
    })(num);
  }
const tenthFib = fibFactory(10);
const fifteenthFib = fibFactory(15);
const twentiethFib = fibFactory(20);
  
console.log(tenthFib, fifteenthFib, twentiethFib);