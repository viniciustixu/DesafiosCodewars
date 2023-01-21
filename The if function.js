/* Create a function called _if which takes 3 arguments: a value bool and 2 functions (which do not take any parameters): func1 and func2

When bool is truthy, func1 should be called, otherwise call the func2. */
function func1() {
    console.log('função 1')
}

function func2() {
    console.log('função 2')
}

function _if(bool, func1, func2) {
    if (bool == true) {
      return func1()
    } else {
      return func2()
    }
  }


  
  console.log(_if(true, func1, func2))
  