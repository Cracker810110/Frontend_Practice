/* Printing */
// console.log("Hello World");
// document.write("Hello World");
// alert("Hello World");
// /* Containers & Datatypes */

// /*There are seven types of premative datatypes */

// var a = 1; // Numeric
// let b = "Hi"; //String
// const c = 12.003; //Numeric
// let ab = true; //Boolean
// let bc = null; //null
// let ca = undefined; //undefined
// const abc = BigInt('98742126'); //BigInt
// let cba = Symbol("Hello"); //Symbol


// /* Non-prwmative datatype */

// const abdulMukit = [ {
//   fullName: "Abdul Mukit Rahman",
//   age: 17,
//   class: "10th",
//   address: "Narayanganj",
//   martialStatus:null,
//   jobStatus: undefined
// },
// {
//   state: "Dhaka",
//   zip_Code: 1400,
//   roomNum: "8/1"
// }

// ]

// abdulMukit['fullName']="Cracker912131"

// console.log(abdulMukit['fullName'],typeof('abdulMukit'[jobStatus]))


// Arithmetic Oparators

// let x = 4;
// let y = 8;
// document.write(x+y);
// document.write(x-y);
// document.write(x*y);
// document.write(x/y);
// document.write(x%y); //Modulus
// document.write(x**y); //Exponentiation

// // Unary Operators
// let z=2;
// let v=5;
// console.log("z-- =", z--);
// console.log(z);
// console.log("--v =", --v);
// console.log(v);
// let t=56;
// let u=89;
// console.log("t++ =", t++);
// console.log(t);
// console.log("++u", ++u);
// console.log(u);

// Assingment Operators

// let aa=5;
// let bb=6;
// let cc=4;
// let dd=9;
// let ee=4;
// let ff=2;
// aa += 4;
// console.log("aa =", aa);
// bb -= 4;
// console.log("bb =", bb);
// cc *= 1;
// console.log("cc =", cc);
// dd /= 2;
// console.log("dd =", dd);
// ee %= 2;
// console.log("ee =", ee);
// ff **=1;
// console.log("ff =", ff);

// //Comparison Operators

// let aaa = 5;
// let bbb = "5"; // This is important!

// console.log("aaa == bbb", aaa == bbb); //true
// console.log("aaa != bbb", aaa != bbb); //false
// console.log("aaa === bbb", aaa === bbb); //false
// console.log("aaa !== bbb", aaa !== bbb); //true

// let ccc=4;
// let ddd=6;
// console.log("ccc < ddd", ccc < ddd);
// console.log("ccc > ddd", ccc > ddd);
// console.log("ccc <= ddd", ddd >= ccc);
// console.log("ccc >= ddd", ddd <= ccc);

// Logical Operators

// let eee=183;
// let fff=93;
// let cond1= eee > fff;
// let cond2= eee === 183;
// console.log("cond1 && cond2 =", cond1 && cond2);
// console.log("cond1 && cond2 =", cond1 || cond2);
// let cond3= 183;
// let cond4= 93;
// console.log("(183 > 93)", !(cond3 > cond4));
// console.log("(183 === 183)", !(cond3 === 183));

// Bitwise Operators
/* I am not going to use this */

// Conditional Statements

// let age = 18;

// if (age >= 18) {
//     console.log("You are eligible for voting");
//   }
//   if (age < 18) {
//       console.log("You are not eligible for voting");
//     }

// let mode = "dark";
// mode = "light";
// let color;
// console.log(typeof color);

//   if (mode === "dark") {
//     color = "black";
//     console.log("You are in dark mode");
//   }
//   if (mode === "light") {
//     color = "white";
//     console.log("You are in light mode");
//   }
  
  // if - else statement

  let mode2 = "dark";
  let mode3 = "light";
  let pageColor = "dark-mode";
  let pageColor2 = "white-mode";
  let color;
  if (mode2 === "dark") {
    pageColor = "dark-mode";
    color = "black";
    console.log("You are in dark mode","and", "color is", color);
  } else if (mode3 === "light") {
    pageColor = "white-mode";
    color = "white";
    console.log("You are in light mode" ,"and", "color is", color);
  }