// 5) inverter os caracteres de uma string
function inverterString(str) {
    let stringInvertida = "";
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }
    return stringInvertida;
}

const texto = "testando";
console.log("String invertida:", inverterString(texto));