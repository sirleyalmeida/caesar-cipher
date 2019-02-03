# Cifra de César

O Projeto Cipher iniciou-se no planejamento e na construção de um fluxograma em diagrama de blocos, partindo assim para o javaScript. Com base na oficina sobre Arrays, entendendo melhor como fazer uma função que recebe uma palavra (string) e transforma os caracteres em seus relativos no código ASCII. A partir disso, inseriu-se na função o deslocamento (offset) para adiconá-lo em cada caractere (letter) na codificação, os cálculos foram inseridos em condicionais de intervalos referente aos caracteres do alfabeto maiúsculos e minúsculos no código ASCII e o resultado final retorna a mensagem codificada. A decodificação é feita de forma semelhante, porém através da subtração do offset. Com as funções funcionando, foram incluídas: 1) outra condicional para os outros caracteres fora do intervalo do alfabeto para permanecerem os mesmos da entrada; 2) um loop para o offset negativo funcionar da maneira esperada; e um alert para informar o usuário quando o offset é múltiplo do tamanho do alfabeto a letra não é codificada ou descodificada.
Diante disso, partiu-se para a organização do html com um título, uma breve explicação do que é a Cifra de César, um input do tipo texto para receber a mensagem, outro do tipo número para receber o offset, dois botões para codificar e descodificar, quando clicados que exibem os resultados abaixo. O css foi implementado por último, para ser responsivo e de fácil entendimento.


![alt text](https://github.com/sirleyalmeida/caesar-cipher/blob/master/Untitled%20Diagram%20(3).png)"Fluxograma/Diagrama de bloco"


### Checklist

##### Parte Obrigatória

* [X] `README.md` com explicações e desenho do projeto
* [X] Usar VanillaJS.
* [X] Permitir escrever um texto, com letras maiúsculas e minúsculas, para ser cifrado.
* [X] Mostrar o resultado da cifra corretamente.
* [X] Permitir escrever um texto, com letras maiúsculas e minúsculas, para ser descifrado.
* [X] Mostrar o resultado descifrado corretamente.
* [X] Permitir escolher o `offset` (_deslocamento_) a ser usado na cifragem/descifragem.
* [X] Implementa `cipher.encode`.
* [X] Implementa `cipher.decode`.
* [X] Criar testes unitários.

##### Parte Opcional: "Hacker edition"

* [X] Permite usar um `offset` (_deslocamento_) negativo
* [X] Cifra/descifra _outros_ caracteres (espaços, pontuação, `ã`, `á`, ...)

