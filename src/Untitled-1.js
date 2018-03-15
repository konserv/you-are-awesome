const a = {};
const b = {};
const c = {};
const d = {};
const e = {};
const f = {};
const g = {};
const h = {};

a.__proto__ = b;
b.__proto__ = c;
c.__proto__ = d;
d.__proto__ = e;
e.__proto__ = f;
f.__proto__ = g;
g.__proto__ = h;

function sortByProto(arr) {
    arr.sort();
    return(arr);
}


console.log(sortByProto([d, b, h, a]));

//assert.deepEqual(arr, [a, b, d, h]);

console.log(sortByProto([e, c, d, h]));
//assert.deepEqual(arr, [c, d, e, h]);