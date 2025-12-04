let arr = [1,2,3,4,5];
 

arr.map(data => {
    let data1 = data * 10;
    console.log(data1)
 
});

let arr1 = [10,20,30,40,50,60,70]
 let result = arr1.filter(data=>
    data>50
 )
 console.log(result)

let arr3 = [1,2,3,4]
let out = arr3.reduce((data,value)=>data*value,1)
console.log(out)

let arr4 = [1,2,3,4]
let res = arr4.findIndex(value => value ==3)
console.log(res)

let arr5 = [1,2,3,4,5,6,7,8,9]
let out1= arr5.every(value=>value<10)
console.log("if less shows :"+out1)


let out5 = arr5.some(value => value % 5)
console.log(out5)

let str = "output"
let res7 = Array.from(str)
console.log(res7)

let str1 = "string"
let str2 =str1.split("");
console.log(str2)
let str3 = str2.reverse()
console.log(str3)
let str4 = str3.join("");
console.log(str4)

let rep = "hello hoe are u"
let pre = rep.replace("hoe","how")
console.log(pre)

let pre1 = rep.substring(0,5)
console.log(pre1)

let pre2 = rep.substr(0,5)
console.log(pre2)
