// Part 1: Variables and Data Types (5 Questions):-

    // 1.	Declare variables using var, let, and const. Reassign and redeclare them wherever allowed, then print the results.
    var a1 = 10;
    a1 = 15; // Reassigning var variable
    var a1 = 25; // Redeclaring var variable
    let b1 = 20;
    b1 = 25; // Reassigning let variable
    // let b1 = 30; // Redeclaring let variable (will cause an error)
    const c1 = 30;
    // c1 = 35; // Reassigning const variable (will cause an error)
    // const c1 = 40; // Redeclaring const variable (will cause an error)
    console.log(a1, b1, c1); // Output: 25 25 30

    // 2.	Create variables for your name, age, and programming knowledge. Print each variable and its data type using typeof.
    var name = "Krishna Babu";
    var age = 24;
    var programmingKnowledge = true;
    console.log(name, typeof name); // Output: Krishna Babu string
    console.log(age, typeof age); // Output: 24 number
    console.log(programmingKnowledge, typeof programmingKnowledge); // Output: true boolean

    // 3.	Create an array of 5 fruits. Print the complete array, the first element, and the last element.
    var fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
    console.log(fruits); // Output: ["Apple", "Banana", "Mango", "Orange", "Grapes"]
    console.log(fruits[0]); // Output: Apple
    console.log(fruits[fruits.length - 1]); // Output: Grapes

    // 4.	Create an object containing your name, role, and CGPA. Print each property separately.
    var StudentDetails = {
        Sname : "Sudheer Kumar",
        Sno : 2254,
        CGPA : 9.2,
    }
    console.log(StudentDetails.Sname); // Output: Sudheer Kumar
    console.log(StudentDetails.Sno); // Output: 2254
    console.log(StudentDetails.CGPA); // Output: 9.2
    
    // 5.	Take the user's name and age using prompt(). Display the name using alert() and print the age in the console.
    var userName = prompt("Enter your Name: ");
    var userAge = prompt("Enter your Age: ");
    alert("Your Name is: " + userName); // Displaying name using alert
    console.log("Your Age is: " + userAge); // Printing age in the console

// Part 2: Operators (7 Questions)
    
    // 6.	Declare two numbers and perform addition, subtraction, multiplication, division, modulus, and exponentiation.
    var x1 = 10;
    var x2 = 15;
    console.log("Addition: " + (x1 + x2)); // Output: 25
    console.log("Subtraction: " + (x1 - x2)); // Output: -5
    console.log("Multiplication: " + (x1 * x2)); // Output: 150
    console.log("Division: " + (x1 / x2)); // Output: 0.6666666666666666
    console.log("Modulus: " + (x1 % x2)); // Output: 10
    console.log("Exponentiation: " + (x1 ** x2)); // Output: 100000000000000000000

    // 7.	Predict the output:
    let a2 = 5;
    console.log(a2++); // Output: 5
    console.log(a2); // Output: 6
    console.log(++a2); // Output: 7

    // 8. Predict the output:
    let a3 = 10;
    let b3 = a3--;
    let c3 = --a3;
    console.log(a3); // Output: 8
    console.log(b3); // Output: 10
    console.log(c3); // Output: 8

    // 9.	Use the +=, -=, *=, /=, and %= assignment operators on a variable and print the final value after each operation.
    var num = 20;
    num += 5; 
    console.log(num); // Output: 25
    num -= 10; 
    console.log(num); // Output: 15
    num *= 2; 
    console.log(num); // Output: 30
    num /= 3; 
    console.log(num); // Output: 10
    num %= 4; 
    console.log(num); // Output: 2      

    // 10.	Predict the results of these comparisons:
    console.log(5 == "5"); // Output: true 
    console.log(5 === "5"); // Output: false
    console.log(10 != "10"); // Output: false
    console.log(10 !== "10"); // Output: true

    // 11.	Use &&, ||, and ! to check different combinations of conditions.
    var a4 = 10;
    var b4 = 20;
    console.log(a4 > 5 && b4 < 30); // Output: true
    console.log(a4 < 5 || b4 > 15); // Output: true
    console.log(!(a4 === 10)); // Output: false

    // 12.	Use the ternary operator to check whether a user's age is 18 or above and print an appropriate message.
    var userage2 = prompt("Enter your Age: ");
    var message = (userage2 >= 18) ? "You are eligible to vote." : "You are not eligible to vote.";
    console.log(message); 
    
