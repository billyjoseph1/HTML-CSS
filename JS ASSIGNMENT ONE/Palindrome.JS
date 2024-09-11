function isPalidronme(string){
    let revString = string.toLowerCase().split('').reverse().join('');
    if (string.toLowerCase() === revString) {
        return `${string} True`;
    }
    return `${string} False`;

}

//test cases 
console.log(isPalidronme('A man,a plan, a canal, panama'));// true
console.log(isPalidronme('Was it a car or a cat I saw?'));// true
console.log(isPalidronme('Hello world'));// false
console.log(isPalidronme('mum'));// true
console.log(isPalidronme('dad'));// true