let a = prompt("Hey whats you age?");
a = Number.parseInt(a); // Converting the string to a number
if(a<0){
  alert("This is an invalid age");
}
else if(a<9){
  alert("You are a kid and you cannot even think of driving");
}
else if(a<18 && a>=9){
  alert("You are a kid and you can even think of driving after 18");
}
else{
  alert("You can now drive as you are above 18");
}
console.log("Done")

// ternuary operator
console.log("You can", (a<18? "not drive" :"drive"))
// switch statement

// Ek variable declare karein
let day = 3;

// Switch statement 

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

// second code
let grade = "B";

switch (grade) {
  case "A":
    console.log("Excellent! 🎉");
    break;
  case "B":
    console.log("Good job! 👍");
    break;
  case "C":
    console.log("You can do better 💪");
    break;
  case "D":
    console.log("Need improvement 📚");
    break;
  default:
    console.log("Invalid grade");
}