function logger({ name, price, ...rest }) {
    console.log(name);
    console.log(rest);
}

logger({
    name: "Javascript",
    price: 2000,
    descriptiong: "Description content",
    color: "Yellow"
})


function logerArray([a, b, ...rest]) {
    console.log(rest)
}

logerArray([2, 3, 4, 5, 6]);

// ========================
// Nối 2 mảng
var array1 = ["JS", "Java", "React"];
var array2 = ["PHP", "HTML", "CSS"];

var array = array1.concat(array2);
console.log(array);
var array = [...array1, ...array2];
console.log(array);

// ===========================

var object1 = {
    name: "Javascript"
}
var object2 = {
    price: 100
}
var object3 = {
    description: "Javascript"
}

var object = {
    ...object1,
    ...object2,
    ...object3
};
console.log(object);