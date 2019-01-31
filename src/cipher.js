function code(str, desloc) {
    let results = [];

    for (let i = 0; i < str.length; i++) {
        let letter = str.charCodeAt(i);

        while (desloc < 0) {
            desloc += 26
        }
        if (letter >= 65 && letter <= 90) {

            let calcDeslocMaius = ((letter - 65 + desloc) % 26) + 65
            let deslocFinal = String.fromCharCode(calcDeslocMaius);
            results.push(deslocFinal);

        } else if (letter >= 97 && letter <= 122) {
            let calcDeslocMinus = ((letter - 97 + desloc) % 26) + 97;
            let deslocFinal = String.fromCharCode(calcDeslocMinus);
            results.push(deslocFinal);

        } else {
            let othersLetters = String.fromCharCode(letter);
            results.push(othersLetters);
        }
    }
    return results.join("");
}

function cipher() {
    let str = document.getElementById("msg").value;
    let desloc = document.getElementById("deslocamento").value;
    desloc = parseInt(desloc);
    let codif = code(str, desloc);
    let resultCodeFinal = document.getElementById("resultCode").innerHTML = "A mensagem codificada é: <br> " + codif;
}

function descode(str, desloc) {
    let results = [];

    for (let i = 0; i < str.length; i++) {
        let letter = str.charCodeAt(i);

        while (desloc < 0) {
            desloc += 26
        }
        if (letter >= 65 && letter <= 90) {
            // let calcDeslocMaius = ((letter - 90 - desloc) % 26)
            // teste = 90 + calcDeslocMaius;
            let calcDeslocMaius = ((letter - 65 - (desloc % 26)) + 26) % 26 + 65
            let deslocFinal = String.fromCharCode(calcDeslocMaius);
            results.push(deslocFinal)

        } else if (letter >= 97 && letter <= 122) {
            let calcDeslocMinus = ((letter - 97 - (desloc % 26)) + 26) % 26 + 97
            let deslocFinal = String.fromCharCode(calcDeslocMinus);
            results.push(deslocFinal);
        } else {
            let othersLetters = String.fromCharCode(letter);
            results.push(othersLetters);
        }
    }
    return results.join("");
}

function descipher() {
    let str = document.getElementById("msg").value;
    let desloc = document.getElementById("deslocamento").value;
    desloc = parseInt(desloc);
    let descodif = descode(str, desloc);
    let resultDescodeFinal = document.getElementById("resultDescode").innerHTML = "A mensagem descodificada é: <br> " + descodif;
}