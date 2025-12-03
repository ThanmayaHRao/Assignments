let arr = [1,2,3,4,5]
for(let i =0 ;i<5;i++){
    let x = document.write(i,"<br/>");
}



let arr1 = ["bmw","audi","benz","porshe","ferrari"]
arr1.map((data)=>{
    console.log(data)
    
    
}
)


let f =arr1.at(0);
console.log(f)
let l =arr1.at(4);
console.log(l)


let inte = [1,2,3];
let sum =0;
let out = inte.map((data)=>{
        sum = sum + data;
        return sum;
})
let n = inte.length;
console.log(out[n-1]);

let rev = [1,2,3,4];
console.log(rev);
let d = rev.reverse();
console.log(d);


let arr2 = ["atb","mtn","rty","tgh","rty"]
let outarr = arr2.indexOf("rty")
console.log(outarr)
    
let outarr1 = arr2.includes("mtn")
console.log(outarr1);

let out23 = arr2.splice(2,4)
console.log(out23)

let arr8 = ["atb","mtn","rty","tgh","rty"]
let out24 = arr8.unshift("hhh")
console.log(arr8)
let th45 =arr8.push("ghy");
console.log(arr8)


let arr9 = ["atb","mtn","rty","tgh","rty","tty","cvf"]
let hg = arr9.slice(2,5);
console.log(hg)


