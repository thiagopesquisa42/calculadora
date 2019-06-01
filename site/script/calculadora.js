export function Somar(operadorEsquerda, operadorDireita){
    LogarMensagem(`Somando ${operadorEsquerda} + ${operadorDireita}: `); 
    return operadorEsquerda + operadorDireita;
};

export function Dividir(dividendo, divisor){
    if(divisor == 0){
        LogarMensagem(`Erro, divisão por zero`); 
        return;
    }
    LogarMensagem(`Dividindo ${dividendo} / ${divisor}: `); 
    return dividendo / divisor;
};

export function Subtrair(operadorEsquerda, operadorDireita){
    LogarMensagem(`Subtrair ${operadorEsquerda} - ${operadorDireita}: `); 
    return operadorEsquerda - operadorDireita;
};

export function Multiplicar(operadorEsquerda, operadorDireita){
    LogarMensagem(`Multiplicando ${operadorEsquerda} X ${operadorDireita}: `); 
    return operadorEsquerda * operadorDireita;
};

function LogarMensagem(mensagem){
    console.log(mensagem);
}
