function palindrome(str) {
    let onlyLetters = str.replace(/[`~ !@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    onlyLetters = onlyLetters.toLowerCase().split("");
    for (let i = 0; i < onlyLetters.length - 1 / 2; i++) {
        if (onlyLetters[i] !== onlyLetters[onlyLetters.length - i - 1]) {
            return false;
            break;
        }
    }
    return true;
}

// test cases
console.log("eye: ", palindrome("eye")); // true
console.log("_eye: ", palindrome("_eye")); // true
console.log("race car: ", palindrome("race car")); // true
console.log("not a palindrome: ", palindrome("not a palindrome")); // false
console.log("A man, a plan, a canal. Panama: ", palindrome("A man, a plan, a canal. Panama")); // true
console.log("never odd or even: ", palindrome("never odd or even")); // true
console.log("nope: ", palindrome("nope")); // false
console.log("almostomla: ", palindrome("almostomla")); // false
console.log("My age is 0, 0 si ega ym: ", palindrome("My age is 0, 0 si ega ym")); // true
console.log("1 eye for of 1 eye.: ", palindrome("1 eye for of 1 eye.")); // false
console.log("0_0 (: /-\ :) 0-0: ", palindrome("0_0 (: /-\ :) 0-0")); // true
console.log("five|\_/|four: ", palindrome("five|\_/|four")); // false

