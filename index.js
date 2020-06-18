// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
// a是一个字符串，b是一个数组。

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for (var i = 0; i < a.length; i++) {
  a[i] = a[i] * 2;
}
console.log(a);


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
var str1 = colors[0];
for (var i = 1; i < colors.length; i++) {
    str1 = str1 + " " + colors[i];
}
console.log(str1);

// case 2 output: 'Red+Green+White+Black'
var str2 = colors[0];
for (var i = 1; i < colors.length; i++) {
    str2 = str2 + "+" + colors[i];
}
console.log(str2);

// case 3 output: 'Red,Green,White,Black'
var str3 = colors[0];
for (var i = 1; i < colors.length; i++) {
    str3 = str3 + "+" + colors[i];
}
console.log(str3);

//case 1到case3可以利用一个函数表示：
function operate(array, ch) {
    if (array.length <= 0) {
        return "";
    }
    var str = array[0];
    for (var i = 1; i < array.length; i++) {
        str = str + ch + array[i];
    }
    return str;
}
console.log(operate(colors, " ")); //第二个参数分别是 " "    "+"    ","


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
a.sort(function(a, b) {return b - a;});
console.log(a);

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var myMap = {};
for (var i = 0; i < a.length; i++) {
    var key = a[i];
    if (myMap[key]) {
        myMap[key]++;
    } else {
        myMap[key] = 1;
    }
}
var result = "";
var maxCount = 0;
for (var key in myMap) {
    if (maxCount < myMap[key]) {
        maxCount = myMap[key];
        result = key;
    }
}
console.log(result);
