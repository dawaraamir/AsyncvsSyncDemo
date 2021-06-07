// By deafault js is synchronous which tasks are completed one after another.
// Asynchronous tasks are completed independantly of one another. 

//synchronous example
console.log("Prints first");
console.log("Prints second");
console.log("Prints last");

//asynchronous example
console.log("Prints first");
setTimeout(()=>{
  console.log("This prints after 2 seconds");
},2000)
 console.log("This prints at same time as first one")

//callbacks are nested functions inside another function as an argument
function one(callback) {
    console.log('This excusetes first')
    setTimeout(callback, 1000)
  }
  function two() {
    console.log('This excuted 1 second after first function')
  }
  one(two)

  //promise helps to avoid deep nesting or "callback hell". It can be in a state of pending, resolved, or rejected. If promise is resolved you can use promise.then but if its rejected you can use promise.catch().
  function one() {
    console.log('This excusetes first')
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 1000) 
    }) 
  }
  function two() {
    console.log('this excucted as a resolve')
  }
  one().then(two)

async/await allows you to wrtie async that almost looks like synchronous. 
function one() {
    console.log('This excusetes first')
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 1000) 
    })
  }
  function two() {
    console.log('this excutes almost like a sync')
  }
  async function syncItUp() {
    await one()
    two()
  }
  syncItUp()
