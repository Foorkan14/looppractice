//example 1 
// const animals = ["lion", "tigers", "bears"];

// for (let i=0; i<animals.length; i++){ //the length of the animals array is the amount of items within the array, so in this array we have 3 items and so when i loops through the array it will turn into each value within the array as it goes through the loop
//     console.log(i, animals[i]);
// }

//example 2
//print each score out 
// const examScores = [90, 50, 14, 12, 55, 66];
// for(let i=0; i<examScores.length; i++){
//     console.log(i, examScores[i]); // i is accessing each individual element within the array
// }

//example 3 looping through objects that are nested within a array
// const myStudents = [
//     {
//         firstName : 'lion' ,
//         grade : 99
//     },
//     {
//         firstName : 'don',
//         grade : 45
//     },
//     {
//         firstName : 'cena',
//         grade : 0
//     },
//     {
//         firstName : 'aj styles',
//         grade : 100
//     }
// ];

// for(let i = 0; i<myStudents.length; i++){
//     let student = myStudents[i];
//     console.log(`${student.firstName} scored ${student.grade}`);
// }


//example 3 print average of all students
// let total = 0;
// for(let i = 0; i<myStudents.length; i++){
//     let student = myStudents[i];
//     total+=student.grade;
// }
// console.log(total/myStudents.length) //we dont divide by current number of students, because that number can change so we decided to divide by the length of the array, because even if that length changes we should not have a problem
// //example 5 looping through a string but we will loop through it backwards

// // const word = "stressed";
// // for(let i = word.length -1; i>=0; i--){
// //     console.log(word[i]);
// // }





//example 6 nested loops

// for(let i = 1; i<=10; i++){
//     console.log('outer loop:', i);
//     for(let j = 10; j >=0; j-=2){
//         console.log(' inner loop', j);
//     }
// }
//outer loop has to wait for inner loop to terminate before it can proceed with it's new round of loops


//example 7 of nested loops with a array

// const gameBoard = [
//     [4, 32, 8, 4 ],
//     [64, 0, 32, 2 ],
//     [8, 32, 16, 4],
//     [2, 8, 4, 2]
// ];

// let totalScore = 0;
// for(let i = 0; i <gameBoard.length; i++){
//     let row = gameBoard[i];
//     for(let j = 0; j < row.length; j++){
//         totalScore =+ row[j];
//     }
// }
// one of the reasons why we would use for loop is if we wanted to generate a set range of numbers 

//WHILE LOOPS
//while loops continue to run as long as it's test condition is true 
// 
//Example 1 converting a for loop to a while loop
// for(let i=0; i<=5; i++){
//     console.log(i);
// }

//now we convert this for loop to a while loop

// let j = 0;
// while (j<=5){
//     console.log(j);
//     j++;
// }

//why we use while loops?
//we use while loops when we do not know how many times we want the loop to run
//for example in a video game


//example 1 a guessing game, basically the while loop will run until the target variable and guess variable are the same
// const target = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);

// while (guess !== target){
//     console.log(`target: ${target} guess: ${guess}`);
//     guess = Math.floor(Math.random() * 10);
// }
// console.log(`target: ${target} guess: ${guess}`);
// console.log("you win! guess is equal to target");



// BREAK KEYWORD
//WE USE INSIDE OF LOOP TO BREAK OUT OF THE LOOP
//if you use it in a nested loop then it just stops the nested/inner loop not the outer one

//EXAMPLE with for loop
// for(let i=0; i<10; i++){
//     console.log(i);
//     if(i=== 5){
//         break;
//     }
// }


//example 2 with WHILE loop
// const target = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);

// while(true){
//     if(target === guess) break;
//     console.log(`target: ${target} guess: ${guess}`);
//     guess = Math.floor(Math.random() * 10);
// }
// console.log(`target: ${target} guess: ${guess}`);
// console.log("you win! guess is equal to target");




//FOR ... OF LOOP

// a nice and easy way of iterating over arrays (or other iterable objects)
//iterates over a iterable (things like array strings etc)

//syntax below 
// //for(variable of iterable){
//     statement
// }


//example 1 using a regular for loop and then converting it to for..of loop

// let subreddits = ["apple", "banana", "strawberry", "pineapple", "mango"];

// // for(let i=0; i< subreddits.length; i++){
// //     console.log(subreddits[i]);
// // }


// //now convert this for loop to a for ...of loop

// for(let sub of subreddits){
//     console.log(sub);
// }



//example 2 with string
// for(let char of 'cockadoodadoo'){
//     console.log(char.toUpperCase(char));
// }


//comparing FOR loop and FOR..OF loop
//example 1 from video 74 
//so outer loop goes through the length of the array, and inner loop goes through the values within each row