// Part 3: Type Casting and Conditions (6 Questions):-

    // 13. Predict the data type of each expression:
    console.log(typeof ("hello" + 10)); //String
    console.log(typeof (10 + true)); //Number
    console.log(typeof (10 + null)); //Number
    console.log(typeof ("hello" + undefined)); //String

    // 14.	Use Number() to convert a value received through prompt() into a number. Add 10 and print the result.
    var userInput = prompt("Enter a number: ");
    var convertedNumber = Number(userInput);
    var result = convertedNumber + 10;
    console.log(result); // Output: 20  

    // 15.	Use Boolean() to check the Boolean values of an empty string, a non-empty string, 0, and true.
    var emptyString = "";
    var nonEmptyString = "Hello";
    var zeroValue = 0;
    var trueValue = true;
    console.log(Boolean(emptyString)); // Output: false
    console.log(Boolean(nonEmptyString)); // Output: true
    console.log(Boolean(zeroValue)); // Output: false
    console.log(Boolean(trueValue)); // Output: true

    // 16.	Write an if-else statement to check whether a number is positive or not.
    var number = 25;
    if (number > 0) {
        console.log("The number is positive.");
    }
    else {
        console.log("The number is not positive.");
    }

    // 17.	Use else-if to display a message based on the time entered by the user: early morning, morning, afternoon, evening, or night.
    var time = 12;
    if (time >= 0 && time < 6) {
        console.log("It's early morning.");
    }   
    else if (time >= 6 && time < 12) {
        console.log("It's morning.");
    }   
    else if (time >= 12 && time < 17) {
        console.log("It's afternoon.");
    }
    else if (time >= 17 && time < 21) {
        console.log("It's evening.");
    }       
    else if (time >= 21 && time <= 23) {
        console.log("It's night.");
    }
    else {
        console.log("Invalid time entered.");
    }   

    // 18.	Create a nested if statement to check eligibility based on age, height, and weight, following the conditions in your code.
    var myAge = 25;
    var myHeight = 170; // in centimeters
    var myWeight = 65; // in kilograms
    if (myAge >= 18) {
        if (myHeight >= 160) {
            if (myWeight >= 50) {
                console.log("You are eligible.");
            }
            else {
                console.log("You are not eligible due to weight.");
            }
        }
        else {
            console.log("You are not eligible due to height.");
        }
    }
    else {
        console.log("You are not eligible due to age.");
    }

// Part 4: Switch and Loops (8 Questions):-

    // 19.	Use switch to display a message based on a traffic light color: red, yellow, or green. Display an error for an invalid color.
    var trafficlightColor = prompt("Enter the color").toLowerCase(); 
    switch(trafficlightColor) {
        case "red":
            console.log("Stop");
            break;
        case "yellow"       :
            console.log("Get Ready");
            break;
        case "green":
            console.log("Go");
            break;
        default:
            console.log("Invalid Color");   
    }

    // 20.	Use a for loop to print numbers from 1 to 20.
    for(var i = 1; i<=20; i++){
        console.log(i);
    }

    // 21.	Use a for loop to print all even numbers from 2 to 20.
    for(var i=2; i<=20; i++){
        if(i%2==0){
            console.log(i);
        }
    }

    // 22.	Use a while loop to print numbers from 10 down to 1.
    var j = 10;
    while(j>=1){
        console.log(j);
        j--;
    }

    // 23.	Use a do-while loop to print numbers from 1 to 10.
    var k = 1;
    do{
        console.log(k);
        k++;
    }while(k<=10);

    // 24.	Use a for-of loop to print each character in the string "JavaScript".
    var str = "JavaScript";
    for(var char of str){
        console.log(char);
    }

    // 25.	Use a for-of loop to print every element in an array of 5 student names.
    var StudentNames = ["Krishhna Babu", "Sudheer Kumar", "Purna Chandra", "Priya", "Sravani"];
    for(var name of StudentNames){
        console.log(name);
    }

    // 26.	Use a for-in loop to print all keys and values of this object:
    let student = {
        name: "Priya",
        role: "Frontend Developer",
        cgpa: 9
    };
    for(var key in student){
        console.log(key + ": " + student[key]);
    }

// Part 5: Mixed Practice (4 Questions):-

    // 27.	Take two numbers using prompt() and display their sum, difference, product, and remainder.
    var num1 = Number(prompt("Enter first number: "));
    var num2 = Number(prompt("Enter second number: "));
    var sum = num1 + num2;
    var difference = num1 - num2;
    var product = num1 * num2;
    var remainder = num1 % num2;
    console.log("Sum: " + sum);
    console.log("Difference: " + difference);
    console.log("Product: " + product);
    console.log("Remainder: " + remainder);

    // 28.	Create an array of 5 numbers and use a loop to print only the numbers greater than 10.
    var numbers = [5, 10, 15, 20 ,25];
    for(var i=0; i<numbers.length; i++){
        if(numbers[i] > 10){
            console.log(numbers[i]);
        }
    }

    // 29.	Take a user's age using prompt(). Use a conditional statement to check eligibility, then display the result using alert().
    var userAge = Number(prompt("Enter the age: "));
    if(userAge < 18){
        alert("Not Eligible for voting");
    }
    else{
        alert("Eligible for voting");
    }

    // 30.	Create a simple menu using switch with these options: addition, subtraction, multiplication, and division. Take two numbers from the user and display the selected operation's result.
    var n1 = Number(prompt("Enter the First Number: "));
    var n2 = Number(prompt("Enter the Second Number: "));
    var choice = Number(prompt("Select an operation:\n1.Addition\n2.Subtraction\n3.Multiplication\n4.Division"));
    switch(choice) {
        case 1:
            console.log("Addition: " + (n1+n2));
            break;
        case 2:
            console.log("Subtraction: " + (n1-n2));
            break;
        case 3: 
            console.log("Multiplication: " + (n1*n2));
            break;
        case 4: 
            console.log("Division: " + (n1/n2));
            break;
        default:
            console.log("Invalid choice");
            break;            
    }
