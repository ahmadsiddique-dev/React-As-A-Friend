// Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.  


function nextAlphabet(st) {
    let res = ""
    for(let i = 0; i < st.length; i++) {
        let entity = ((st[i].charCodeAt()) + 1);
        res += String.fromCharCode(entity)
    }
    return res;
}

console.log(nextAlphabet("ahmad"))