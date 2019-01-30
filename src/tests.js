if (code("xyz", 1) === "yza") {
    console.log("SIM");
} else {
    console.log("Não! é diferente de yza");
}

if (code("R S", 10) === "B C") {
    console.log("SIM");
} else {
    console.log("Não! é diferente de B C");
}

if (code("É", 10) === "É") {
    console.log("SIM");
} else {
    console.log("Não! é diferente de É");
}

if (descode("yza", 1) === "xyz") {
    console.log("SIM");
} else {
    console.log("Não! é diferente de xyz");
}

if (descode("B C", 10) === "R S") {
    console.log("SIM");
} else {
    console.log("Não! é diferente de R S");
}

if (descode("É", 10) === "É") {
    console.log("SIM");
} else {
    console.log("Não! é diferente de É");
}