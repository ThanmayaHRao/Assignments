function main(){
    let c =0;
    function sub(){
        c++
        console.log(c)
    }
    return sub;
}

let y = main()
y()
y()
y()


function createUser() {
    let name = "default";   

    return {
        getName: function() {
            return name;    
        },

        setName: function(newName) {
            name = newName;  
        }
    };
}

let user = createUser();

console.log(user.getName()); 

user.setName("Thanmaya");
console.log(user.getName()); 


setTimeout(data=>{
    console.log("hello")
},3000)