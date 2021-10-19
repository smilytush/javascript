// NAming differnce:
// Constructure: Pascal
//Factory : camelCased

// Constuructor uses new keyword

function CheackContructor(name, age, city, state) {
    (this.name = name) ,
    (this.age = age),
    (this.city = city) ,
    (this.state = state);
};

const result = new CheackContructor ("Tushar", "24", "Bengaluru", "Karnataka");


function person (name, age, title) {
    const personDetails ={};
    personDetails.name = name,
    personDetails.age = age,
    personDetails.title;
    return personDetails;
};
console.log (person("smily, 24, web developer"));