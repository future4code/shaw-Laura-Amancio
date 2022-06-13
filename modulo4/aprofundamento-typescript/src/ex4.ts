// b) colocaria no package.json na sessão scripts o comando "start": "tsc && ./build/'caminho a seguir até o arquivoQueQuero.js'", este caminho podendo variar de acordo de onde quero que o build seja feito.
// Posso também rodar no próprio terminal o comando tsc seguido do nome do arquivo.

// c) consigo transpilar mais de um arquivo direto no temrinal, rosando o tsc e nomeando os arquivos que quero transpilar, separados por expaços.
// existe a possibilidade de fazer isso configurando o tsconfig.json na propriedade "outFile": "./out.js", definindo um arquivo de saída de código-fonte único.

