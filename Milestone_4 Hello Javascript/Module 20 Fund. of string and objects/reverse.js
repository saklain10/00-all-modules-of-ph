const sentence = "I am learning Web Dev.";
// let reverse = ""
// for(const letter of sentence){
//     reverse = letter + reverse
// }
// console.log(reverse)


let rev = ""
for(let i = 0; i < sentence.length; i++){
    // console.log(i);
    // console.log(sentence[i]);
   const letter = sentence[i];
    rev = letter + rev;
}
console.log(rev);

// Shortcut
// const reversed = sentence;
// const reversed = sentence.split('')
// console.log(reversed)
// const reversed = sentence.split('').reverse();
// console.log(reversed)
// const reversed = sentence.split('').reverse().join();
// console.log(reversed)
const reversed = sentence.split('').reverse().join('');
console.log(reversed)