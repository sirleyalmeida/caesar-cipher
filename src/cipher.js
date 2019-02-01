function cipher() {
    let string = document.getElementById("msg").value;
    let offset = document.getElementById("deslocamento").value;
    offset = parseInt(offset);
    let encodif = encode(string, offset);
    let resultCodeFinal = document.getElementById("resultCode").innerHTML = "A mensagem codificada é: <br> " + encodif;
}

function encode(string, offset) {
    let results = [];

    if (offset % 26 === 0) {
        alert("Números múltiplos de 26 não codificam, pois o alfabeto possui 26 letras");
    }

    for (let i in string) {
        let letter = string.charCodeAt(i);

        while (offset < 0) {
            offset += 26
        }
        if (letter >= 65 && letter <= 90) {
            let calcOffsetUpper = ((letter - 65 + offset) % 26) + 65
            let offsetFinal = String.fromCharCode(calcOffsetUpper);
            results.push(offsetFinal);

        } else if (letter >= 97 && letter <= 122) {
            let calcOffsetLower = ((letter - 97 + offset) % 26) + 97;
            let offsetFinal = String.fromCharCode(calcOffsetLower);
            results.push(offsetFinal);

        } else {
            let othersLetters = String.fromCharCode(letter);
            results.push(othersLetters);
        }
    }
    return results.join("");
}

function decipher() {
    let string = document.getElementById("msg").value;
    let offset = document.getElementById("deslocamento").value;
    offset = parseInt(offset);
    let decodif = decode(string, offset);
    let resultDecodeFinal = document.getElementById("resultDecode").innerHTML = "A mensagem decodificada é: <br> " + decodif;
}

function decode(string, offset) {
    let results = [];

    if (offset % 26 === 0) {
        alert("Números múltiplos de 26 não decodificam, pois o alfabeto possui 26 letras");
    }

    for (let i in string) {
        let letter = string.charCodeAt(i);

        while (offset < 0) {
            offset += 26
        }
        if (letter >= 65 && letter <= 90) {
            let calcOffsetUpper = ((letter - 65 - (offset % 26)) + 26) % 26 + 65
            let offsetFinal = String.fromCharCode(calcOffsetUpper);
            results.push(offsetFinal)

        } else if (letter >= 97 && letter <= 122) {
            let calcOffsetLower = ((letter - 97 - (offset % 26)) + 26) % 26 + 97
            let ffsetFinal = String.fromCharCode(calcOffsetLower);
            results.push(ffsetFinal);

        } else {
            let othersLetters = String.fromCharCode(letter);
            results.push(othersLetters);
        }
    }
    return results.join("");
}