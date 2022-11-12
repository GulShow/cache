'use strict';
function cacheFunction() {
    const cache = new Map();
    return (func) => {
        if (!cache.has(func)) {
            console.log('Loading...');
            cache.set(func, func)
        } else {
            console.log('Get from cache!')
        }
        return cache.get(func)
    }
}


function ab (a,b) {
    console.log('--------');
    return a + b
}
const cacheFunctionExample = cacheFunction();
console.log(cacheFunctionExample(ab(10, 5)));
console.log(cacheFunctionExample(ab(10, 5)));


