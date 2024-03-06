// let names:string [] = ["Ali","Aslam","irfan","Mir"];
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);

//task 12
// let names:string [] = ["Ali","Aslam","irfan","Mir"];
// let Message:string = "I am study in governer house";

// console.log(names[0] + " " + Message);
// console.log(names[1] + Message);
// console.log(names[2] + Message);
// console.log(names[3] + Message);

//task 13
//let motors:string [] = ["cycle","Audi","civic"];
//motors.map((items)=> console.log(`i would like ${items}`));

// task 14
//  let Arr:string [] = ["Ali","Aslam","irfan","Mir"];
//  Arr.map((items) =>(console.log(`Dear ${items},You are invited to the dinner`)));

// task 15

//let person:string[] = ["Mir","irfan","younis","azhar"];
//let caNotAttend:string = "Mir"
//console.log(caNotAttend + " " , "can not attend the dinner");

//let guest:string = "Baba"
//person [person.indexOf(caNotAttend)] = guest;
//console.log(guest);

// task 16
let guestArr :string[] = ["Mir","ali","irfan","younis"];
let caNotAttend : string = "ali"

 let newGuest : string = "baba"
guestArr[guestArr.indexOf(caNotAttend)] = newGuest;
console.log(guestArr); 

// guestArr.map((items) =>
// console.log(`Dear ${items}, I found a bigger dinner so i am invited more people`)
// );
//part 02
let newBig : string = "azhar"
guestArr.unshift(newBig);
console.log(newBig);
//part middle
let middleName : string = "fatima"
let middleIndex = guestArr.length/3
guestArr.splice(middleIndex,0,newBig);
console.log(guestArr);

//part 4 append
guestArr.push("My baba");
console.log(guestArr); 

// part 5
guestArr.map((items) =>
console.log(`Dear ${items}, you are invited.`));

//task 17
let newMember :  string[] = ["suleman","faroque","gamoo","rahimoon"];
console.log("due to limted space only to people can be invited for dinner.");