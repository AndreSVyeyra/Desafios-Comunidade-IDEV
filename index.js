
// - Criar uma função que recebe como parâmetro a idade de um usuário e retorne uma mensagem dizendo
// qual a sua faixa etária; 
// ☐ Menor que 12 anos, criança
// ☐ Entre 12 e 18 Adolescente 
// ☐ Entre 18 e 60 Adulto 
// ☐ Maior que 60 Melhor idade

function veriqueIdade(idade) {
    if (idade < 12) {
        console.log('Criança');
    } else if (idade < 18) {
        console.log('Adolecente');
    } else if (idade < 60) {

        console.log('Adulto');

    } else {

        console.log('Melhor idade');

    }
}
// - Criar uma função que recebe dois parâmetros, um é o fator e outro um simbolo aritmético (*, -, +, /),
// ☐ Crie um fluxo que verica qual o tipo de simbolo foi informado
// ☐ Dentro desta função crie um laço de repetição de 0 a 10 que gera uma tabuada
// ☐ Cada iteração deve ser um objeto { indice: x, simbolo: y, fator: z, resultado: w}
// ☐ Adicione cada iteração em um array
// ☐ Imprima o array em formato de tabela
// Ao final você deve ter a tabela de uma tabuada com indice de 1 a 10
// ----------------------------------------
// | indice | simbolo | fator | resultado |
// |    1   |    *    |   7   |     7     |
// |    2   |    *    |   7   |     14    |

function calculadora(fator, simbolo) {

    let tabuada = [];
    for (let i = 0; i <= 10; i++) {
        switch (simbolo) {
            case '+':
                tabuada.push({ indice: i, simbolo, fator, resultado: fator + i });
                break;
            case '-':
                tabuada.push({ indice: i, simbolo, fator, resultado: fator - i });
                break;
            case '*':
                tabuada.push({ indice: i, simbolo, fator, resultado: fator * i });
                break;
            case '/':
                tabuada.push({ indice: i, simbolo, fator, resultado: fator / i });
                break;
        }
    }
    console.table(tabuada);
}

// - Criar uma função que recebe por parâmetro um dia ("segunda-feira") e um horario (10) 
// e retorna uma mensagem dizendo se você pode ir ao banco nesse dia e horario informado

// Critério: o funcionamento do banco é 
// "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira"
// horarios: de 10 até 15h


// calculadora(1, '+');
// calculadora(7, '-');
// calculadora(9, '*');
// calculadora(24, '/');

function funcBanco(dia, horario) {
    if (dia == 'sabado' || dia == 'domingo') {
        console.log("Banco Feichado");
    }
    else if (horario < 10 || horario > 15) {
        console.log("Banco Feichado");
    } else {
        console.log("Banco Aberto");
    }
}

//funcBanco('terca', 11);

function hora(horario) {
    if (horario >= 0 && horario < 6) {
        console.log("Madrugada");
    } else if (horario >= 6 && horario < 12) {
        console.log("Manhã");
    } else if (horario >= 12 && horario < 18) {
        console.log("Tarde");
    }
    else if (horario >= 18 && horario <= 24) {
        console.log("Noite");
    } else {
        console.log("Inválido digite o horario correto");
    }
}
hora(12);

// - Criar uma função que recebe por parâmetro um horário de 0 à 24 e retorna o resultado dizendo se é 
// madrugada, manhã, tarde ou noite; 
// ☐ Entre 00:00 e 06:00: madrugada 
// ☐ Entre 06:00 e 12:00: manhã 
// ☐ Entre 12:00 e 18:00: tarde
// ☐ Entre 18:00 e 24:00: noite