//task1 tern1
let a = Math.floor(Math.random() * 100);
console.log(`a = ${a}`);
let tmp;
if(a > 10) {
    tmp = a;
} else {
    tmp = a * 2;
}
if(tmp > 5) {
    a = (2 * a) + 1
} else {
    if(a < 3){
        tmp = 1;
    } else {
        tmp = 2 * (a - 2);
    }
    if(tmp > 4){
        a = 5;
    } else if (a % 2 == 0){
        a = 6;
    } else {
        a = 7;
    }
}
console.log(a);

//task2 tern2
function manyChecks() {
    let a = Math.floor(Math.random() * 20) + 1;
    console.log(`a = ${a}`);

    let res;
    if(a > 10) res = 'a is bigger than 10 ';
    else res = 'a is less than or equal to 10 ';

    switch(a){
    case 5 : 
        res += 'an example of a special case ';
        break;
    case 15 : 
        res += 'but a is not 15 ';
        break;
    }
    if(a > 5) res += 'and a is greater than 5 ';
    else res += 'and a is less than or equal to 5 ';

    if(a % 2 == 0) res +='and a is even ';
    else res += 'and a is odd ';
    return res;
}
console.log(manyChecks());