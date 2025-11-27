function* gen(){
    console.log(1);
    yield;
     console.log(2);
    yield;
     console.log(3);
    yield;
     console.log(4);
    yield;
     console.log(5);
    yield;
}
let g =gen();
g.next()
g.next()
g.next()
g.next()
g.next()


class Car {
    name;
    model;
    constructor(name,model) {
        this.model = model;
        this.name = name;
    }

    getDetails() {
        return `Car: ${this.name} ${this.model}`;
    }
}




let c = new Car("tesla","Model S")
console.log(c.getDetails())

