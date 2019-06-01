export function Somar(operadorEsquerda, operadorDireita){
    Logar(`Somando ${operadorEsquerda} + ${operadorDireita}: `); 
    return operadorEsquerda + operadorDireita;
};

export function Somar3Numeros(operadorEsquerda, operadorMeio,operadorDireita){
    Logar(`Somando ${operadorEsquerda}, ${operadorMeio}, ${operadorDireita}: `); 
    return operadorEsquerda + operadorMeio + operadorDireita;
};

export function Dividir(dividendo, divisor){
    if(divisor == 0){
        Logar(`Erro, divisão por zero`); 
        return;
    }
    Logar(`Dividindo ${dividendo} / ${divisor}: `); 
    return dividendo / divisor;
};

export function Subtrair(operadorEsquerda, operadorDireita){
    Logar(`Subtrair ${operadorEsquerda} - ${operadorDireita}: `); 
    return operadorEsquerda - operadorDireita;
};

export function Multiplicar(operadorEsquerda, operadorDireita){
    Logar(`Multiplicando ${operadorEsquerda} X ${operadorDireita}: `); 
    return operadorEsquerda * operadorDireita;
};

function Logar(mensagem){
    console.log(mensagem);
}
