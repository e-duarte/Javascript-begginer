// { // TDZ starts  at beginning of scope
//     console.log(bar); // undefined
//     console.log(foo); // ReferenceError

//     var bar = 1;
//     let foo = 2; // End of TDZ (for foo)
// }

// {
//     // TDZ starts at beginning of scope
//     const func = () => console.log(letVar); // OK

//     // Within the TDZ letVar access throws `ReferenceError`

//     let letVar = 3; // End of TDZ (for letVar)
//     func(); // Called outside TDZ!
// }

function test(){
    var foo = 33;
    if(foo) {
       let foo = (foo + 55); // ReferenceError
    }
 }
 test();
 