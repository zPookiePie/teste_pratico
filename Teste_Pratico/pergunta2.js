// 2) verificar se um número pertence à sequência de Fibonacci
function isFibonacci(num) {
    let a = 0, b = 1;
    while (b <= num) {
        if (b === num) return true;
        [a, b] = [b, a + b];
    }
    return false;
}

const num = 3; // substitua por qualquer número desejado para testar
console.log(`O número ${num} ${isFibonacci(num) ? 'pertence' : 'não pertence'} à sequência de Fibonacci.`);