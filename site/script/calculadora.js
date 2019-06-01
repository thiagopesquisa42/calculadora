export function Somar(operadorEsquerda, operadorDireita){
    console.log(`Somando ${operadorEsquerda} + ${operadorDireita}: `); 
    return operadorEsquerda + operadorDireita;
};

export function Dividir(dividendo, divisor){
    if(divisor == 0){
        console.log(`Erro, divisão por zero`); 
        return;
    }
    console.log(`Dividindo ${dividendo} / ${divisor}: `); 
    return dividendo / divisor;
};

export function Subtrair(operadorEsquerda, operadorDireita){
    console.log(`Subtrair ${operadorEsquerda} - ${operadorDireita}: `); 
    return operadorEsquerda - operadorDireita;
};

export function Multiplicar(operadorEsquerda, operadorDireita){
    console.log(`Multiplicando ${operadorEsquerda} X ${operadorDireita}: `); 
    return operadorEsquerda * operadorDireita;
};
