
/*let  myname=prompt("Enter name: ");
for(let i=0;i<10;i++){

  
  console.log(myname);
}


let n=prompt("Enter choice: ");
switch(n){

case "1":
    console.log("This is first case");
    break;
    case "2":
        console.log("This is the second case");
        break;
default:
    console.log("This is the other case");
    break;
}*/
// function sayHello(){
// console.log("Hi");

// }

// sayHello();



// function ageEligibility(age,name){

// if(age<=18){console.log(name+"You are not eligible");}
// else {console.log(name+" You are eligible");}

// }

// ageEligibility(20,"sharoon");

// function repeat(){

// for(let i=1;i<=10;i++){
// console.log(i);}

// }

// repeat();

// //------ARRAYS-------

// let myName1=["Sharoon","Ali","Hamza"];
// console.log(myName1[2]);
// console.log("Length is: "+myName1.length);

// myName1.push("Raheel");
// myName1.push("Mubeen");
// console.log(myName1)
// console.log("Now Length is: "+myName1.length);

// let tpop=myName1.pop();
// console.log("The poped value is: "+tpop);




//----HomeWork--- Continue to skip iteration
// 1)Enter the start value amd end value from the user and print all yhe even and odd number in between them.
// 2)ASk user to enter the choice like i for say Hello, 2 to take two numbers and a 3 for sayiing good bye , 4 for pushing in the array (username: static or Dynamic) and all other inputs , display an alert that "Invalid input"

// Note: Use switch statements and functions intial

// 3) Design an example of array push, pop,length like run a loop <=20

function checkEvenOdd(num){

if(num%2==0){
  console.log(num+" is even number");
} else if(num%2==1){console.log(num + " is odd number");}

}



startVal=prompt("Enter the Staring Value ");
endVal=prompt("Enter the Ending Value ");
startVal=Number(startVal);
endVal=Number(endVal);
for (let i=startVal;i<=endVal;i++){

checkEvenOdd(i);

}
