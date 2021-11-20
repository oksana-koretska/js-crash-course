function removeDuplicates(arr1, arr2){
    const res = [];

    arr1.concat(arr2).forEach(element => {
        if(!res.includes(element)){
            res.push(element);
        }
    }
    )
    return res;
}

// console.log(removeDuplicates([5, 8, 7, 6, 5, 8], [8, 6, 1, 5, 8]));


function removeDuplicates(ar1, ar2) {
    const res = {};
    const len = Math.max(ar1.length, ar2.length);

    for (let i = 0; i < len; i++) {
        if (ar1[i] && !res[ar1[i]]) {
            res[ar1[i]] = ar1[i];
        }
        
        if (ar2[i] && !res[ar2[i]]) {
            res[ar2[i]] = ar2[i];
        }
    }

    return Object.values(res);
}

const array1 = [4, 3, 1, 2, 3];
const array2 = [3, 2, 1, 2, 3, 4];

// console.log(removeDuplicates(array1, array2));

const array3 = [{
    a: 1,
    version: '1',
}, {
    a: 2,
    version: '1.3',
}, {
    a: 3,
    version: '3',
}];

const extendedArray3 = [];

array3.forEach((item) => {
    extendedArray3.push({
        a: item.a,
        sum: item.a + 10,
    });
});

// console.log(extendedArray3);
const objA3 = array3.find(item => item.a === 3);
// console.log(objA3);
