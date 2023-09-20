///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
console.log("------------")
console.log("The section below is when I added all of the acers that were picked in the last 7 Days.")
console.log("------------")

let totalFuji = 0;
let totalGala = 0;
let totalPink = 0;

for (i = 0; i < fujiAcres.length; i++) {
    totalFuji = totalFuji + fujiAcres[i]
    // console.log(totalFuji);
}

for (i = 0; i < galaAcres.length; i++) {
    totalGala = totalGala + galaAcres[i]
    // console.log(totalGala);
}

for (i = 0; i < pinkAcres.length; i++) {
    totalPink = totalPink + pinkAcres[i];
    // console.log(totalPink);
}

// console.log(totalFuji);
// console.log(totalGala);
// console.log(totalPink);

let totalAcres = totalFuji + totalGala + totalPink;
console.log(totalAcres);




//For problem 1 I chose to add up each array seperately and then add the results from each array together.
//I had a little trouble figuring out how to take the numbers in each array and add them together so I found an example code online (www.sololearn.com if you're interested) that example code is just below.


// var arr = [1,2,3,4,34,24]
// var sum = 0;
// for(i=0;i<arr.length;i++){
// sum += arr[i];
// }
// console.log(sum);


//After I verified that I added up each array correctly I just added them together and saved it as a variable. Then just console.log() the new variable.






// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE
console.log("------------")
console.log("This section below is when I took the total acres that were picked each day.")
console.log("------------")


let averageDailyAcres = totalAcres / 7;
console.log(averageDailyAcres);



//I thought about having a divide by array.length thing instead of just having divided by 3. But then I figured that I would need to have arrays inside of arrays... and I don't know how to do that yet.








// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE
console.log("------------")
console.log("This section below is when I figured out how many days it would take to pick all of the apples in all of the acres.")
console.log("------------")



while (acresLeft > 0) {

    acresLeft = acresLeft - averageDailyAcres;

    days++;
}

console.log(days)




//Problem 3 was pretty self explanitory, so I don't know how to explain my thought process asside from "I just did what the problem asked me to do."







// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE
console.log("------------")
console.log("This section below is where I figured out how many tons of apples were picked in each orchard.")
console.log("------------")


let fujiCopy = fujiAcres.slice();
let galaCopy = galaAcres.slice();
let pinkCopy = pinkAcres.slice();


let fujiTons = [];
let galaTons = [];
let pinkTons = [];


//Math for Fuji below

for (i = 0; i < fujiCopy.length; i++){
    let fujiMath = fujiCopy[i];

    fujiMath = fujiMath * 6.5;
    // console.log(fujiMath);
    
    fujiTons.push(fujiMath);
}
// console.log(fujiTons);


//Math for Fuji above


//Math for Gala below

for (i = 0; i < galaCopy.length; i++){
    let galaMath = galaCopy[i];

    galaMath = galaMath * 6.5;
    // console.log(galaMath);
    
    galaTons.push(galaMath);
}
// console.log(galaTons);



//Math for Gala above

//Math for Pink below

for (i = 0; i < pinkCopy.length; i++){
    let pinkMath = pinkCopy[i];

    pinkMath = pinkMath * 6.5;
    // console.log(pinkMath);
    
    pinkTons.push(pinkMath);
}
// console.log(pinkTons);



//Math for Pink above

//Outputs below

console.log(fujiTons);
console.log("------------")
console.log(galaTons);
console.log("------------")
console.log(pinkTons);

//Outputs above





//OK... So,
//It took me quite a while to figure out how to multiply 6.5 to each item in the array and then take that number and push it to an array.
//I tested out a lot of ways to do it and ran into a lot of errors and infinite loops. But once I figured fuji out I just copied and pasted it then changed the variables to match the gala and pink orchards.







// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 
console.log("------------")
console.log("This section below is were I took the tons of apples from each orchard and added them up. Then I converted that amount into pounds.")
console.log("------------")



let fujiTotalTons = 0;
let galaTotalTons = 0;
let pinkTotalTons = 0;

let fujiPounds = 0;
let galaPounds = 0;
let pinkPounds = 0;



for (i = 0; i < fujiTons.length; i++) {
    fujiTotalTons = fujiTotalTons + fujiTons[i]
    
}


for (i = 0; i < galaTons.length; i++) {
    galaTotalTons = galaTotalTons + galaTons[i]
    
}

for (i = 0; i < pinkTons.length; i++) {
    pinkTotalTons = pinkTotalTons + pinkTons[i]
    
}


fujiPounds = fujiTotalTons * 2000;
galaPounds = galaTotalTons * 2000;
pinkPounds = pinkTotalTons * 2000;

console.log(fujiTotalTons);
console.log(galaTotalTons);
console.log(pinkTotalTons);

console.log("------------")

console.log(fujiPounds);
console.log(galaPounds);
console.log(pinkPounds);



//Part of what took so long in problem 4 is because I actually did part of problem 5 as well as problem 4 at the same time. In problem 4 I also took the ____Tons array and added them all together.
//So I just seperated what I did in problem 4 into 4 and 5 and then I cleaned up both and make the variables easier for me to understand. Then I added in the math to turn the ____TotalTons array into the ____Pound number.



// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE
console.log("------------")
console.log("This section below is where I figured out how much money all of the apples were worth. (seperated by the type of apple)")
console.log("------------")


let fujiProfit = 0;
let galaProfit = 0;
let pinkProfit = 0;



fujiProfit = fujiPounds * fujiPrice;
galaProfit = galaPounds * galaPrice;
pinkProfit = pinkPounds * pinkPrice;


console.log(fujiProfit);
console.log("------------")
console.log(galaProfit);
console.log("------------")
console.log(pinkProfit);


//I just did the same thing that I did in the last problem but instead of multiplying Tons by 2000, I just multiplied Pounds by Price.
//I did have a small problem though, I console.logged the Price instead of the Profit... I don't want to tell you how long that went unnoticed.


// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
console.log("------------")
console.log("This section below is where I added up all of the profits from each type of apple to find out the total price.")
console.log("------------")


let totalProfit = 0;

totalProfit = fujiProfit + galaProfit + pinkProfit;

console.log(totalProfit);


//I just added all of the Profit's to get the Total Profit.
//The last two questions were pretty simple, especially after getting though problems 4 and 5.




