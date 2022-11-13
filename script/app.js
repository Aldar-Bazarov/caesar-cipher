const ALPHABET = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];

document.getElementById("btn").onclick = () => {
    const text = document.getElementById('controlInput1').value;
    const mask = document.getElementById('controlInput2').value;

    const result = encode(text, mask);
    debugger
    document.getElementById('result').innerHTML = result;
}


const encode = (originalString, mask) => {
    let result = '';
    let maskCounter = 0;
    let lowerMask = mask.toLowerCase().replace(/ /g, '');

    for (let i = 0; i < originalString.length; i++) {
        const isUpper = originalString[i] == originalString[i].toUpperCase() ? true : false;
        const stringLetter = originalString[i].toLowerCase();
        const maskLetter = lowerMask[maskCounter];

        if (!ALPHABET.includes(stringLetter) || !ALPHABET.includes(maskLetter)) {
            result += stringLetter;
            maskCounter--;
        } else if (ALPHABET.indexOf(stringLetter) + ALPHABET.indexOf(maskLetter) < ALPHABET.length - 1) {
            result += isUpper 
                   ? ALPHABET[ALPHABET.indexOf(stringLetter) + ALPHABET.indexOf(maskLetter) + 1].toUpperCase() 
                   : ALPHABET[ALPHABET.indexOf(stringLetter) + ALPHABET.indexOf(maskLetter) + 1];
        } else {
            result += isUpper
                   ? ALPHABET[ALPHABET.indexOf(stringLetter) + ALPHABET.indexOf(maskLetter) - ALPHABET.length + 1].toUpperCase()
                   : ALPHABET[ALPHABET.indexOf(stringLetter) + ALPHABET.indexOf(maskLetter) - ALPHABET.length + 1];
        }

        maskCounter = maskCounter === lowerMask.length - 1 ? 0 : maskCounter + 1
    }

    return result;
}