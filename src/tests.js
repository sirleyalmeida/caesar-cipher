if (encode("xyz", 1) === "yza") {
    console.log("SIM");
} else {
    console.log("Não! é diferente de yza");
}

if (encode("R S", 10) === "B C") {
    console.log("SIM");
} else {
    console.log("Não! é diferente de B C");
}

if (encode("É", 10) === "É") {
    console.log("SIM");
} else {
    console.log("Não! é diferente de É");
}

if (encode("A", -1) === "Z") {
    console.log("SIM");
} else {
    console.log("Não! é diferente de Z");
}

if (encode("Abacate e cajá", 192) === "Klkmkdo o mktá") {
    console.log("SIM");
} else {
    console.log("Não! é diferente de Klkmkdo o mktá");
}

if (decode("yza", 1) === "xyz") {
    console.log("SIM");
} else {
    console.log("Não! é diferente de xyz");
}

if (decode("B C", 10) === "R S") {
    console.log("SIM");
} else {
    console.log("Não! é diferente de R S");
}

if (decode("É", 10) === "É") {
    console.log("SIM");
} else {
    console.log("Não! é diferente de É");
}

if (decode("A", -1) === "B") {
    console.log("SIM");
} else {
    console.log("Não! é diferente de B");
}

if (decode("Qrqsqju u sqzá", -192) === "Abacate e cajá") {
    console.log("SIM");
} else {
    console.log("Não! é diferente de Abacate e cajá");
}