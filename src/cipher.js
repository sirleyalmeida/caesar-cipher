function cipher() {
    const string = document.getElementById("msg").value;
    let offset = document.getElementById("offset").value;
    offset = parseInt(offset);
    const encodif = encode(string, offset);
    document.getElementById("resultCode").innerHTML = encodif;
}

function encode(string, offset) {
    const results = [];

    if (offset % 26 === 0) {
        alert("Números múltiplos de 26 não codificam, pois o alfabeto possui 26 letras");
    }

    for (let i in string) {
        const letter = string.charCodeAt(i);

        while (offset < 0) {
            offset += 26
        }
        if (letter >= 65 && letter <= 90) {
            const calcOffsetUpper = ((letter - 65 + offset) % 26) + 65
            const offsetFinal = String.fromCharCode(calcOffsetUpper);
            results.push(offsetFinal);

        } else if (letter >= 97 && letter <= 122) {
            const calcOffsetLower = ((letter - 97 + offset) % 26) + 97;
            const offsetFinal = String.fromCharCode(calcOffsetLower);
            results.push(offsetFinal);

        } else {
            const othersLetters = String.fromCharCode(letter);
            results.push(othersLetters);
        }
    }
    return results.join("");
}

function decipher() {
    const string = document.getElementById("msg").value;
    let offset = document.getElementById("offset").value;
    offset = parseInt(offset);
    const decodif = decode(string, offset);
    document.getElementById("resultDecode").innerHTML = decodif;
}

function decode(string, offset) {
    const results = [];

    if (offset % 26 === 0) {
        alert("Números múltiplos de 26 não decodificam, pois o alfabeto possui 26 letras");
    }

    for (let i in string) {
        const letter = string.charCodeAt(i);

        while (offset < 0) {
            offset += 26
        }
        if (letter >= 65 && letter <= 90) {
            const calcOffsetUpper = ((letter - 65 - (offset % 26)) + 26) % 26 + 65
            const offsetFinal = String.fromCharCode(calcOffsetUpper);
            results.push(offsetFinal)

        } else if (letter >= 97 && letter <= 122) {
            const calcOffsetLower = ((letter - 97 - (offset % 26)) + 26) % 26 + 97
            const ffsetFinal = String.fromCharCode(calcOffsetLower);
            results.push(ffsetFinal);

        } else {
            const othersLetters = String.fromCharCode(letter);
            results.push(othersLetters);
        }
    }
    return results.join("");
}