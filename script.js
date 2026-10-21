        //Array Manipulation Method
//1.
/*let fruits=["Apple","Orange","pinaple","graphs","guva"];
fruits.push("watermelon","banana","papaya");
console.log(fruits);*/

//2.
/*let num=[1,2,3,4,5,6];
num.pop(-1)
console.log(num);*/

//3.
/*let name=["Mathi","elango","siva","ajith","mani","sakthi"];
name.shift();
console.log(name);*/

//4.
/*let number=[10,20,30,40];
number.unshift(11,12);
console.log(number);*/

//5.
/*let arr=[10,20,30,40,50];
arr.splice(1,2);
console.log(arr);*/

//6.
/*let arr = [1, 2, 3, 4, 5];
arr.splice(2, 1, 100);
console.log(arr);*/

//7.
/*let arr=[1,2,3,4,5];
arr.fill("hello",2,4);
console.log(arr);*/

              //Array Merge and Search Methods
//8.
/*let arr1=[1,2,,3,4,5,6];
let arr2=[7,8,9,10,11,12];
let result=arr1.concat(arr2);
console.log(result);*/

//9.
/*let arr=[10,20,30,40,50];
let result=arr.slice(1,4);
console.log(result);*/

//10.
/*let arr=[1,[2,3],[4,5],6];
let result=arr.flat(Infinity);
console.log(result);*/

//11.
/*let arr = [10, 20, 30, 40, 50];
console.log(arr.includes(70));*/

//12.
/*let arr = [5, 10, 15, 20, 25];
console.log(arr.indexOf(15));*/

//13.
/*let arr = [1, 2, 3, 2, 1, 2];
console.log(arr.lastIndexOf(2));*/

//14.
/*let number=[1,4,2,6,7,9,8,3];
console.log(number.sort())*/

//15.
/*let num=[1,2,3,4,5,6,7];
console.log(num.reverse());*/

             //Spread and Rest Operators
//16.
/*let arr=[1,2,3,4,5];
let arr2=[6,7,8,9,0];
let result=[...arr,...arr2];
console.log(result); */

//17.
/*let student={
  name:"mathi",
  age:25,
  course:"Fullstack"
};
let job={
    role:"developer",
    salary:50000,
}
let result={...student,...job};
console.log(result);*/

//18.
/*function numbers(a, b, ...c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
numbers(10, 20, 30, 40, 50, 60);*/

//19.
/*function one(a,b,...c){
  let sum = a+b+c[0]+c[1];

  console.log(sum);
}
one(10,20,30,40);*/

//20.
/*let arr1=[1,2,3,4];
let arr2=[...arr1];
console.log(arr1);
console.log(arr2);*/

        //Array Destructuring
//21.
let person={
    name:"Mathiyazhagan",
    role:"FullStack",
    Location:"Dharmapuri"
}        
let {name,role,Location}=person;
console.log(name);
console.log(role);
console.log(Location);

