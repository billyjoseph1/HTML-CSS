function reverseString(str){
    const reversedString = str.split("").reduce((acc, char) => char + acc, "");
    console.log(reversedString);
}
reverseString("i am a genius");
reverseString("my name is Joseph");
reverseString("typescript");