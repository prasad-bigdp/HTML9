// //simple if: 
// if (condition)
// {
//     //statements
// }
// //if-else:
// if (condition)
// {
//     //statements - runs only if condition is true else will to else
// }
// else{
//     //statements
// }
// //nested if: one if inside another if
// if(condition1){
//     if(condition20){
//         //statements
//     }
// }
// //if-else-if: it works for multi level if and else
// if(consition1)
// {
    
// }
// else if(condition2)
// {

// }
// else{

// }
// without math methods find largest and smallest in three numbers
function smallLarge (a, b, c)
{
    const largest = a > b ? (a > c ? a : c) : b > c ? b : c
    const smallest = a < b ? (a < c ? a : c) : b < c ? b : c
    return {
        small: smallest,
        large: largest
    }
}
const result = smallLarge(5, 8, 9)
console.log(result.small, result.large)

// switch
//create a function which takes an option + , - , * , / and two values , based on operation it will perform that operation and return result
function calculator (op, a, b)
{
    switch (op)
    {
        case '+': return a + b;
        case '-': return a-b;
        case '*': return a*b;
        case '/': return a/b;
        default: alert("please enter valid operation + or - or * or /")
    }
}
const result2 = calculator('*', 5, 8)
alert(result2)





































