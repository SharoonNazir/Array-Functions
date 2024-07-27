let Option=prompt("Enter \n 1)Say Hello \n 2) Add 2 Numbers \n 3)Say Good bye \n 4)Push Value in Array");


function add(num1,num2){
    num1=Number(num1);
    num2=Number(num2);
let result1=num1+num2;
return result1;
}





switch(Option){

case "1":
    console.log(" Hello! ");
break;

case "2":
    let val1=prompt("Enter 1st Value");
    let val2=prompt("Enter 2nd Value");
    let result=add(val1,val2);
    console.log(result);
break;

case "3":
    console.log("Good Bye");
    break;

    case "4":
        let arr=[];
        data1=prompt("Enter Value to add in array: ");
        arr.push(data1);
        console.log(data1+" Value is pushed in Array ");
        console.log(arr);
        break;

        default:
            alert("Invalid Input");

}