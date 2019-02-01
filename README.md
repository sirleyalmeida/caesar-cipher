# Cifra de César

Iniciei o Projeto Cipher no javaScript com uma Array para entender como pegar uma palavra (string) para transformar em código ASCII seus caracteres. A partir disso, adicionei na função o deslocamento (offset) para adiconá-lo em cada caractere (letter) na codificação, os cálculos estão inseridos em condicionais de intervalos referente aos caracteres do alfabeto maiúsculos e minúsculos no código ASCII. O resultado final retorna a mensagem codificada. A decodificação é feita através da subtração do offset em outra função semelhante. Com as funções funcionando, foram incluídas: outra condicional para os outros caracteres fora do intervalo do alfabeto, em que continuam os mesmos da entrada; um loop para o offset negativo o cálculo; e um alert para informar o usuário se o offset for múltiplo do tamanho do alfabeto.
Diante disso, organizei o html com um título, uma breve explicação do que é a Cifra de César, um input do tipo texto para receber a mensagem, outro do tipo número para receber o offset, dois botões para codificar e descodificar, quando clicados exibem o resultado abaixo.


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

