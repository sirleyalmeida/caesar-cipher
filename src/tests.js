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