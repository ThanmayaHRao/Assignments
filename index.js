function demo_func(a){
    document.writeln(a)
    console.log(a)
}
demo_func("welcome to named function")

let x = 10;
let arrow=(value)=>{
    return value;
}

let y = arrow(x)
console.log(y)

let str = (value)=>{
    return value
}
let a = str("ExcelR")
console.log(a)

let bool = (val)=>{
    if(val>0)
    return true
}
let b = bool(1)
console.log(b)

let arr = (val)=>{
    console.log(val);
}

arr([100,200,300,400,500])

let arr1 = (val)=>{
    console.log(val);
}

arr1({sub_one:'react js',sub_two:'Node_js',sub_three:'mongoDB'})

let arr2 = (val)=>{
    console.log(val);
}

arr2([{p_id:111,p_name:"p_one",p_cost:10000},
    {p_id:222,p_name:"p_two",p_cost:20000},
    {p_id:333,p_name:"p_three",p_cost:30000}
])



