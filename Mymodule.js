
const myObject = {
    name: "Akshit Singh",
    age: 21,
    greet: function() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
};

exports.myObject = myObject;
