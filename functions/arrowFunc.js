const plus = (x, y) => x + y;

const plusRes = plus(1, 2);
// console.log(plusRes);

function sum(x, y){
    return x + y;
}

const withoutArg = () => console.log('Oksana');

// const singleArg = x => x * 2;
// console.log(singleArg(2));

const singleArg = (x = 1) => x * 2;
// console.log(singleArg());

const moreAction = (a, b) => {
    a *= 2;
    b *= 3;
    return a + b;
}

// console.log(moreAction(2, 5));

const returnObj = (str = '') => {
    return {
        value: str,
        length: str.length,

    }
}

// console.log(returnObj('Oksana'));

// function plusFoo(x, y) {
//     console.log(arguments);
//     return x = y;
// }

// plusFoo(1, 2, 'Oksana');

const obj = {
    firstName:'Oksana',
    age:25,
    getfirstName(){
        console.log(this);

    },
    getAgeArrow: null,
    getAge () {
    //    this.getAgeArrow= () => console.log(this);
    setTimeout(() => console.log(this));
    },
};

// obj.getfirstName();

obj.getAge();
// obj.getAgeArrow();