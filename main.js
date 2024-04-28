var number = [2, 3, 52, 26, 57];

// var sliceAns = number.slice(1, 3);
// console.log(sliceAns);

// function

// function funName() {
//   console.log("go go first");
// }
// funName();

// perameter

// function fun(perameterName) {
//   console.log("go go first");
//   console.log(perameterName);
// }
// fun(2000);

// function fun(money) {
//   console.log("go go first");
//   console.log(money);
// }
// fun(50);

// function functionName(peraName) {
//   console.log("Pls give me tk :", peraName);
// }

// functionName(500000);

// function functionName(peraName2) {
//   console.log("Pls give me tk :", peraName2);
// }
// var peraInputVar = "ami prbo na";
// functionName(peraInputVar);

// sum into function

// function functionSum(number1, number2) {
//   console.log(number1, number2);
//   var innerSum = number1 + number2;
//   console.log(innerSum);
// }

// functionSum(500, 200);

// function functionOdd(odd1, odd2, odd3, odd4) {
//   var oddSum = odd1 + odd2 + odd3 + odd4;
//   console.log(oddSum);
// }
// functionOdd(15, 20, 3, 102);

// function bringCake(money) {
//   var perPrice = 10;
//   var getCake = money / perPrice;
//   return getCake;
// }
// var returnPrice = bringCake(50);
// console.log(returnPrice);

// function googler(man) {
//   var all_googlers = 182502;
//   var count_of_bd_googler = man / all_googlers;
//   return count_of_bd_googler;
// }
// var googler_from_bd = 100;
// var returnGoogler = googler(googler_from_bd);
// console.log(returnGoogler);

// function getAverage(assignment1, assignment2, assignment3) {
//   var total_mark_of_assignment = assignment1 + assignment2 + assignment3;
//   var average = total_mark_of_assignment / 3;
//   return average;
// }
// var assignment_1_mark = 95;
// var assignment_2_mark = 79;
// var assignment_3_mark = 100;
// var returnAverage = getAverage(
//   assignment_1_mark,
//   assignment_2_mark,
//   assignment_3_mark
// );

// console.log("Final result of average :", returnAverage);

// objects start

var firstObjects = {
  myName: "mushira",
  age: 20,
  gender: "girl",
};
// console.log(firstObjects);

// console.log(firstObjects.age);

// firstObjects.myName = "Rashid";
// console.log(firstObjects);

// var keysName = Object.keys(firstObjects);
// console.log(keysName);

// var objectsName = Object.values(firstObjects);
// console.log(objectsName);

// var secondObject = {
//   one: 1,
//   two: 2,
//   twenty: 20,
//   sixteen: 16,
// };

// let fixPropertyOutput_1 = secondObject.twenty;
// console.log(fixPropertyOutput_1);

// let fixPropertyOutput_2 = secondObject["two"];
// console.log(fixPropertyOutput_2);

// let stote_3nd_keys_name = "sixteen";
// let fixPropertyOutput_3 = secondObject[stote_3nd_keys_name];
// console.log(fixPropertyOutput_3);

// let third_object = {
//   me: "musu",
//   brother: "mushab",
//   sister: "ippy",
// };

// third_object.me = "mishu";
// console.log(third_object);

// third_object["brother"] = "rairai";
// console.log(third_object);

// let change_sis = "sister";
// third_object[change_sis] = "radhu";
// console.log(third_object);

// objects for loop

var objectsLoop = {
  book: 5,
  sunglass: 2,
  keyboard: 1,
  pen: 7,
};

// var keys = Object.keys(objectsLoop);
// console.log(keys);

// var valus = Object.values(objectsLoop);
// console.log(valus);

// for (var i = 0; i < keys.length; i++) {
//   var propertyName = keys[i];

//   var valuName = objectsLoop[propertyName];
//   console.log(propertyName, valuName);
// }

// for in loop

for (var propertysName in objectsLoop) {
}

// switch

// var color = "pink";

// switch (color) {
//   case "blue":
//     console.log("you are blue");
//     break;
//   case "red":
//     console.log("you are red");
//     break;
//   case "black":
//     console.log("you are black");
//     break;
//   default:
//     console.log("you have no colour");
// }

// problem solving
//  ======= 1 )

// function foo() {
//   console.log("foo");
//   bar();
// }

// function bar() {
//   console.log("bar");
// }
// foo();

// ========= 2 )

// function make_avg(me, mir, mushab) {
//   var sum = me + mir + mushab;
//   var average = sum / 3;
//   return average;
// }
// var returnAverage = make_avg(29, 15, 22);
// console.log(returnAverage);

// ========== 3 )

// const arr = [23, 34, 77, 99, 324];

// var sum = 0;
// for (var i = 0; i < arr.length; i++) {
//   var item = arr[i];
//   sum = sum + item;
//   console.log(item);
// }
// console.log(sum);

// const arr = [23, 34, 77, 99, 324];
// function make_avg_2(arr) {
//   var sum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     var item = arr[i];
//     sum = sum + item;
//   }
//   return sum;
// }
// var return_sum = make_avg_2(arr);
// console.log(return_sum);

// var arr2 = [25, 23, 59, 78, 92];

// function make_avg_3(arr2) {
//   var add = 0;
//   for (var i = 0; i < arr2.length; i++) {
//     var items = arr2[i];
//     add += items;
//   }
//   var aveg = add / arr2.length;
//   return aveg;
// }
// var returnAdd = make_avg_3(arr2);
// console.log(returnAdd);

// var arr_4 = [9, 29, 22, 12];

// function make_avg_4(arr_4) {
//   var sumItems = 0;
//   for (var i = 0; i < arr_4.length; i++) {
//     var item_2 = arr_4[i];
//     sumItems += item_2;
//   }
//   var arg_4 = sumItems / arr_4.length;
//   return arg_4;
// }
// var return_value = make_avg_4(arr_4);
// console.log(return_value);

// ========== problem 4)

function even_Odd(even) {
  // for (var everI = 0; everI <= even; everI += 2) {
  //   console.log("this value is even:", everI);
  // }
  // for (var oddI = 1; oddI <= even; oddI += 2) {
  //   console.log("this value is odd:", oddI);
  // }
  // if (even % 2 == 0) {
  //   return "this nalue is even";
  // } else {
  //   return "this nalue is odd";
  // }
}
// var ans = even_Odd(626984);
// console.log(ans);

// =========== 5 )

var color = "yellow";

switch (color) {
  case "green": {
    console.log("u r save ");
    break;
  }
  case "red": {
    console.log("u r in danger ");
    break;
  }
  case "yellow": {
    console.log("u should stop ");
    break;
  }
  default:
    console.log("u should go");
}
