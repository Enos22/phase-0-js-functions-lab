//create functions
function calculateTax(amount){
   return amount * 0.1;
   
}
//convert To Upper Case
function convertToUpperCase(text){
    return text.toUpperCase();
}
//find maximum

function findMaximum(num1,num2){
    return Math.max(num1,num2);
}
function isPalindrome(word){
    let lowerWord = word.toLowerCase();
    let reversedWord = lowerWord.split("").reverse().join("");
    return lowerWord === reversedWord;
}
// or below works but does not check for case
//    let newword = "";
//     for(let i = word.length - 1; i >= 0; i--){
//         newword = newword + word[i];
//     }
//             if (newword === word){
//                 return true;                
//             } else{
//                 return false;
//             }
//         }
    


// calculate discounted price

function calculateDiscountedPrice(originalPrice, discountedPercentage){
    return originalPrice - (discountedPercentage /100) * originalPrice;
    //discountedPercentage = (originalPrice)
    //return price;
}



//console.log(calculateDiscountedPrice(100, 20));
console.log(isPalindrome("Lop"))

// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };