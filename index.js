// Data Type(A data type is a data carrier)
// It is of two type
// 1. primitive/ value data type(when ever we create  variables then each and every time it is creating a new memory )
// 2. Non primitive(when a variable declares it will not creating extra memory in same one memory it will store the data )

//  

// variable scope

// 1. var x=10;
// function printData(){
//     document.writeln(x)
// }
// printData() ans: 10

//2. var x=10;
// function printData(){
//     x=11;
//     document.writeln(x)
// }
// printData() ans: 11

// 3. var x=10;
// function printData(){
//     x=11;
//     document.writeln(x)
// }
// x=12;
// printData(); ans: 11

//4. var x=10;
// function printData(){
//  document.writeln(x);
//  x = 11;
// }
// x=12;
// printData(); ans:12

//5. var x=10;
// function printData(){
//    var x = 11;
//  document.writeln(x);
 
// }
// x=12;
// printData(); ans : 11

// var x=10;
// function printData(){
//     x = 11;
//  document.writeln(x);
 
// }
// function printData1(){
//     x=12;
//   document.writeln(x);
  
//  }

// printData();
// printData1();

// var x=10;
// function printData(){
//     x = 11;
//  document.writeln(x);
 
// }
// function printData1(){
 
//     document.writeln(x);
  
//  }

// printData(); ans:11
// printData1(); ans:

// var x=10;
// function printData(){
//     x = 11;
//  document.writeln(x);
 
// }
// function printData1(){
 
//     document.writeln(x);
  
//  }
//  printData1(); ans:10
// printData(); ans:11

// var x=10;
// function printData(){
//  var x = 11; // It is a local scope
//  document.writeln(x);
 
// }
// function printData1(){
 
//     document.writeln(x);
  
//  }

// printData(); ans: 11
// printData1(); ans: 10

// var x=10;
// function printData(){
//   x = 11; 
//  document.writeln(x);
 
// }
// function printData1(){ 
 
//     document.writeln(x);
  
//  }

// printData(); ans: 11
// printData1(); ans: 11
// explanation : After printData() runs, the global variable x has changed from 10 to 11.
// Both functions refer to the same variable x, so calling printData1() after printData() prints the updated value 11.

//  function printData(){
//     var x = 11; // local variable
//      document.writeln(x);
     
//     }
//     function printData1(){ 
     
//         document.writeln(x);
      
//      }
    
//     printData();  // 11
//     printData1(); // null
//     //Calling printData(): Outputs 11 because it accesses the local variable x.
// Calling printData1(): Results in a ReferenceError because x is not defined in the global scope.
// So, the output from printData() will be 11, and printData1() will throw an error.

// function printData(){
//          x = 11; // local variable
//          document.writeln(x);
         
//         }
//         function printData1(){ 
         
//             document.writeln(x);
          
//          }
        
//         printData();  //11
//         printData1(); // 11
// // explanation: When you write x = 11; without any declaration keyword, JavaScript treats x as a global variable (if it hasn't been declared before). This means that x is now accessible from anywhere in your code, including in other functions.
// document.writeln(x); outputs 11 because x has just been assigned that value.
// When printData1() is called, it accesses the global variable x, which was set to 11 by the previous function call.
// document.writeln(x); thus outputs 11 again.

// function printData(){
//    x = 11; // undeclared variable
//   document.writeln(x);
             
// }
// function printData1(){ 
    
//    document.writeln(x);
              
// }
// printData1(); // Undefined
// printData();  // 11

// Local Scope variable(A variable created inside of a function is a local scope variable)
// Block scope variable(A variable defined inside a function)


// function printData(){
//     let x = 10;
//    for(let x=1; x<2; x++){
//       document.writeln(x);
//    }
//   document.writeln(x);
             
// }
// function printData1(){ 
    
//    document.writeln(x);
              
// }
// printData(); //1 10


// function printData(){
//     x = 10;
//   for( x=1; x<2; x++){
//      document.writeln(x);
//   }
//  document.writeln(x);
            
// }
// function printData1(){ 
   
//   document.writeln(x);
             
// }
// printData(); // 1 2


// function printData(){
//   let x = 10;
//  for( x=1; x<2; x++){
//     document.writeln(x);
//  }
// document.writeln(x);
           
// }
// function printData1(){ 
  
//  document.writeln(x);
            
// }
// printData(); // 1 2
// explanation: let x = 10; declares a block-scoped variable x and initializes it with the value 10.
// The for loop: for (x = 1; x < 2; x++) reassigns x to 1 and then runs the loop as long as x is less than 2. Inside the loop, it prints the value of x, which will be 1 during the first (and only) iteration of the loop.
// After the loop, document.writeln(x); prints the value of x again. Since the loop increments x to 2, this will print 2.


"use strict";
function printData(){
   window.x = 10;
     
 document.writeln(window.x);
 }

function printData1(){ 
  
 document.writeln(window.x);
            
}
printData();
printData1();