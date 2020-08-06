console.log('Sample JavaScript HW#1');

var myNum = 10, 
    myStr = 'строка', 
    myBool = true, 
    myArr = [1, 2, 3, 4, 5],
    myObj = {first: 'First Name', last: 'Last Name'};

console.log('myNum ', myNum );
console.log('myStr', myStr);
console.log('myBool', myBool);
console.log('myArr', myArr);
console.log('myObj', myObj);


var decimal2 = myNum. toFixed(2)

console.log(decimal2);

var i = 20;

console.log('Инкремент префиксный', (++i));
console.log('Инкремент постфиксный', (i++));
console.log('Значение переменной i:', i);
console.log('Декремент префиксный', (--i));
console.log('Декремент постфиксный', (i--));
console.log('Значение переменной i:', i);

var myTest = 20;

myTest += 3;
console.log('+=', myTest)

myTest -= 3;
console.log('-=', myTest)

myTest *= 3;
console.log('*=', myTest)

myTest /= 3;
console.log('/=', myTest)

myTest %= 3;
console.log('%=', myTest)

var myPi = Math.PI;
    myRound = Math.round(89.279);
    myRandom = Math.random()*10;
    myPow = Math.pow(3,5);

console.log('myPi:', myPi);

console.log('myRound:', myRound);

console.log('myRandom:', myRandom);

console.log('myPow:', myPow);

var strObj = {str: 'Мама мыла раму, рама мыла маму'};
    strObj.length = strObj.str.length;

console.log('strObj=', strObj);

var isRamaPos = strObj.str.indexOf('рама');

console.log('isRamaPos:', isRamaPos);

var strReplace = strObj.str.replace('Мама мыла раму, рама мыла маму', 'Мама моет раму, Рама держит маму');

console.log('strReplace:', strReplace);

console.log(strReplace.toUpperCase());
console.log('Мама моет раму, Рама держит маму'.toLowerCase());
