if (cipher.encode("xyz", 1) === "yza") {
    console.log("SIM");
} else {
    console.log("Não! é diferente de yza");
}

if (cipher.encode("R S", 10) === "B C") {
    console.log("SIM");
} else {
    console.log("Não! é diferente de B C");
}

if (cipher.encode("É", 10) === "É") {
    console.log("SIM");
} else {
    console.log("Não! é diferente de É");
}

if (cipher.encode("A", -1) === "Z") {
    console.log("SIM");
} else {
    console.log("Não! é diferente de Z");
}

if (cipher.encode("Abacate e cajá", 192) === "Klkmkdo o mktá") {
    console.log("SIM");
} else {
    console.log("Não! é diferente de Klkmkdo o mktá");
}

if (cipher.decode("yza", 1) === "xyz") {
    console.log("SIM");
} else {
    console.log("Não! é diferente de xyz");
}

if (cipher.decode("B C", 10) === "R S") {
    console.log("SIM");
} else {
    console.log("Não! é diferente de R S");
}

if (cipher.decode("É", 10) === "É") {
    console.log("SIM");
} else {
    console.log("Não! é diferente de É");
}

if (cipher.decode("A", -1) === "B") {
    console.log("SIM");
} else {
    console.log("Não! é diferente de B");
}

if (cipher.decode("Qrqsqju u sqzá", -192) === "Abacate e cajá") {
    console.log("SIM");
} else {
    console.log("Não! é diferente de Abacate e cajá");
}