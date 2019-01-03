import {union, uniq}  from 'ramda';
import soma, {sub, multi, div} from './sum';

const arr1 = [1, 1, 1, 2, 2, 3, 4, 5, 6, 6];
const arr2 = [5, 6, 6, 6, 7, 7, 8, 9, 10, 1];

const arr3  = union(arr1, arr2);
const arr4 = uniq(arr1);

function* teste(){
    yield arr3;
    yield arr4;
    yield soma(1, 4);
    yield sub(3, 2);
    yield multi(7.5, 2);
    yield div(12, 2);
}

let test = teste();
for (const g of test) {
    console.log(g);
}