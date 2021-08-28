// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)


// for (let num = 1; num<= 10; num+= 1) {
//     console.log(num);
// }

// for (let i = 1; i <= 20; i+= 2){
//     console.log(i)
// }


// for (let i = 100; i>= 0; i-= 10){
//     console.log(i)
// }

// for (let i = 10; i <= 1000; i *= 10){
//     console.log(i)
// }


// for (let i = 0; i <= 5; i += 25){
//     console.log(i)
// }

// for (let i=25; i>=0 ; i-=5){
//     console.log(i)
// }

// for (let i = 20; i>= 0; i++) {
//     console.log(i)
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`i is:${i}`)
//     for (let j = 1; j < 4; j++) {
//         console.log(`     j is: ${j}`)
//     }
// }


// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika'],
// ]

//    for(let i = 0; i < seatingChart.length; i++) {
//      const row = seatingChart[i];
//      for (let j = 0; j < row.length; j++){
//          console.log(row[j])
//      }
//    }


//  let count = 0;
//  while (count < 10) {
//      count++;
//      console.log(count)

//  }

 
 // <----While loops--->

// const SECRET = "BabyHippo";

// let guess = prompt("enter the secret code...");
// while (guess !== SECRET) {
//     guess = prompt("enter the secret code...");
// }

// console.log("CONGRATS YOU GOT THE SECRET !!!!")

// let input = prompt("Hey say smoething!")
// while (true) {
//   input = prompt(input);
//   if(input.toLowerCase() === "stop coyping me") break;
    
// }
// console.log("OK YOU WIN")


//  for (let i = 0; i < 1000; i++) {
//      console.log(i);
//      if(i === 100) break;
//  }


// let maximum = parseInt(prompt("Enter the maximum number!"));
// while(!maximum){
//     maximum = parseInt(prompt("Enter a valid number!"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;


//  let guess = parseInt(prompt("Enter your first guess!"));
// let attempts = 1;

//  while (parseInt(guess) !== targetNum) {
//      if(guess === 'q') break;
//      attempts++;
//      if(guess > targetNum) {
//          guess = prompt("Too high! Enter a new guess:");
//      } else {
//          guess = prompt("Too low! Enter a new guess:");
//      }
//     }

//      if (guess === 'q') {
//          console.log("OK, YOU QUIT")
//      } else {
//          console.log("CONGRATS YOU WIN!")
//         console.log(`You got it! It took you ${attempts} guesses`);
//      }
 
// const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer', 'gunners'];

// for(let i = 0; i < subreddits.length; i++){
//     console.log(`Visit reddit.com/r/${subreddits[i]}`)
// }

// for(let subreddit of subreddits){
//     console.log(`Visit reddit.com/r/${subreddit}`)
// }

// for (let char of "hello world"){
//     console.log(char)
// }

// const testScores = {
//     keenan: 80,
//     damon: 67,
//     kim: 89,
//     shawn: 91,
//     marlon: 72,
//     dwayne: 77,
//     nadia: 83,
//     elvira: 97,
//     diedre: 81,
//     vonnie: 60
// }

// for (let person in  testScores) {
//     console.log(`${person} scored ${testScores[person]}`);
// }
// let total = 0;
// let scores = Object.values(testScores);
// for(let score of scores){
//     total += score;
// }
// console.log(total / scores.length)