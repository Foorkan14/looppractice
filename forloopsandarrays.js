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

const gameBoard = [
    [4, 32, 8, 4 ],
    [64, 0, 32, 2 ],
    [8, 32, 16, 4],
    [2, 8, 4, 2]
];
for(let i = 0; i <gameBoard.length; i++){
    let row = gameBoard[i];
    console.log(row)
    for(let j = 0; j < row.length; j++){
        console.log(row[j])
    }
}