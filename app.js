// 1Write a JavaScript program that accepts two numbers in two prompts and
// displays the larger one in the console.

// var num1 = +prompt("enter the number...");
// var num2 = +prompt("enter the number...");

// if(num1>num2){
//    console.log(num1);
// }else{
//     console.log(num2);
// };


//2 Write a JavaScript conditional statement to find the sign of a number. Display
// an alert box with the specified sign.


// var num= +prompt("enter number...");

// if(num > 0){
//     alert("The sign is + ");

// }else if(num < 0){
//     alert("The sign is - ");
// }else{
//     console.log(error)
// }

//3 Write a JavaScript program that accepts five numbers in five prompts and
// displays the larger one in the console.


// var i1, i2, i3, i4, i5;
// var largest;

// i1= +prompt ("Please enter first num");
// i2= +prompt ("Please enter second num");
// i3= +prompt ("Please enter third num");
// i4= +prompt ("Please enter fourth num");
// i5= +prompt ("Please enter fifth num");

// largest = Math.max(i1, i2, i3, i4, i5)
//     console.log(+ largest + " is the largest");

// 4. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// will check if the current number is odd or even, and display a message to the
// screen.

// for (var x=0; x<=15; x++) {
//     if (x === 0) {
//             console.log(x +  " is even");
//     }
//     else if (x % 2 === 0) {
//             console.log(x + " is even");   
//     }
//     else {
//             console.log(x + " is odd");
//     }
// }


// 5. Write a JavaScript program which computes the average marks of the
// following students Then, this average is used to determine the corresponding
// grade.

// var students = [["ali", 70], ["farhan", 47], ["sana", 88], ["dua", 95], ["zaki", 68]];

// var Avgmarks = 0;

// for (var i=0; i < students.length; i++) {
//         Avgmarks += students[i][1];
//         var avg = (Avgmarks/students.length);
// }

// console.log("Average grade: " + (Avgmarks)/students.length);

//         if (avg < 60){
//           console.log("Grade : F");      
//           } 
//         else if (avg < 70) {
//                 console.log("Grade : D"); 
//                   } 
//         else if (avg < 80) 
//              {
//                 console.log("Grade : C"); 
//         } else if (avg < 90) {
//                 console.log("Grade : B"); 
//         } else if (avg < 100) {
//                 console.log("Grade : A"); 
// }


// 6. Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five
// print "Buzz". For numbers which are multiples of both three and five print
// "FizzBuzz".

// for ( var i = 1; i <= 100; i++ )
// {
//   if ( i%3 === 0 ) 
//   {
//     console.log(i+ " Fizz" );
//   }
//   else if ( i%5 === 0 ) 
//   {
//     console.log(i+ " Buzz" );
//   }
//   if ( i%3 === 0 && i%5 === 0 )
//   {
//     console.log( i + " FizzBuzz" );
//   }
//   else
//   {
//     console.log(i);
//   }
// }


// 7Write a JavaScript program to construct the following pattern, using a nested
// for loop.

// var x,y,z;
// for(x=1; x<=6; x++)
// {
//    for (y=1; y<x; y++)
//      {
//     z=z+("*");        
//       }
//  console.log(z);
//   z='';    
// }

