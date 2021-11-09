function getThis() {
    console.log(this);
}
// getThis();
// window.getThis();
// console.log(window.getThis);


function getPrice(currency = '$'){
    console.log(currency + this.price);
    return this;
}

function getName(){
    console.log(this.name);
    return this;
}

const prod1 = {
    name: 'Intel',
    price: 100,
    getPrice,
    getName(){
        console.log(this.name);
    },
    info:{
        information: ['2.3ghz'],
        getInfo: function(){
            console.log(this);
        },
    getName,
    }
}
// prod1.getPrice();
// prod1.getName();
// prod1.getName();
// prod1.info.getInfo();

const prod2 = {
name: 'AMD',
price: 50,
getPrice,
getName,
}

// prod2.getPrice();
// prod2.getName()

// let arr = [1, 2, 8, 9]
// let res = arr.reverse();
// console.log(res);

let str = 'Hello, world!';
const reverseStr = str.split('').reverse().join('');

// console.log(reverseStr);


const prod3 = {
    name: 'ARM',
    price: 150,
    getPrice,
    // getName,
}


// getName.call(prod3);

// getPrice.call(prod3, 'UA');

// getPrice.apply(prod3, ['$']);

const getPriceBind = prod3.getPrice.bind(prod3, '*');
console.log(getPriceBind);

setTimeout(getPriceBind, 1000);

